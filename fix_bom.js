const fs = require("fs");
let content = fs.readFileSync("src/components/ServicesAddon.tsx", "utf8");
content = content.replace(/const rawHTML = `/, 'const rawHTML = `');
content = content.replace(/const rawHTML = `\uFEFF/, 'const rawHTML = `');
content = content.replace(/const rawHTML = `\uFFFD/, 'const rawHTML = `');
fs.writeFileSync("src/components/ServicesAddon.tsx", content);
