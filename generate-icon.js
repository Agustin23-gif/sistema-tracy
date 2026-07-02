const { createCanvas } = require('canvas');
const fs = require('fs');

function generarIcono(size, filename) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Fondo naranja redondeado
  const radius = size * 0.22;
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(size - radius, 0);
  ctx.quadraticCurveTo(size, 0, size, radius);
  ctx.lineTo(size, size - radius);
  ctx.quadraticCurveTo(size, size, size - radius, size);
  ctx.lineTo(radius, size);
  ctx.quadraticCurveTo(0, size, 0, size - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();
  ctx.fillStyle = '#E8450A';
  ctx.fill();

  // Letras "ST" en blanco bold
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${size * 0.42}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('ST', size / 2, size / 2);

  // Guardar como PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filename, buffer);
  console.log(`✅ Generado: ${filename}`);
}

generarIcono(192, 'icon-192.png');
generarIcono(512, 'icon-512.png');
generarIcono(180, 'apple-touch-icon.png');
