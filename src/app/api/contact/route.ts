import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// -------------------------------------------------------------------
// In-memory rate limiter (per IP, resets on cold start)
// -------------------------------------------------------------------
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// -------------------------------------------------------------------
// Sanitisation helpers
// -------------------------------------------------------------------

/** Strip HTML tags and collapse CRLF (prevents email-header injection). */
function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/[\r\n]+/g, " ")
    .trim();
}

/** Strip HTML tags but keep newlines (for message body). */
function sanitizeMessage(input: string): string {
  return input.replace(/<[^>]*>/g, "").trim();
}

/** HTML-encode for safe insertion into an HTML email. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// -------------------------------------------------------------------
// Field length limits
// -------------------------------------------------------------------
const MAX_NAME = 100;
const MAX_EMAIL = 254; // RFC 5321
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 5000;

// -------------------------------------------------------------------
// POST handler
// -------------------------------------------------------------------
export async function POST(req: NextRequest) {
  try {
    // --- Rate limiting ------------------------------------------------
    const forwarded = req.headers.get("x-forwarded-for");
    const ip =
      forwarded?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // --- Content-Type guard -------------------------------------------
    const ct = req.headers.get("content-type");
    if (!ct?.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid content type." },
        { status: 400 }
      );
    }

    // --- Parse body safely --------------------------------------------
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body." },
        { status: 400 }
      );
    }

    if (typeof body !== "object" || body === null) {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const {
      name: rawName,
      email: rawEmail,
      subject: rawSubject,
      message: rawMessage,
    } = body as Record<string, unknown>;

    // --- Type checks --------------------------------------------------
    if (
      typeof rawName !== "string" ||
      typeof rawEmail !== "string" ||
      typeof rawSubject !== "string" ||
      typeof rawMessage !== "string"
    ) {
      return NextResponse.json(
        { error: "All fields must be strings." },
        { status: 400 }
      );
    }

    // --- Sanitise -----------------------------------------------------
    const name = sanitize(rawName);
    const email = sanitize(rawEmail);
    const subject = sanitize(rawSubject);
    const message = sanitizeMessage(rawMessage);

    // --- Presence check -----------------------------------------------
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // --- Length check --------------------------------------------------
    if (name.length > MAX_NAME)
      return NextResponse.json({ error: `Name must be under ${MAX_NAME} characters.` }, { status: 400 });
    if (email.length > MAX_EMAIL)
      return NextResponse.json({ error: `Email must be under ${MAX_EMAIL} characters.` }, { status: 400 });
    if (subject.length > MAX_SUBJECT)
      return NextResponse.json({ error: `Subject must be under ${MAX_SUBJECT} characters.` }, { status: 400 });
    if (message.length > MAX_MESSAGE)
      return NextResponse.json({ error: `Message must be under ${MAX_MESSAGE} characters.` }, { status: 400 });

    // --- Email format (RFC 5322–like) ----------------------------------
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // --- Send or log ---------------------------------------------------
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail =
      process.env.CONTACT_EMAIL || "alexphilip2121@gmail.com";

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });

      // HTML-escape every interpolated value
      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeSubject = escapeHtml(subject);
      const safeMessage = escapeHtml(message);

      await transporter.sendMail({
        // SECURITY: never put user input in the `from` field
        from: `"Portfolio Contact Form" <${smtpUser}>`,
        replyTo: email,
        to: contactEmail,
        subject: `[Portfolio Contact] ${subject.slice(0, 100)}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family:monospace;background:#0a0a0a;color:#e0e0e0;padding:20px;border:1px solid #00ff41;">
            <h2 style="color:#00ff41;">New Portfolio Contact</h2>
            <p><strong style="color:#00e5ff;">From:</strong> ${safeName} (${safeEmail})</p>
            <p><strong style="color:#00e5ff;">Subject:</strong> ${safeSubject}</p>
            <hr style="border-color:#1a1a2e;" />
            <p>${safeMessage.replace(/\n/g, "<br>")}</p>
          </div>
        `,
      });
    } else {
      console.log("=== NEW CONTACT FORM SUBMISSION ===");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log("===================================");
      console.log(
        "Note: Configure SMTP env vars to enable email delivery."
      );
    }

    return NextResponse.json(
      { success: true, message: "Message received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    // Never leak internal error details to the client
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
