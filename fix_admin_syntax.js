const fs = require("fs");
let content = fs.readFileSync("src/app/admin/page.tsx", "utf8");

content = content.replace(
  '</a>\n      </div>\n\n      </div>\n\n      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">',
  '</a>\n      </div>\n\n      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">'
);

fs.writeFileSync("src/app/admin/page.tsx", content);
console.log("Syntax fixed!");
