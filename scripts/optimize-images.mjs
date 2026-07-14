import { readdir, stat, rename } from 'node:fs/promises';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const PHOTOS_DIR = 'docs/public/photos/displaced';

async function optimizeImages() {
  const files = await readdir(PHOTOS_DIR);
  const images = files.filter(f => /\.jpe?g$/i.test(f));

  let totalSaved = 0;
  let totalOriginal = 0;

  for (const file of images) {
    const filePath = join(PHOTOS_DIR, file);
    const originalSize = (await stat(filePath)).size;
    totalOriginal += originalSize;

    const ext = extname(file);
    const baseName = file.slice(0, -ext.length);
    const tempPath = join(PHOTOS_DIR, `${baseName}.tmp`);

    await sharp(filePath)
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(tempPath);

    const newSize = (await stat(tempPath)).size;
    totalSaved += newSize;

    await rename(tempPath, filePath);

    const saved = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(`${file}: ${(originalSize / 1024).toFixed(0)} KB → ${(newSize / 1024).toFixed(0)} KB (${saved}% smaller)`);
  }

  const totalPct = ((1 - totalSaved / totalOriginal) * 100).toFixed(1);
  console.log(`\nTotal: ${(totalOriginal / 1024 / 1024).toFixed(1)} MB → ${(totalSaved / 1024 / 1024).toFixed(1)} MB (${totalPct}% smaller)`);
}

optimizeImages().catch(err => {
  console.error(err);
  process.exit(1);
});
