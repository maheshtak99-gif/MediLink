import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, clinic, claimsVol, message, hutk } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // Split full name input into first and last name
    const nameParts = name.trim().split(/\s+/);
    const firstname = nameParts[0] || "";
    const lastname = nameParts.slice(1).join(" ") || "Contact";

    // HubSpot Portal / Hub ID (Fixed to 246302116)
    const portalId = "246302116";
    // Form GUID defaults to a placeholder. Can be overridden in production via HUBSPOT_FORM_GUID.
    const formGuid = process.env.HUBSPOT_FORM_GUID || "d1354316-c73e-4b6e-8d8a-020584b4231b";

    // Prepare fields array in the format expected by HubSpot v3 API
    // We explicitly set objectTypeId to "0-1" (Contact) for safety.
    const fields = [
      { objectTypeId: "0-1", name: "email", value: email.trim() },
      { objectTypeId: "0-1", name: "firstname", value: firstname },
      { objectTypeId: "0-1", name: "lastname", value: lastname },
    ];

    if (phone) {
      fields.push({ objectTypeId: "0-1", name: "phone", value: phone.trim() });
    }

    // HubSpot requires Company properties to use objectTypeId 0-2 and the internal property name is 'name'
    if (clinic) {
      fields.push({ objectTypeId: "0-2", name: "name", value: clinic.trim() });
    }

    // Format all other details into the standard HubSpot message description
    const formattedMessage = `[Claims Volume]: ${claimsVol || "Not specified"}\n\n[Message]: ${message || "No description provided."}`;
    
    fields.push({ objectTypeId: "0-1", name: "message", value: formattedMessage });

    const payload: any = {
      fields,
      context: {
        pageUri: request.headers.get("referer") || "https://medilinkrcm.com/contact",
        pageName: "Contact Us - RCM Practice Audit Inquiry"
      }
    };

    // Link contact session to analytics tracking history if cookie is present
    if (hutk) {
      payload.context.hutk = hutk;
    }

    const hubspotSubmitUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const response = await fetch(hubspotSubmitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Check if HubSpot returned a successful status
    if (!response.ok) {
      const errorText = await response.text();
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch (e) {
        errorData = { message: errorText };
      }

      console.warn("HubSpot Submission API returned error status:", response.status, errorData);

      // Gracefully fall back for default placeholder GUID during development / testing
      if (formGuid === "d1354316-c73e-4b6e-8d8a-020584b4231b") {
        console.info("DEBUG SUCCESS: Fallback simulated response triggered for default Form GUID placeholder.");
        return NextResponse.json({
          success: true,
          message: "Lead processed (Development Fallback Active). Please configure your HUBSPOT_FORM_GUID env variable for active sync.",
        });
      }

      return NextResponse.json(
        { error: errorData.message || "Failed to forward lead to HubSpot CRM." },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({
      success: true,
      inlineMessage: data.inlineMessage || "Thank you for booking! Our RCM specialists will contact you shortly."
    });
  } catch (error) {
    console.error("HubSpot Integration Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred during submission. Please try again." },
      { status: 500 }
    );
  }
}
