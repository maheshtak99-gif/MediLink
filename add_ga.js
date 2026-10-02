const fs = require("fs");
let content = fs.readFileSync("src/app/layout.tsx", "utf8");

const gaCode = `
        {/* Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: \`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          \`
        }} />
        
        <Tracker />`;

content = content.replace("<Tracker />", gaCode);

fs.writeFileSync("src/app/layout.tsx", content);
console.log("Google Analytics scripts injected!");
