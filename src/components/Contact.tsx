"use client";

import { useState, FormEvent } from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const badges = [
  { icon: "⚡", title: "Quick Response", sub: "Usually within 24 hrs" },
  { icon: "🔒", title: "Confidential", sub: "Your information is safe" },
  { icon: "💼", title: "Open to Opportunities", sub: "Full-time & contract" },
];

const info = [
  { icon: "📧", label: "Email", value: "alexphilip2121@gmail.com", href: "mailto:alexphilip2121@gmail.com", note: "Best way to reach me" },
  { icon: "💼", label: "LinkedIn", value: "in/alex-philip", href: "https://www.linkedin.com/in/alex-philip-b9aa1a270", note: "Let's connect" },
  { icon: "📍", label: "Location", value: "Scarborough, ON", href: null, note: "Greater Toronto Area" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const trimmed = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    if (!trimmed.name || !trimmed.email || !trimmed.subject || !trimmed.message) {
      setStatus("error");
      setErrorMsg("All fields are required.");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trimmed),
      });
      const data = await res.json().catch(() => null);
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMsg(data?.error || "Failed to send. Please try again.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClasses =
    "w-full bg-ink-950/60 border border-brand-blue/15 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-brand-blue/60 focus:ring-2 focus:ring-brand-blue/15 transition-all min-h-[46px]";

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Get In Touch"
          title="Let's Build a"
          highlight="More Secure Future."
          subtitle="Have a question, project idea, or just want to connect? I'd love to hear from you."
        />

        {/* Feature badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
          {badges.map((b) => (
            <Reveal key={b.title}>
              <div className="card p-4 flex items-center gap-3">
                <span className="icon-tile w-9 h-9 text-base shrink-0">{b.icon}</span>
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-white">{b.title}</span>
                  <span className="text-[0.7rem] text-slate-500">{b.sub}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="card h-full p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-white mb-1">
                Send Me a Message
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-400 mb-1.5">Your Name</label>
                    <input
                      id="contact-name" type="text" required maxLength={100} autoComplete="name"
                      placeholder="John Doe" value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-400 mb-1.5">Your Email</label>
                    <input
                      id="contact-email" type="email" required maxLength={254} autoComplete="email"
                      placeholder="john@example.com" value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-400 mb-1.5">Subject</label>
                  <input
                    id="contact-subject" type="text" required maxLength={200}
                    placeholder="Cloud Security Opportunity" value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-400 mb-1.5">Your Message</label>
                  <textarea
                    id="contact-message" required rows={5} maxLength={5000}
                    placeholder="Tell me about your project or opportunity..." value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {status === "error" && errorMsg && (
                  <p className="text-red-400 text-xs" role="alert">✗ {errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-blue w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "idle" && (<>Send Message <span aria-hidden="true">→</span></>)}
                  {status === "sending" && "Sending..."}
                  {status === "sent" && "✓ Message Delivered"}
                  {status === "error" && "✗ Retry"}
                </button>
              </form>
            </div>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="card h-full p-6 sm:p-8 flex flex-col">
              <h3 className="font-display text-lg font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                {info.map((item) => {
                  const inner = (
                    <div className="flex items-start gap-3.5">
                      <span className="icon-tile w-10 h-10 text-base shrink-0">{item.icon}</span>
                      <span className="flex flex-col min-w-0">
                        <span className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</span>
                        <span className="text-sm text-slate-200 font-medium break-words">{item.value}</span>
                        <span className="text-[0.7rem] text-slate-500 mt-0.5">{item.note}</span>
                      </span>
                    </div>
                  );
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  );
                })}
              </div>

              <div className="mt-auto pt-6">
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-3">Connect With Me</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/alex-philip-b9aa1a270"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="icon-tile w-11 h-11 text-base hover:scale-105 transition-transform"
                  >💼</a>
                  <a
                    href="https://github.com/alexphilip"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="icon-tile w-11 h-11 text-base hover:scale-105 transition-transform"
                  >🐙</a>
                  <a
                    href="mailto:alexphilip2121@gmail.com"
                    aria-label="Email"
                    className="icon-tile w-11 h-11 text-base hover:scale-105 transition-transform"
                  >📧</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
