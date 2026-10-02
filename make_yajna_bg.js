const fs = require("fs");
let html = fs.readFileSync("public/divya-yajna.html", "utf8");

// Add a style block at the end of the head to hide UI elements
const hideStyles = `
  <style>
    .topbar, .hero-grid, .floating-mantra, .section, .footer, .toast, .ritual-overlay {
      display: none !important;
    }
    .hero { min-height: 100vh !important; padding: 0 !important; }
    .ritual-scene { height: 100vh !important; margin: 0 !important; }
    /* Adjust fire position slightly so it sits nicely at the bottom of the screen */
    .altar { margin-bottom: 20px !important; }
  </style>
</head>
`;

html = html.replace("</head>", hideStyles);

// Save as new background file
fs.writeFileSync("public/yajna-bg.html", html);
console.log("Background HTML created!");
