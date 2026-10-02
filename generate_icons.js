const fs = require("fs");
const sharp = require("sharp");

async function generate() {
  const input = "public/linkedin_icon_only.jpg";
  
  try {
    // Generate standard favicon.ico (fallback)
    await sharp(input)
      .resize(32, 32)
      .toFormat('png')
      .toFile("src/app/favicon.ico");
      
    // Generate icon.png (modern browsers)
    await sharp(input)
      .resize(192, 192)
      .toFormat('png')
      .toFile("src/app/icon.png");
      
    // Generate apple-icon.png (iOS)
    await sharp(input)
      .resize(180, 180)
      .toFormat('png')
      .toFile("src/app/apple-icon.png");

    console.log("Icons generated successfully!");
    
    // Remove the old heavy JPGs
    if (fs.existsSync("src/app/icon.jpg")) fs.unlinkSync("src/app/icon.jpg");
    if (fs.existsSync("src/app/apple-icon.jpg")) fs.unlinkSync("src/app/apple-icon.jpg");
    console.log("Old JPG icons removed.");
  } catch (err) {
    console.error("Error generating icons:", err);
  }
}

generate();
