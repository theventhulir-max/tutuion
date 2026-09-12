import https from 'https';
import fs from 'fs';
import path from 'path';

const images = [
  {
    name: 'hero_students.jpg',
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85' // Group of bright students studying together with notes
  },
  {
    name: 'faculty_classroom.jpg',
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85' // Dedicated lecturer / teacher explaining concepts
  },
  {
    name: 'night_camp.jpg',
    url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=85' // Night / evening library group study with focused students
  },
  {
    name: 'study_books.jpg',
    url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=85' // Clean textbook and study table
  }
];

const destDir = path.resolve('public', 'images');

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
  for (const item of images) {
    const dest = path.join(destDir, item.name);
    try {
      console.log(`Downloading real image for ${item.name}...`);
      await downloadFile(item.url, dest);
    } catch (err) {
      console.error(`Error downloading ${item.name}:`, err.message);
    }
  }
  console.log('Real high quality photos downloaded successfully!');
}

run();
