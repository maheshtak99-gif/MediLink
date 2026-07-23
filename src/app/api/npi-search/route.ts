import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const number = searchParams.get("number") || "";
  const firstName = searchParams.get("first_name") || "";
  const lastName = searchParams.get("last_name") || "";
  const state = searchParams.get("state") || "";
  const orgName = searchParams.get("organization_name") || "";
  const limit = searchParams.get("limit") || "10";

  const query = new URLSearchParams({
    version: "2.1",
    limit,
  });

  if (number) query.append("number", number);
  if (firstName) query.append("first_name", firstName);
  if (lastName) query.append("last_name", lastName);
  if (state) query.append("state", state);
  if (orgName) query.append("organization_name", orgName);

  try {
    const cmsUrl = `https://npiregistry.cms.hhs.gov/api/?${query.toString()}`;
    const res = await fetch(cmsUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`CMS API Error: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("NPI Search Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch from NPI Registry" },
      { status: 500 }
    );
  }
}
