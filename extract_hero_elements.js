import sharp from 'sharp';
import fs from 'fs';

async function processMockup() {
  const metadata = await sharp('public/images/mockup_reference.jpg').metadata();
  console.log('Mockup metadata:', metadata.width, 'x', metadata.height);

  // The mockup is approximately 1024x576 or similar.
  // Let's crop the right side student area:
  // from about x: 50% to 100%, y: 15% to 75%
  const width = metadata.width;
  const height = metadata.height;

  const left = Math.round(width * 0.50);
  const top = Math.round(height * 0.16);
  const cropWidth = Math.round(width * 0.50);
  const cropHeight = Math.round(height * 0.55);

  await sharp('public/images/mockup_reference.jpg')
    .extract({ left, top, width: cropWidth, height: cropHeight })
    .toFile('public/images/hero_students_exact.jpg');

  console.log('Saved hero_students_exact.jpg');
}

processMockup();
