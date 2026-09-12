import sharp from 'sharp';

async function cropStudents() {
  const metadata = await sharp('public/images/mockup_reference.jpg').metadata();
  const width = metadata.width;
  const height = metadata.height;

  // Exact clean crop of students
  const left = Math.round(width * 0.51);
  const top = Math.round(height * 0.155);
  const cropWidth = Math.round(width * 0.49);
  const cropHeight = Math.round(height * 0.48);

  await sharp('public/images/mockup_reference.jpg')
    .extract({ left, top, width: cropWidth, height: cropHeight })
    .toFile('public/images/hero_students_exact.jpg');

  console.log('Clean crop saved: hero_students_exact.jpg');
}

cropStudents();
