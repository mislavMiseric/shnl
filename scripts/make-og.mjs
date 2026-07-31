import sharp from "sharp";

const outline =
  "M 24 136 L 32 202 L 56 216 L 88 157 L 112 157 L 136 192 L 162 290 " +
  "L 216 333 L 259 358 L 338 409 L 391 454 L 426 479 L 419 464 L 372 426 " +
  "L 352 403 L 324 370 L 296 347 L 240 280 L 204 218 L 208 174 L 256 179 " +
  "L 296 160 L 344 176 L 392 179 L 440 185 L 464 206 L 494 166 L 464 151 " +
  "L 472 131 L 452 95 L 432 90 L 376 102 L 328 84 L 296 50 L 272 17 " +
  "L 248 22 L 208 56 L 196 95 L 172 118 L 168 140 L 128 123 L 108 118 L 64 132 Z";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0b1f3a" />
  <g transform="translate(640, 45) scale(1.1)">
    <path d="${outline}" fill="#1d3a63" stroke="#3c5c8c" stroke-width="3" stroke-linejoin="round" />
  </g>
  <text x="80" y="330" font-family="sans-serif" font-size="190" font-weight="700" fill="#ffffff">SHNL</text>
  <text x="84" y="430" font-family="sans-serif" font-size="34" fill="#bcd0e8">Pomoć kod ovisnosti o kockanju</text>
  <text x="84" y="480" font-family="sans-serif" font-size="34" fill="#bcd0e8">u gradovima SuperSport HNL-a</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("public/og.png written");
