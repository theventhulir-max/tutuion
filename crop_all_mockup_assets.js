import sharp from 'sharp';

async function cropRefined() {
  const gridFile = 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/750ca05f-b57e-4afb-9d7a-6ea7dd6232c0/.user_uploaded/media_1789190190962.jpg';
  const gridMeta = await sharp(gridFile).metadata();
  const gw = gridMeta.width; // 1024
  const gh = gridMeta.height; // 682

  const colW = gw / 3;
  const rowH = gh / 2;

  // 1. Building Image (Box 1, Top Left)
  await sharp(gridFile)
    .extract({
      left: Math.round(colW * 0.58),
      top: Math.round(rowH * 0.05),
      width: Math.round(colW * 0.42),
      height: Math.round(rowH * 0.72)
    })
    .toFile('public/images/about_building.jpg');

  // 2. Faculty Teachers Image (Box 2, Top Middle)
  await sharp(gridFile)
    .extract({
      left: Math.round(colW + colW * 0.42),
      top: Math.round(rowH * 0.08),
      width: Math.round(colW * 0.58),
      height: Math.round(rowH * 0.88)
    })
    .toFile('public/images/faculty_group_exact.jpg');

  // 3. Why Choose Us Student Girl (Box 4, Bottom Left)
  await sharp(gridFile)
    .extract({
      left: Math.round(colW * 0.45),
      top: Math.round(rowH + rowH * 0.45),
      width: Math.round(colW * 0.54),
      height: Math.round(rowH * 0.54)
    })
    .toFile('public/images/why_choose_student.jpg');

  // 4. Branch 1 - Chennai T.Nagar / Tondiarpet
  await sharp(gridFile)
    .extract({
      left: Math.round(colW + colW * 0.05),
      top: Math.round(rowH + rowH * 0.22),
      width: Math.round(colW * 0.42),
      height: Math.round(rowH * 0.23)
    })
    .toFile('public/images/branch_chennai.jpg');

  // 5. Branch 2 - Korukkupet
  await sharp(gridFile)
    .extract({
      left: Math.round(colW + colW * 0.52),
      top: Math.round(rowH + rowH * 0.22),
      width: Math.round(colW * 0.42),
      height: Math.round(rowH * 0.23)
    })
    .toFile('public/images/branch_korukkupet.jpg');

  // 6. Gallery individual photos (4 photos in row in Box 6)
  // Gallery area in Box 6:
  const gLeft = colW * 2;
  const gTop = rowH * 0.17;
  const gW = colW * 0.96;
  const gH = rowH * 0.22;
  const thumbW = Math.round(gW / 4);

  for (let i = 0; i < 4; i++) {
    await sharp(gridFile)
      .extract({
        left: Math.round(gLeft + colW * 0.02 + i * thumbW),
        top: Math.round(gTop),
        width: Math.round(thumbW - 4),
        height: Math.round(gH)
      })
      .toFile(`public/images/gallery_${i + 1}.jpg`);
  }

  console.log('All refined assets generated!');
}

cropRefined().catch(console.error);
