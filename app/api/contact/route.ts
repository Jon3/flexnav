import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT_EMAIL = "jonathonhopley@hotmail.com";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email sending is not configured yet." }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "NHS Top Up <onboarding@resend.dev>",
    to: RECIPIENT_EMAIL,
    replyTo: email,
    subject: `Contact form: ${name}`,
    text: [`Name: ${name}`, `Email: ${email}`, "", "Message:", message || "(none)"].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
