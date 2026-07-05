import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateContactEmail } from "@/lib/email-validator";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const emailValidation = validateContactEmail(email);
    if (!emailValidation.valid) {
      return NextResponse.json(
        { error: emailValidation.reason, validationResult: emailValidation },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.iptvsmartproviders.com",
      port: 465,
      secure: true,
      auth: {
        user: "support@iptvsmartproviders.com",
        pass: process.env.SMTP_PASSWORD, // Must be set in .env
      },
    });

    const mailOptions = {
      from: `"IPTV Canada Contact" <support@iptvsmartproviders.com>`,
      to: "support@iptvsmartproviders.com",
      replyTo: email,
      subject: `New Contact Form Submission: ${subject || "General Inquiry"}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "General Inquiry"}\n\nMessage:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
          body { font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); overflow: hidden; }
          .header { background: #1e3a8a; background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); color: #ffffff; padding: 35px 30px; text-align: center; }
          .header h2 { margin: 0; font-size: 26px; font-weight: 700; letter-spacing: 0.5px; }
          .content { padding: 40px 30px; color: #333333; line-height: 1.6; }
          .field { margin-bottom: 25px; }
          .field-label { font-size: 12px; text-transform: uppercase; color: #6b7280; font-weight: 700; letter-spacing: 1px; margin-bottom: 8px; }
          .field-value { font-size: 16px; color: #111827; background: #f8fafc; padding: 14px 18px; border-radius: 8px; border: 1px solid #e2e8f0; }
          .message-box { margin-top: 35px; }
          .message-content { background: #f8fafc; padding: 25px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 15px; color: #334155; line-height: 1.7; }
          .footer { text-align: center; padding: 25px; font-size: 13px; color: #94a3b8; background: #f8fafc; border-top: 1px solid #e2e8f0; }
        </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Request</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Sender Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${email}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">${subject || "General Inquiry"}</div>
              </div>
              
              <div class="message-box">
                <div class="field-label">Message content</div>
                <div class="message-content">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              This email was automatically sent from the <strong>IPTV Canada</strong> website contact form.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send auto-reply to the customer
    const autoReplyOptions = {
      from: `"IPTV Canada" <support@iptvsmartproviders.com>`,
      to: email,
      subject: `We received your message: ${subject || "General Inquiry"}`,
      text: `Hi ${name},\n\nThank you for reaching out to IPTV Canada! We have received your message and will get back to you as soon as possible.\n\nBest regards,\nIPTV Canada Team`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
          body { font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); overflow: hidden; }
          .header { background: #1e3a8a; background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); color: #ffffff; padding: 35px 30px; text-align: center; }
          .header h2 { margin: 0; font-size: 26px; font-weight: 700; letter-spacing: 0.5px; }
          .content { padding: 40px 30px; color: #333333; line-height: 1.6; font-size: 16px; }
          .content p { margin-bottom: 20px; }
          .footer { text-align: center; padding: 25px; font-size: 13px; color: #94a3b8; background: #f8fafc; border-top: 1px solid #e2e8f0; }
        </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Contacting Us</h2>
            </div>
            <div class="content">
              <p>Hi <strong>${name}</strong>,</p>
              <p>Thank you for reaching out to IPTV Canada! We have received your message and our support team will review it shortly.</p>
              <p>We usually respond within 24 hours. In the meantime, you can explore our website for more information about our services.</p>
              <p>Best regards,<br><strong>IPTV Canada Team</strong></p>
            </div>
            <div class="footer">
              This is an automated message. Please do not reply directly to this email.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Internal server error. Failed to send email." },
      { status: 500 }
    );
  }
}
