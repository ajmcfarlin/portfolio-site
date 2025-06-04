// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Verify Turnstile token
async function verifyTurnstile(token: string, ip: string) {
  const formData = new FormData();
  formData.append('secret', process.env.TURNSTILE_SECRET_KEY!);
  formData.append('response', token);
  formData.append('remoteip', ip);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  return data.success;
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, turnstileToken } = await req.json();
    
    // Get client IP
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';
    
    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json({ error: 'Turnstile verification required' }, { status: 400 });
    }
    
    const turnstileValid = await verifyTurnstile(turnstileToken, ip);
    if (!turnstileValid) {
      return NextResponse.json({ error: 'Turnstile verification failed' }, { status: 400 });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send email
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["alecjm@gmail.com"],
      subject: subject ? `Portfolio: ${subject}` : `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'No subject provided'}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}