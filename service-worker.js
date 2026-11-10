// Cambiar CACHE_NAME solo hace falta si cambia la lista de PRECACHE o la estrategia:
// el HTML ya no queda "congelado" porque se pide primero a la red (ver más abajo).
const CACHE_NAME = 'sistema-tracy-v8';

// Archivos propios que se guardan al instalar, para poder abrir la app sin conexión.
const PRECACHE = [
  './tracy-system.html',
  './fonts/Messi-Regular.ttf',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

// Librerías externas con versión fija: nunca cambian, así que se pueden servir desde el
// cache sin consultar la red. Se precachean "a mejor esfuerzo" (si alguna falla al
// instalar, igual se guarda la primera vez que la app la pida con conexión).
const PRECACHE_EXTERNO = [
  'https://unpkg.com/lucide@1.60.0/dist/umd/lucide.min.js'
];

// Hosts externos cuyos archivos estáticos (scripts, CSS de fuentes, archivos de fuentes)
// se guardan en cache para el modo offline. OJO: firestore.googleapis.com y el resto de
// los dominios de Firebase/Google que usan streaming NO van acá — el SW no debe
// interponerse en esas conexiones (cortaba la sincronización en tiempo real).
const HOSTS_ESTATICOS = new Set([
  'unpkg.com',               // Lucide
  'www.gstatic.com',         // SDK de Firebase (/firebasejs/10.12.0/...)
  'fonts.googleapis.com',    // CSS de Google Fonts
  'fonts.gstatic.com'        // archivos de fuentes
]);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(PRECACHE);
    await Promise.all(PRECACHE_EXTERNO.map(async url => {
      try {
        const res = await fetch(url, { mode: 'no-cors' });
        await cache.put(url, res);
      } catch (e) { /* se guarda más tarde, en el primer uso con conexión */ }
    }));
  })());
  self.skipWaiting();
});

// Activar y limpiar caches viejos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Red primero: si hay conexión se usa (y se guarda) la versión nueva; sin conexión, la
// del cache. Para el HTML: así cada deploy llega apenas se abre la app con internet.
async function redPrimero(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const res = await fetch(request);
    if (res && res.ok) cache.put(request, res.clone());
    return res;
  } catch (e) {
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    throw e;
  }
}

// Cache primero: para archivos que no cambian (íconos, librerías con versión fija,
// fuentes). Si no están en cache, se piden a la red y se guardan.
async function cachePrimero(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;
  const res = await fetch(request);
  // res.type === 'opaque' es una respuesta cross-origin sin CORS (ej. <script> de
  // unpkg): no se puede leer su status, pero sí guardarla y servirla.
  if (res && (res.ok || res.type === 'opaque')) cache.put(request, res.clone());
  return res;
}

// Solo se interceptan peticiones GET de la app (mismo origin) y de HOSTS_ESTATICOS.
// Todo lo demás pasa sin tocar: en particular, las conexiones streaming/long-polling
// que Firestore abre hacia firestore.googleapis.com para sincronización en tiempo real
// (onSnapshot) no toleran que el Service Worker se interponga — eso producía
// "FetchEvent.respondWith received an error: Load failed" y cortaba la sincronización.
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  if (url.origin === self.location.origin) {
    const esHtml = request.mode === 'navigate' || url.pathname.endsWith('.html') ||
                   url.pathname.endsWith('/');
    // service-worker.js lo maneja el navegador; manifest también conviene fresco.
    if (esHtml || url.pathname.endsWith('manifest.json')) {
      event.respondWith(redPrimero(request));
    } else {
      event.respondWith(cachePrimero(request));
    }
    return;
  }

  if (HOSTS_ESTATICOS.has(url.hostname)) {
    // De www.gstatic.com solo el SDK de Firebase (versionado), nada más de ese host.
    if (url.hostname === 'www.gstatic.com' && !url.pathname.startsWith('/firebasejs/')) return;
    // El CSS de Google Fonts no tiene versión en la URL: red primero, cache de respaldo.
    if (url.hostname === 'fonts.googleapis.com') event.respondWith(redPrimero(request));
    else event.respondWith(cachePrimero(request));
  }
});

// Escuchar mensajes desde la app
self.addEventListener('message', event => {
  if (!event.data) return;

  if (event.data.type === 'SCHEDULE_NOTIFICATION') {
    const { hora, minuto, titulo, cuerpo } = event.data;
    self.notificationConfig = { hora, minuto, titulo, cuerpo };
  }

  if (event.data.type === 'SHOW_NOTIFICATION') {
    self.registration.showNotification('Sistema Tracy 🔥', {
      body: event.data.mensaje || '¡Es hora de registrar tus hábitos!',
      icon: './icon-192.png',
      tag: 'recordatorio-habitos',
      renotify: true,
      vibrate: [200, 100, 200]
    });
  }
});

// Mostrar notificación cuando se recibe un push
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.titulo || 'Sistema Tracy', {
      body: data.cuerpo || '¡Es hora de registrar tus hábitos!',
      icon: './icon-192.png',
      badge: './icon-192.png',
      vibrate: [200, 100, 200],
      tag: 'habitos-recordatorio',
      renotify: true,
      actions: [
        { action: 'abrir', title: '✅ Registrar hábitos' },
        { action: 'cerrar', title: 'Luego' }
      ]
    })
  );
});

// Manejar click en notificación
self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'abrir' || !event.action) {
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then(clientList => {
        if (clientList.length > 0) {
          clientList[0].focus();
        } else {
          clients.openWindow('./tracy-system.html');
        }
      })
    );
  }
});
