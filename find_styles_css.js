const fs = require('fs');
const readline = require('readline');

const logPath = 'C:\\Users\\mahes\\.gemini\\antigravity\\brain\\e39c671d-d493-48e9-8439-4c59e736ec2d\\.system_generated\\logs\\transcript_full.jsonl';

const rl = readline.createInterface({
  input: fs.createReadStream(logPath),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  if (line.includes('styles.css')) {
    try {
      const obj = JSON.parse(line);
      const content = obj.content || '';
      if (content.includes('logo') || content.includes('h1') || content.includes('Medi')) {
        console.log("=== MATCH IN styles.css ===");
        const idx = content.indexOf('styles.css');
        console.log(content.substring(idx - 100, idx + 1200));
      }
    } catch (e) {}
  }
});
