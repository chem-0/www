import { NextResponse } from "next/server";

import { sendDemoRequest } from "@/lib/mail";

// nodemailer needs the Node runtime — it does not run on the edge.
export const runtime = "nodejs";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  // Honeypot: bots fill every field, humans never see this one.
  if (str(data.website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(data.name, 100);
  const email = str(data.email, 200);
  const company = str(data.company, 100);
  const message = str(data.message, 5000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!EMAIL.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    await sendDemoRequest({ name, email, company, message });
  } catch (error) {
    console.error("[contact] send failed:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
