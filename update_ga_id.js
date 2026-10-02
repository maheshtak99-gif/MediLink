const fs = require("fs");
let content = fs.readFileSync("src/app/layout.tsx", "utf8");

content = content.replace(/G-XXXXXXXXXX/g, "G-410494054");

fs.writeFileSync("src/app/layout.tsx", content);
console.log("GA ID updated!");
