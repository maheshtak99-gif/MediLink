import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userAgent = req.headers.get("user-agent") || "Unknown";
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    
    let browser = "Other";
    if (userAgent.includes("Edg")) browser = "Edge";
    else if (userAgent.includes("Chrome")) browser = "Chrome";
    else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) browser = "Safari";
    else if (userAgent.includes("Firefox")) browser = "Firefox";

    let os = "Other";
    if (userAgent.includes("Windows")) os = "Windows";
    else if (userAgent.includes("Mac OS")) os = "macOS";
    else if (userAgent.includes("Linux")) os = "Linux";
    else if (userAgent.includes("Android")) os = "Android";
    else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) os = "iOS";

    const visit = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
      ip: ip.split(",")[0].trim(),
      browser,
      os,
      path: body.path || "/",
      timestamp: new Date().toISOString(),
      userAgent
    };

    const filePath = path.join(process.cwd(), "src", "data", "visitors.json");
    
    let visitors = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileData = fs.readFileSync(filePath, "utf8");
        if (fileData) visitors = JSON.parse(fileData);
      } catch(e) {
        // file might be corrupted or empty, start fresh
      }
    }

    visitors.unshift(visit);
    if (visitors.length > 500) visitors = visitors.slice(0, 500); // Keep last 500

    fs.writeFileSync(filePath, JSON.stringify(visitors, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
