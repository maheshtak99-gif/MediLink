const fs = require("fs");
let content = fs.readFileSync("src/app/layout.tsx", "utf8");

const gaCode = `
        {/* Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-EZY17BSFZ8" />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: \`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EZY17BSFZ8', {
              page_path: window.location.pathname,
            });
          \`
        }} />
        
        <Tracker />`;

// Inject right after <body ...>
content = content.replace(/(<body[^>]*>)/, `$1\n${gaCode}`);

fs.writeFileSync("src/app/layout.tsx", content);
console.log("GA code heavily injected!");
