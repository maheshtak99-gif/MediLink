const fs = require('fs');
const path = require('path');
const readline = require('readline');

const brainDir = 'C:\\Users\\mahes\\.gemini\\antigravity\\brain';
const folders = fs.readdirSync(brainDir).filter(f => {
  return fs.statSync(path.join(brainDir, f)).isDirectory() && f !== 'tempmediaStorage';
});

async function searchFolder(folder) {
  const fullLog = path.join(brainDir, folder, '.system_generated', 'logs', 'transcript_full.jsonl');
  if (!fs.existsSync(fullLog)) return;

  const rl = readline.createInterface({
    input: fs.createReadStream(fullLog),
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.includes('Medi<span>Link</span>') || line.includes('medilink-text') || line.includes('slideGold') || line.includes('ekg-line-gold')) {
      try {
        const obj = JSON.parse(line);
        const content = obj.content || '';
        if (content.includes('font-size') && content.includes('font-family')) {
          console.log(`=== MATCH IN FOLDER ${folder} ===`);
          console.log(content.substring(0, 2000));
          break;
        }
      } catch (e) {}
    }
  }
}

async function run() {
  for (const folder of folders) {
    await searchFolder(folder);
  }
}

run();
