import https from 'https';
import fs from 'fs';
import path from 'path';

// Curated high quality educational stock images matching the exact theme
const freshImages = [
  {
    name: 'hero_students_original.jpg',
    // Indian students smiling outdoors on campus holding books
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'about_building_original.jpg',
    // Modern blue entrance educational building
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'faculty_original.jpg',
    // Indian teacher / educator in classroom
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'why_choose_girl_original.jpg',
    // Student girl focused writing with book and pen
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'branch_chennai_original.jpg',
    // Chennai landmark / traditional architecture
    url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'branch_korukkupet_original.jpg',
    // Modern urban Chennai cityscape / bridge
    url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'gallery_classroom.jpg',
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'gallery_study.jpg',
    url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'gallery_library.jpg',
    url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'gallery_success.jpg',
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80'
  }
];

const destDir = path.resolve('public', 'images', 'fresh');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Saved: ${dest} (${fs.statSync(dest).size} bytes)`);
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const item of freshImages) {
    const dest = path.join(destDir, item.name);
    try {
      console.log(`Downloading ${item.name}...`);
      await downloadFile(item.url, dest);
    } catch (err) {
      console.error(`Error downloading ${item.name}:`, err.message);
    }
  }
  console.log('All fresh standalone high-res images downloaded!');
}

run();
