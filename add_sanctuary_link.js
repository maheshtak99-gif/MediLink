const fs = require("fs");
let content = fs.readFileSync("src/app/layout.tsx", "utf8");

content = content.replace(
  '<a href="#" className="hover:text-slate-300 hover:underline transition-colors">\n                    Business Associate Agreement (BAA)\n                  </a>',
  '<a href="#" className="hover:text-slate-300 hover:underline transition-colors">\n                    Business Associate Agreement (BAA)\n                  </a>\n                  <Link href="/sanctuary" className="hover:text-slate-300 transition-colors opacity-50 hover:opacity-100" title="Digital Sanctuary">\n                    ?\n                  </Link>'
);

fs.writeFileSync("src/app/layout.tsx", content);
console.log("Link added!");
