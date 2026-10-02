const fs = require("fs");
let content = fs.readFileSync("src/app/admin/layout.tsx", "utf8");

const newLink = `
            <li>
              <Link href="/admin/analytics" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                <Activity className="w-5 h-5" />
                <span>Visitor Analytics</span>
              </Link>
            </li>`;

if (!content.includes("/admin/analytics")) {
  content = content.replace('<span>Settings</span>\n              </Link>\n            </li>', `<span>Settings</span>\n              </Link>\n            </li>${newLink}`);
  fs.writeFileSync("src/app/admin/layout.tsx", content);
}
console.log("Sidebar updated!");
