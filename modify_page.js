const fs = require("fs");
let content = fs.readFileSync("src/app/page.tsx", "utf8");

// Add import
content = content.replace(
  'import BillingArchitecture from "@/components/BillingArchitecture";',
  'import BillingArchitecture from "@/components/BillingArchitecture";\nimport ServicesAddon from "@/components/ServicesAddon";'
);

// Add component
content = content.replace(
  '<BillingArchitecture />',
  '<ServicesAddon />\n\n      <BillingArchitecture />'
);

fs.writeFileSync("src/app/page.tsx", content);
console.log("page.tsx updated!");
