"use client";

import { Send } from "lucide-react";
import { useState } from "react";

// ─── Validation helpers ───────────────────────────────────────────────────────
const ALLOWED_SUBJECTS = [
  "General Inquiry",
  "Technical Support",
  "Billing Question",
  "Reseller Program",
  "Free Trial Request",
] as const;
type Subject = (typeof ALLOWED_SUBJECTS)[number];

function isValidEmail(email: string): boolean {
  // RFC 5322-lite, intentionally simple
  return /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/.test(email);
}

/** Strip HTML tags and trim — prevents stored-XSS if values are ever rendered */
function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

interface FormState {
  name: string;
  email: string;
  subject: Subject;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name || data.name.length < 2)
    errors.name = "Please enter your full name (min 2 characters).";
  if (!isValidEmail(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.message || data.message.length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ── Client-side validation ───────────────────────────────────────────────
    const sanitized: FormState = {
      name:    sanitize(form.name),
      email:   sanitize(form.email),
      subject: ALLOWED_SUBJECTS.includes(form.subject as Subject)
                 ? form.subject
                 : "General Inquiry",
      message: sanitize(form.message),
    };

    const errs = validate(sanitized);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");

    try {
      // ── WhatsApp redirect (no server endpoint) ───────────────────────────
      // If you add an email API later, POST `sanitized` to /api/contact here.
      const msg = encodeURIComponent(
        `New Contact Form Submission\n\nName: ${sanitized.name}\nEmail: ${sanitized.email}\nSubject: ${sanitized.subject}\n\nMessage:\n${sanitized.message}`
      );
      window.open(`https://wa.me/17579575093?text=${msg}`, "_blank", "noopener,noreferrer");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white py-24 text-center">
        <div className="max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
            <Send size={32} />
          </div>
          <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">Message Sent!</h2>
          <p className="text-slate-500 mb-8 font-semibold">
            Thank you for reaching out. Our support team will get back to you within 1–2 hours.
          </p>
          <button
            onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "General Inquiry", message: "" }); }}
            className="text-brand-blue font-black text-sm uppercase tracking-widest hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Information */}
          <div>
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-6">
              Send Us a Message
            </h2>
            <p className="text-slate-500 mb-10 leading-relaxed font-semibold">
              Whether you&apos;re a new customer looking for a trial or an existing user needing
              technical help, fill out the form and we&apos;ll prioritize your request.
            </p>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 h-fit">
                  <Send size={20} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark tracking-tight mb-1">Direct Support</h4>
                  <p className="text-slate-500 text-sm font-semibold">
                    For faster service, use the WhatsApp button at the bottom-right corner.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 h-fit">
                  <Send size={20} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark tracking-tight mb-1">Technical Issues</h4>
                  <p className="text-slate-500 text-sm font-semibold">
                    Include your device type and app name in the message for faster troubleshooting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-sm">
            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-bold">
                Something went wrong. Please try again or contact us via WhatsApp.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="cf-name" className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-1">
                    Full Name
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    required
                    type="text"
                    autoComplete="name"
                    maxLength={80}
                    placeholder="John Doe"
                    value={form.name}
                    onChange={set("name")}
                    aria-invalid={!!errors.name}
                    className={`w-full bg-white border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-semibold text-brand-dark placeholder:text-slate-400 ${errors.name ? "border-red-400" : "border-slate-200"}`}
                  />
                  {errors.name && <p className="text-xs text-red-500 font-semibold px-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="cf-email" className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-1">
                    Email Address
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={set("email")}
                    aria-invalid={!!errors.email}
                    className={`w-full bg-white border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-semibold text-brand-dark placeholder:text-slate-400 ${errors.email ? "border-red-400" : "border-slate-200"}`}
                  />
                  {errors.email && <p className="text-xs text-red-500 font-semibold px-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject — whitelist-only values */}
              <div className="space-y-2">
                <label htmlFor="cf-subject" className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-1">
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="cf-subject"
                    name="subject"
                    value={form.subject}
                    onChange={set("subject")}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-semibold text-brand-dark appearance-none cursor-pointer"
                  >
                    {ALLOWED_SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <Send size={14} className="rotate-90" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="cf-message" className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-1">
                  Message
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  rows={4}
                  maxLength={2000}
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={set("message")}
                  aria-invalid={!!errors.message}
                  className={`w-full bg-white border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-semibold text-brand-dark placeholder:text-slate-400 resize-none ${errors.message ? "border-red-400" : "border-slate-200"}`}
                />
                <div className="flex justify-between px-1">
                  {errors.message
                    ? <p className="text-xs text-red-500 font-semibold">{errors.message}</p>
                    : <span />
                  }
                  <span className="text-[10px] text-slate-400 font-semibold">{form.message.length}/2000</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-brand-blue hover:bg-blue-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-brand-blue/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
