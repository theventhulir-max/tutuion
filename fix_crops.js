import sharp from 'sharp';

async function fixCrops() {
  const gridFile = 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/750ca05f-b57e-4afb-9d7a-6ea7dd6232c0/.user_uploaded/media_1789190190962.jpg';
  const gridMeta = await sharp(gridFile).metadata();
  const colW = gridMeta.width / 3;
  const rowH = gridMeta.height / 2;

  // Box 4: Student girl full view with face
  await sharp(gridFile)
    .extract({
      left: Math.round(colW * 0.40),
      top: Math.round(rowH + rowH * 0.15),
      width: Math.round(colW * 0.58),
      height: Math.round(rowH * 0.82)
    })
    .toFile('public/images/why_choose_student.jpg');

  // Box 1: Building full crop
  await sharp(gridFile)
    .extract({
      left: Math.round(colW * 0.52),
      top: Math.round(rowH * 0.04),
      width: Math.round(colW * 0.47),
      height: Math.round(rowH * 0.88)
    })
    .toFile('public/images/about_building.jpg');

  // Box 2: Faculty group full crop
  await sharp(gridFile)
    .extract({
      left: Math.round(colW + colW * 0.38),
      top: Math.round(rowH * 0.04),
      width: Math.round(colW * 0.61),
      height: Math.round(rowH * 0.94)
    })
    .toFile('public/images/faculty_group_exact.jpg');

  console.log('Fixed crops successfully!');
}

fixCrops();
