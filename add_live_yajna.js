const fs = require("fs");
let content = fs.readFileSync("src/app/admin/page.tsx", "utf8");

const iframeCode = `
      {/* Live Sacred Portal Embedded */}
      <div className="mt-12 mb-8 bg-black/40 backdrop-blur-md rounded-2xl border border-amber-500/20 shadow-[0_0_40px_rgba(255,183,55,0.15)] overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-amber-500/20 bg-black/40 flex items-center justify-between">
          <h3 className="font-serif font-medium text-amber-200 tracking-wide text-lg">Live Digital Yajna</h3>
          <span className="flex items-center gap-2 text-amber-500/50 text-xs tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span> Active
          </span>
        </div>
        <iframe 
          src="/divya-yajna.html" 
          className="w-full h-[800px] border-none"
          title="Live Sacred Portal"
        />
      </div>
    </div>
  );
}
`;

content = content.replace('    </div>\n  );\n}', iframeCode);

fs.writeFileSync("src/app/admin/page.tsx", content);
console.log("Iframe added!");
