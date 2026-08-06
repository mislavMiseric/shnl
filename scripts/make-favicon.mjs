import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

// sharp cannot write ICO; a single-image ICO container around a PNG is valid
// and supported everywhere ICO is still used.
function pngToIco(png) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count
  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0); // width
  entry.writeUInt8(32, 1); // height
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8); // image data size
  entry.writeUInt32LE(22, 12); // image data offset (6 + 16)
  return Buffer.concat([header, entry, png]);
}

const svg = readFileSync("public/favicon.svg");
const png32 = await sharp(svg, { density: 300 }).resize(32, 32).png().toBuffer();
writeFileSync("public/favicon.ico", pngToIco(png32));
console.log("public/favicon.ico written");

// full-bleed square, no rounded corners: iOS applies its own mask
const touchSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" fill="#0a6076"/>
  <text x="90" y="126" text-anchor="middle" font-family="Georgia, serif" font-size="98" font-weight="700" fill="#fdfcf8">S</text>
</svg>`;
await sharp(Buffer.from(touchSvg)).png().toFile("public/apple-touch-icon.png");
console.log("public/apple-touch-icon.png written");
