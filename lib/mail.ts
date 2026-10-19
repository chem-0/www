import nodemailer, { type Transporter } from "nodemailer";

const required = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "CONTACT_TO"] as const;

function env() {
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing mail env vars: ${missing.join(", ")}`);
  }

  const port = Number(process.env.SMTP_PORT ?? 587);

  return {
    host: process.env.SMTP_HOST!,
    port,
    // 465 is implicit TLS; 587 upgrades via STARTTLS.
    secure: port === 465,
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
    to: process.env.CONTACT_TO!,
    from: process.env.CONTACT_FROM ?? process.env.SMTP_USER!,
  };
}

let cached: Transporter | null = null;

function transporter() {
  const { host, port, secure, user, pass } = env();
  cached ??= nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
  return cached;
}

/** Strip CR/LF so user input can never inject extra mail headers. */
function headerSafe(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export interface DemoRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function sendDemoRequest(req: DemoRequest) {
  const { to, from } = env();
  const name = headerSafe(req.name);
  const email = headerSafe(req.email);
  const company = req.company ? headerSafe(req.company) : "";

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
  ];

  await transporter().sendMail({
    from: `"Chem0 site" <${from}>`,
    to,
    replyTo: `"${name}" <${email}>`,
    subject: `Demo request — ${name}${company ? ` (${company})` : ""}`,
    text: [
      ...rows.map(([label, value]) => `${label}: ${value}`),
      "",
      req.message,
    ].join("\n"),
    html: `
      <div style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.6">
        <h2 style="margin:0 0 16px">New demo request</h2>
        <table style="border-collapse:collapse;margin-bottom:16px">
          ${rows
            .map(
              ([label, value]) =>
                `<tr><td style="padding:2px 16px 2px 0;color:#64748b">${label}</td><td>${escapeHtml(value)}</td></tr>`,
            )
            .join("")}
        </table>
        <div style="white-space:pre-wrap;border-left:3px solid #3b82f6;padding-left:12px">${escapeHtml(req.message)}</div>
      </div>
    `,
  });
}
