const fs = require("fs");

let content;
try {
  const buf = fs.readFileSync("addon.txt");
  // check if utf-16 le (FF FE) or utf-16 be (FE FF)
  if (buf[0] === 0xff && buf[1] === 0xfe) {
    content = buf.toString("utf16le");
  } else if (buf[0] === 0xfe && buf[1] === 0xff) {
    // not standard node, but we'll try replacing nulls if it's wide string
    content = buf.toString("utf8").replace(/\0/g, '');
  } else {
    // if there are lots of null bytes, it might be utf-16 without BOM
    content = buf.toString("utf16le");
  }
} catch(e) {}

// clean up weird characters just in case it was already utf8 but with nulls
if (content.includes('\0')) {
   content = content.replace(/\0/g, '');
}

// Split into HTML (includes <style>) and JS (inside <script>)
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
const jsContent = scriptMatch ? scriptMatch[1] : "";

const htmlContent = content.replace(/<script>[\s\S]*?<\/script>/, "");

// Escape backticks and $ for template literals
const escapedHtml = htmlContent.replace(/`/g, "\\`").replace(/\$/g, "\\$");

const componentCode = `
"use client";
import React, { useEffect } from "react";

const rawHTML = \`${escapedHtml}\`;

export default function ServicesAddon() {
  useEffect(() => {
    ${jsContent}
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: rawHTML }} />;
}
`;

fs.writeFileSync("src/components/ServicesAddon.tsx", componentCode);
console.log("ServicesAddon.tsx fixed!");
