const fs = require('fs');
const readline = require('readline');

const logPath = 'C:\\Users\\mahes\\.gemini\\antigravity\\brain\\e39c671d-d493-48e9-8439-4c59e736ec2d\\.system_generated\\logs\\transcript_full.jsonl';

const rl = readline.createInterface({
  input: fs.createReadStream(logPath),
  crlfDelay: Infinity
});

let count = 0;
rl.on('line', (line) => {
  count++;
  if (count < 25) { // Print first 25 lines of full log
    try {
      const obj = JSON.parse(line);
      console.log(`\n=== STEP ${count} ===`);
      console.log("Source:", obj.source);
      console.log("Type:", obj.type);
      console.log("Tool calls:", JSON.stringify(obj.tool_calls, null, 2));
      if (obj.content && obj.content.length > 0) {
        console.log("Content Snippet:", obj.content.substring(0, 1000));
      }
    } catch (e) {
      console.log(`\n=== STEP ${count} (RAW) ===`);
      console.log(line.substring(0, 1000));
    }
  } else {
    process.exit(0);
  }
});
