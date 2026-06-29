const CACHE_NAME = 'sistema-tracy-v1';
const urlsToCache = ['./tracy-system.html'];

// Instalar SW y cachear recursos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
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

// Interceptar fetch para modo offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// Escuchar mensajes para programar notificaciones
self.addEventListener('message', event => {
  if (event.data.type === 'SCHEDULE_NOTIFICATION') {
    const { hora, minuto, titulo, cuerpo } = event.data;
    // Guardar la configuración
    self.notificationConfig = { hora, minuto, titulo, cuerpo };
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
