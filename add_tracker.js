const fs = require("fs");
let content = fs.readFileSync("src/app/layout.tsx", "utf8");

if (!content.includes("Tracker")) {
  content = content.replace(
    'import Link from "next/link";',
    'import Link from "next/link";\nimport Tracker from "@/components/Tracker";'
  );
  content = content.replace(
    '<body className="font-sans antialiased bg-slate-50">',
    '<body className="font-sans antialiased bg-slate-50">\n        <Tracker />'
  );
  fs.writeFileSync("src/app/layout.tsx", content);
}
console.log("Tracker injected!");
