"use client";

import { useState, FormEvent } from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

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
    "w-full bg-terminal-bg/70 border border-slate-700/50 rounded-lg px-4 py-3 sm:py-2.5 text-sm font-mono text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-terminal-cyan/60 focus:shadow-lg focus:shadow-terminal-cyan/10 transition-all min-h-[44px]";

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          command="ssh alex@contact.dev"
          title="Get In Touch"
          subtitle="Available for cloud & security roles, consulting, and collaboration"
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl 2xl:max-w-5xl mx-auto">
          {/* Contact info */}
          <Reveal>
          <div className="holo-card h-full p-6 sm:p-7">
            <div className="font-mono text-sm text-slate-500 mb-6">
              <span className="text-terminal-cyan">$</span> cat contact_info.json
            </div>

            {/* JSON block — overflow scroll on tiny phones instead of breaking layout */}
            <div className="bg-terminal-bg/60 rounded-lg p-3 sm:p-4 border border-slate-700/40 mb-4 overflow-x-auto">
              <pre className="text-slate-300 text-xs sm:text-sm whitespace-pre font-mono">
{`{
  "name":     "Alex Philip",
  "location": "Scarborough, ON",
  "email":    "alexphilip2121@gmail.com",
  "phone":    "(437) 425-2630",
  "status":   "Open to opportunities"
}`}
              </pre>
            </div>

            <div className="space-y-1">
              <a
                href="mailto:alexphilip2121@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-terminal-cyan transition-colors group min-h-[44px] text-sm"
              >
                <span className="text-terminal-cyan text-base shrink-0">📧</span>
                alexphilip2121@gmail.com
              </a>
              <a
                href="tel:+14374252630"
                className="flex items-center gap-3 text-slate-300 hover:text-terminal-cyan transition-colors group min-h-[44px] text-sm"
              >
                <span className="text-terminal-cyan text-base shrink-0">📱</span>
                (437) 425-2630
              </a>
              <a
                href="https://www.linkedin.com/in/alex-philip-b9aa1a270"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-terminal-cyan transition-colors group min-h-[44px] text-sm"
              >
                <span className="text-terminal-cyan text-base shrink-0">💼</span>
                LinkedIn Profile
              </a>
            </div>
          </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
          <div className="holo-card h-full p-6 sm:p-7">
            <div className="font-mono text-sm text-slate-500 mb-6">
              <span className="text-terminal-cyan">$</span> compose_message --to alex
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-slate-500 mb-1">name:</label>
                <input
                  id="contact-name" type="text" required maxLength={100} autoComplete="name"
                  placeholder="John Doe" value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-slate-500 mb-1">email:</label>
                <input
                  id="contact-email" type="email" required maxLength={254} autoComplete="email"
                  placeholder="john@example.com" value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-500 mb-1">subject:</label>
                <input
                  id="contact-subject" type="text" required maxLength={200}
                  placeholder="Cloud Security Opportunity" value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-500 mb-1">message:</label>
                <textarea
                  id="contact-message" required rows={4} maxLength={5000}
                  placeholder="Your message here..." value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {status === "error" && errorMsg && (
                <p className="text-terminal-red text-xs font-mono" role="alert">✗ {errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full min-h-[48px] font-mono text-sm rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                  status === "sent"
                    ? "bg-terminal-green/15 border border-terminal-green/50 text-terminal-green"
                    : "btn-primary"
                }`}
              >
                {status === "idle" && "> send_message()"}
                {status === "sending" && "> sending..."}
                {status === "sent" && "✓ message_delivered()"}
                {status === "error" && "✗ error: retry_send()"}
              </button>
            </form>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
