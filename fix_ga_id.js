const fs = require("fs");
let content = fs.readFileSync("src/app/layout.tsx", "utf8");

content = content.replace(/G-410494054/g, "G-EZY17BSFZ8");

fs.writeFileSync("src/app/layout.tsx", content);
console.log("Correct Measurement ID injected!");
