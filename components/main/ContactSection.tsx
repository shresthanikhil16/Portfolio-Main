"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactItems = [
    { label: "EMAIL", value: "officialblade007@gmail.com", href: "mailto:officialblade007@gmail.com" },
    { label: "PHONE", value: "+977 9867059367", href: "tel:9867059367" },
    { label: "GITHUB", value: "shresthanikhil16", href: "https://github.com/shresthanikhil16" },
    { label: "LINKEDIN", value: "pratham-shrestha", href: "https://linkedin.com/in/pratham-shrestha" },
  ];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&display=swap');

        .contact-root {
          position: relative;
          background: #04040f;
          overflow: hidden;
          font-family: 'DM Mono', monospace;
        }

        /* animated grain */
        .contact-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          animation: grain 0.8s steps(1) infinite;
        }

        @keyframes grain {
          0%, 100% { transform: translate(0,0); }
          10% { transform: translate(-2%,-3%); }
          30% { transform: translate(3%,1%); }
          50% { transform: translate(-1%,4%); }
          70% { transform: translate(4%,-2%); }
          90% { transform: translate(-3%,3%); }
        }

        .glow-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%);
          pointer-events: none;
          transition: transform 0.1s ease-out;
          z-index: 0;
        }

        .heading-word {
          font-family: 'Bebas Neue', sans-serif;
          display: block;
          line-height: 0.88;
          letter-spacing: 0.01em;
          background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both;
        }

        .heading-word:nth-child(1) { animation-delay: 0.1s; }
        .heading-word:nth-child(2) { animation-delay: 0.2s; }
        .heading-word:nth-child(3) {
          animation-delay: 0.3s;
          background: linear-gradient(135deg, #7c3aed 0%, #06b6d4 50%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both, shimmer 4s ease infinite 1s;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }

        .contact-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          opacity: 0;
          animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both;
          position: relative;
          overflow: hidden;
        }

        .contact-row::after {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          width: 0; height: 1px;
          background: linear-gradient(90deg, #7c3aed, #06b6d4);
          transition: width 0.4s ease;
        }

        .contact-row:hover::after { width: 100%; }

        .contact-row:nth-child(1) { animation-delay: 0.5s; }
        .contact-row:nth-child(2) { animation-delay: 0.6s; }
        .contact-row:nth-child(3) { animation-delay: 0.7s; }
        .contact-row:nth-child(4) { animation-delay: 0.8s; }

        .tag {
          font-size: 10px;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.28);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 3px 8px;
          border-radius: 2px;
        }

        .contact-value {
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-value:hover { color: #a78bfa; }

        /* Form */
        .form-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          padding: 36px;
          backdrop-filter: blur(12px);
          position: relative;
          animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s both;
        }

        .form-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 4px;
          background: linear-gradient(135deg, rgba(124,58,237,0.06) 0%, transparent 60%);
          pointer-events: none;
        }

        .field-wrapper {
          margin-bottom: 20px;
          position: relative;
        }

        .field-label {
          display: block;
          font-size: 9px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.3);
          margin-bottom: 8px;
        }

        .field-input {
          width: 100%;
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.08);
          color: white;
          padding: 12px 14px;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          border-radius: 3px;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
          box-sizing: border-box;
          resize: none;
        }

        .field-input::placeholder { color: rgba(255,255,255,0.18); }

        .field-input:focus {
          border-color: rgba(124,58,237,0.6);
          box-shadow: 0 0 0 3px rgba(124,58,237,0.08), inset 0 0 20px rgba(124,58,237,0.04);
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: transparent;
          border: 1px solid rgba(124,58,237,0.5);
          color: white;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          cursor: pointer;
          border-radius: 3px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, color 0.3s;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.1));
          opacity: 0;
          transition: opacity 0.3s;
        }

        .submit-btn:hover { border-color: rgba(124,58,237,0.9); }
        .submit-btn:hover::before { opacity: 1; }

        .submit-btn .arrow {
          display: inline-block;
          transition: transform 0.3s;
        }

        .submit-btn:hover .arrow { transform: translateX(5px); }

        .sent-msg {
          text-align: center;
          padding: 14px;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: #34d399;
          border: 1px solid rgba(52,211,153,0.3);
          border-radius: 3px;
          animation: fadeUp 0.4s ease both;
        }

        .divider-line {
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, rgba(124,58,237,0.8), transparent);
          animation: expandLine 1s ease 0.6s both;
        }

        @keyframes expandLine {
          from { width: 0; }
          to   { width: 160px; }
        }

        .section-badge {
          font-size: 9px;
          letter-spacing: 0.25em;
          color: rgba(255,255,255,0.25);
          margin-bottom: 32px;
          animation: fadeUp 0.5s ease 0.05s both;
        }
      `,
        }}
      />

      <section
        id="contact"
        ref={sectionRef}
        className="contact-root"
        style={{ paddingTop: "90px" }}
      >
        {/* ambient glow that tracks mouse */}
        <div
          className="glow-orb"
          style={{
            left: `calc(${mousePos.x}% - 300px)`,
            top: `calc(${mousePos.y}% - 300px)`,
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 32px 100px", position: "relative", zIndex: 1 }}>
          {/* Top badge */}
          <div className="section-badge">// CONTACT</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }}>
            {/* Two-column layout on larger screens */}
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: "80px", alignItems: "start" }}
              className="contact-grid">
              
              {/* LEFT */}
              <div>
                <h1 style={{ fontSize: "clamp(72px, 10vw, 148px)", margin: 0, marginBottom: "24px" }}>
                  <span className="heading-word">LET'S</span>
                  <span className="heading-word">BUILD</span>
                  <span className="heading-word">GREAT</span>
                </h1>

                <div className="divider-line" />

                <p style={{
                  marginTop: "28px",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.35)",
                  lineHeight: 1.8,
                  letterSpacing: "0.04em",
                  maxWidth: "380px",
                  animation: "fadeUp 0.6s ease 0.7s both",
                  opacity: 0,
                }}>
                  Have a project in mind? I'd love to hear about it.
                  Let's create something remarkable together.
                </p>

                {/* Contact list */}
                <div style={{ marginTop: "44px" }}>
                  {contactItems.map(({ label, value, href }) => (
                    <div key={label} className="contact-row">
                      <span className="tag">{label}</span>
                      <a
                        href={href}
                        className="contact-value"
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                      >
                        {value}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Availability badge */}
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "36px",
                  padding: "8px 14px",
                  border: "1px solid rgba(52,211,153,0.25)",
                  borderRadius: "2px",
                  animation: "fadeUp 0.5s ease 1s both",
                  opacity: 0,
                }}>
                  <span style={{
                    width: "7px", height: "7px",
                    borderRadius: "50%",
                    background: "#34d399",
                    boxShadow: "0 0 8px #34d399",
                    animation: "pulse 2s ease infinite",
                    display: "inline-block",
                  }} />
                  <style dangerouslySetInnerHTML={{ __html: `@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }` }} />
                  <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(52,211,153,0.8)" }}>
                    AVAILABLE FOR WORK
                  </span>
                </div>
              </div>

              {/* RIGHT – Form */}
              <div className="form-card">
                <div style={{ marginBottom: "28px" }}>
                  <p className="tag" style={{ display: "inline-block", marginBottom: "12px" }}>SEND A MESSAGE</p>
                  <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg,#7c3aed,transparent)" }} />
                </div>

                {sent ? (
                  <div className="sent-msg">✓ MESSAGE SENT — I'LL BE IN TOUCH SOON</div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                    <div className="field-wrapper">
                      <label className="field-label">[ NAME ]</label>
                      <input
                        className="field-input"
                        placeholder="Your full name"
                        value={formState.name}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                      />
                    </div>

                    <div className="field-wrapper">
                      <label className="field-label">[ EMAIL ]</label>
                      <input
                        className="field-input"
                        placeholder="your@email.com"
                        type="email"
                        value={formState.email}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                      />
                    </div>

                    <div className="field-wrapper">
                      <label className="field-label">[ MESSAGE ]</label>
                      <textarea
                        className="field-input"
                        placeholder="Tell me about your project..."
                        rows={6}
                        value={formState.message}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                      />
                    </div>

                    <button type="submit" className="submit-btn">
                      SEND MESSAGE <span className="arrow">→</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Bottom footer strip */}
          <div style={{
            marginTop: "80px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.2)" }}>
              © 2025 PRATHAM SHRESTHA
            </span>
            <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.2)" }}>
              KATHMANDU, NEPAL
            </span>
          </div>
        </div>

        {/* Responsive overrides */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 860px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
          }
        ` }} />
      </section>
    </>
  );
}