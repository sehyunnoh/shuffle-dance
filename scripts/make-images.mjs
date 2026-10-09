// Generates the social preview image and the apple touch icon into public/.
// Run with: node scripts/make-images.mjs  (needs the `sharp` package that Astro already installs)
import sharp from 'sharp';

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="a" cx="85%" cy="0%" r="70%"><stop offset="0" stop-color="#5b1a9a" stop-opacity=".75"/><stop offset="1" stop-color="#0b0716" stop-opacity="0"/></radialGradient>
    <radialGradient id="b" cx="0%" cy="20%" r="60%"><stop offset="0" stop-color="#ff2e93" stop-opacity=".45"/><stop offset="1" stop-color="#0b0716" stop-opacity="0"/></radialGradient>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff2e93"/><stop offset="1" stop-color="#19e3ff"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#0b0716"/>
  <rect width="1200" height="630" fill="url(#a)"/>
  <rect width="1200" height="630" fill="url(#b)"/>
  <path d="M90 520h150l55-95h120" fill="none" stroke="url(#g)" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>
  <text x="90" y="150" font-family="Arial Black, Arial, sans-serif" font-size="30" letter-spacing="6" fill="#c6ff3d">30 MINUTES A DAY</text>
  <text x="90" y="260" font-family="Arial Black, Arial, sans-serif" font-size="104" fill="#f6f3ff">LEARN TO</text>
  <text x="90" y="372" font-family="Arial Black, Arial, sans-serif" font-size="104" fill="url(#g)">SHUFFLE DANCE</text>
  <text x="90" y="580" font-family="Arial, sans-serif" font-size="34" fill="#b3a8d6">Shuffle Lab · A step-by-step plan for beginners</text>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff2e93"/><stop offset="1" stop-color="#19e3ff"/></linearGradient></defs>
  <rect width="64" height="64" fill="#0b0716"/>
  <path d="M16 44h14l6-14h12" fill="none" stroke="url(#g)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og-default.png');
await sharp(Buffer.from(icon)).png().toFile('public/apple-touch-icon.png');
console.log('done');
