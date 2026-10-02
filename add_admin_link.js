const fs = require("fs");
let content = fs.readFileSync("src/app/layout.tsx", "utf8");

if (!content.includes("AdminLink")) {
  content = content.replace(
    'import Tracker from "@/components/Tracker";',
    'import Tracker from "@/components/Tracker";\nimport AdminLink from "@/components/AdminLink";'
  );
  
  content = content.replace(
    '<Link href="/sacred-wealth" className="hover:text-amber-400 transition-colors">\n                    Divya Yajna (Sacred Portal)\n                  </Link>',
    '<Link href="/sacred-wealth" className="hover:text-amber-400 transition-colors">\n                    Divya Yajna (Sacred Portal)\n                  </Link>\n                  <AdminLink />'
  );

  fs.writeFileSync("src/app/layout.tsx", content);
}
console.log("AdminLink added to layout!");
