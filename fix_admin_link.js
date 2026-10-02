const fs = require("fs");
let content = fs.readFileSync("src/app/layout.tsx", "utf8");

content = content.replace(
  /Business Associate Agreement \(BAA\)\s*<\/a>/g,
  'Business Associate Agreement (BAA)\n                  </a>\n                  <AdminLink />'
);

fs.writeFileSync("src/app/layout.tsx", content);
console.log("AdminLink added with regex!");
