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

  let lineNum = 0;
  for await (const line of rl) {
    lineNum++;
    if (line.includes('Medi<span>Link</span>') && !line.includes('CHECKPOINT')) {
      try {
        const obj = JSON.parse(line);
        const content = obj.content || '';
        // If content is a tool call or has code block
        if (content.includes('logo-wrapper') || line.includes('TargetContent') || line.includes('CodeContent')) {
          console.log(`=== MATCH IN FOLDER ${folder} LINE ${lineNum} ===`);
          const idx = line.indexOf('Medi<span>Link</span>');
          console.log(line.substring(idx - 400, idx + 800));
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
