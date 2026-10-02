const fs = require("fs");
let content = fs.readFileSync("src/app/sanctuary/SanctuaryClient.tsx", "utf8");
content = content.replace(
  'className="fixed inset-0 sanctuary-bg',
  'className="fixed inset-0 z-[9999] sanctuary-bg'
);
fs.writeFileSync("src/app/sanctuary/SanctuaryClient.tsx", content);
console.log("Z-index fixed!");
