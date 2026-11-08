// Genera los íconos PNG de la app a partir de icon.svg.
// Uso: node generate-icon.js   (necesita Playwright con Chromium instalado)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const svg = fs.readFileSync(path.join(__dirname, 'icon.svg'), 'utf8');
const tamanos = [
  ['icon-192.png', 192],
  ['icon-512.png', 512],
  ['apple-touch-icon.png', 180],
];

(async () => {
  const browser = await chromium.launch();
  for (const [archivo, size] of tamanos) {
    const page = await browser.newPage({ viewport: { width: size, height: size } });
    await page.setContent(`<style>html,body{margin:0}svg{display:block;width:${size}px;height:${size}px}</style>${svg}`);
    await page.screenshot({ path: path.join(__dirname, archivo), omitBackground: false });
    await page.close();
    console.log(`✓ ${archivo} (${size}x${size})`);
  }
  await browser.close();
})();
