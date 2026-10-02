const fs = require("fs");
let content = fs.readFileSync("src/app/admin/page.tsx", "utf8");

const newBanner = `
      <div className="bg-amber-950/40 border border-amber-500/30 p-4 rounded-xl flex gap-3 text-amber-200/90 backdrop-blur-md items-center justify-between">
        <div className="flex gap-3 items-start">
          <ShieldAlert className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" />
          <div className="text-sm leading-relaxed font-light">
            <strong className="text-amber-400 font-medium tracking-wide">Tracking Powered by Google Analytics:</strong> Live visitor tracking for production is now handled by Google Analytics. Click the button to view your real-time live data dashboard.
          </div>
        </div>
        <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-medium text-sm rounded-lg whitespace-nowrap transition-colors">
          Open Google Analytics
        </a>
      </div>
`;

content = content.replace(/<div className="bg-amber-950\/40 border border-amber-500\/30 p-4 rounded-xl flex gap-3 text-amber-200\/90 backdrop-blur-md">[\s\S]*?<\/div>/, newBanner);

fs.writeFileSync("src/app/admin/page.tsx", content);
console.log("Admin page updated for GA!");
