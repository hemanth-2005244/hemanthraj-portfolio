import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight } from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const email = "hemanthrajukorada@gmail.com";
  const phone = "+91-8019312187";

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="cyber-badge" style={{ marginBottom: "0.75rem" }}>
            <Mail size={14} /> Contact & Connect
          </div>
          <h2>
            Let's Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p>
            Interested in collaboration, internship opportunities, or discussing AI/ML engineering projects? Send a message!
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Contact Details Card */}
          <div className="glass-panel" style={{ padding: "2.5rem" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "1.5rem",
              }}
            >
              Contact Information
            </h3>

            {/* Email Box */}
            <div
              style={{
                background: "rgba(5, 8, 17, 0.7)",
                padding: "1.25rem",
                borderRadius: "14px",
                border: "1px solid rgba(0, 242, 254, 0.2)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ padding: "10px", borderRadius: "10px", background: "rgba(0, 242, 254, 0.1)", color: "#00f2fe" }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>Official Email</div>
                  <a href={`mailto:${email}`} style={{ color: "#ffffff", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
                    {email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(email, "email")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: copiedEmail ? "#00f5d4" : "#00f2fe",
                  cursor: "pointer",
                  padding: "6px",
                }}
              >
                {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>

            {/* Phone Box */}
            <div
              style={{
                background: "rgba(5, 8, 17, 0.7)",
                padding: "1.25rem",
                borderRadius: "14px",
                border: "1px solid rgba(0, 242, 254, 0.2)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ padding: "10px", borderRadius: "10px", background: "rgba(0, 245, 212, 0.1)", color: "#00f5d4" }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>Phone Number</div>
                  <a href={`tel:${phone}`} style={{ color: "#ffffff", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
                    {phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(phone, "phone")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: copiedPhone ? "#00f5d4" : "#00f2fe",
                  cursor: "pointer",
                  padding: "6px",
                }}
              >
                {copiedPhone ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>

            {/* Location Box */}
            <div
              style={{
                background: "rgba(5, 8, 17, 0.7)",
                padding: "1.25rem",
                borderRadius: "14px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div style={{ padding: "10px", borderRadius: "10px", background: "rgba(112, 0, 255, 0.15)", color: "#a855f7" }}>
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>Location</div>
                <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem" }}>
                  Visakhapatnam, Andhra Pradesh, India
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div style={{ fontSize: "0.85rem", color: "#94a3b8", fontWeight: 600, marginBottom: "0.75rem" }}>
                Professional Links:
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cyber-outline"
                  style={{ padding: "10px 16px", fontSize: "0.85rem" }}
                >
                  <GithubIcon size={16} /> GitHub <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cyber-outline"
                  style={{ padding: "10px 16px", fontSize: "0.85rem" }}
                >
                  <LinkedinIcon size={16} /> LinkedIn <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="glass-panel" style={{ padding: "2.5rem" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "1.5rem",
              }}
            >
              Send Direct Message
            </h3>

            {formSubmitted ? (
              <div
                style={{
                  background: "rgba(0, 245, 212, 0.15)",
                  border: "1px solid #00f5d4",
                  padding: "2rem",
                  borderRadius: "16px",
                  textAlign: "center",
                  color: "#00f5d4",
                }}
              >
                <Check size={40} style={{ margin: "0 auto 10px" }} />
                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff" }}>
                  Message Transmitted!
                </h4>
                <p style={{ color: "#cbd5e1", fontSize: "0.9rem", marginTop: "4px" }}>
                  Thank you for reaching out, Hemanth will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#94a3b8", marginBottom: "6px" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      background: "rgba(5, 8, 17, 0.8)",
                      border: "1px solid rgba(0, 242, 254, 0.2)",
                      color: "#ffffff",
                      outline: "none",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#94a3b8", marginBottom: "6px" }}>
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      background: "rgba(5, 8, 17, 0.8)",
                      border: "1px solid rgba(0, 242, 254, 0.2)",
                      color: "#ffffff",
                      outline: "none",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#94a3b8", marginBottom: "6px" }}>
                    Message / Opportunity Specs
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, internship role, or inquiry..."
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      background: "rgba(5, 8, 17, 0.8)",
                      border: "1px solid rgba(0, 242, 254, 0.2)",
                      color: "#ffffff",
                      outline: "none",
                      fontSize: "0.95rem",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button type="submit" className="btn-cyber-primary" style={{ width: "100%", marginTop: "6px" }}>
                  Transmit Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
