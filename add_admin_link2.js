const fs = require("fs");
let content = fs.readFileSync("src/app/layout.tsx", "utf8");

content = content.replace(
  '<a href="#" className="hover:text-slate-300 hover:underline transition-colors">\n                  Business Associate Agreement (BAA)\n                </a>',
  '<a href="#" className="hover:text-slate-300 hover:underline transition-colors">\n                  Business Associate Agreement (BAA)\n                </a>\n                <AdminLink />'
);

fs.writeFileSync("src/app/layout.tsx", content);
console.log("AdminLink added to footer!");
