const fs = require("fs");
let content = fs.readFileSync("src/app/admin/page.tsx", "utf8");

content = content.replace(
  "Object.entries(browserCounts).sort((a,b) => b[1] - a[1])[0]?.[0]",
  "Object.entries(browserCounts).sort((a: [string, any], b: [string, any]) => (b[1] as number) - (a[1] as number))[0]?.[0]"
);

content = content.replace(
  "Object.entries(osCounts).sort((a,b) => b[1] - a[1])[0]?.[0]",
  "Object.entries(osCounts).sort((a: [string, any], b: [string, any]) => (b[1] as number) - (a[1] as number))[0]?.[0]"
);

fs.writeFileSync("src/app/admin/page.tsx", content);
console.log("Typescript error fixed!");
