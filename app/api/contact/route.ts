import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_ACCESS_KEY = "c07628c5-1ba3-4aef-87c8-8b8d8d1e42f4";

async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not set");
    return false;
  }

  const formData = new URLSearchParams();
  formData.append("secret", secret);
  formData.append("response", token);
  if (ip) formData.append("remoteip", ip);

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error("Turnstile verification error:", err);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const turnstileToken = req.headers.get("cf-turnstile-response");
    if (!turnstileToken) {
      return NextResponse.json(
        { success: false, error: "Bitte bestätigen Sie, dass Sie kein Roboter sind." },
        { status: 400 }
      );
    }

    const ip = req.headers.get("x-forwarded-for");
    const isHuman = await verifyTurnstile(turnstileToken, ip);
    if (!isHuman) {
      return NextResponse.json(
        { success: false, error: "Sicherheitsprüfung fehlgeschlagen. Bitte versuchen Sie es erneut." },
        { status: 400 }
      );
    }

    const incoming = await req.formData();
    const name = incoming.get("name");

    const forward = new FormData();
    for (const [key, value] of incoming.entries()) {
      forward.append(key, value);
    }
    forward.append("access_key", WEB3FORMS_ACCESS_KEY);
    forward.append("subject", `Neue Anfrage über floridaimmobilienmarkt.de — ${name || ""}`);
    forward.append("from_name", "Florida Immobilienmarkt — Kontaktformular");

    const web3formsRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: forward,
    });
    const result = await web3formsRes.json().catch(() => ({}));

    return NextResponse.json({ success: web3formsRes.ok && result.success === true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}
