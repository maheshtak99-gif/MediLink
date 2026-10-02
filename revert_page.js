const fs = require("fs");
let content = fs.readFileSync("src/app/page.tsx", "utf8");

// Remove import
content = content.replace(
  'import BillingArchitecture from "@/components/BillingArchitecture";\nimport ServicesAddon from "@/components/ServicesAddon";',
  'import BillingArchitecture from "@/components/BillingArchitecture";'
);

// Remove component
content = content.replace(
  '<ServicesAddon />\n\n      <BillingArchitecture />',
  '<BillingArchitecture />'
);

fs.writeFileSync("src/app/page.tsx", content);
console.log("page.tsx reverted!");
