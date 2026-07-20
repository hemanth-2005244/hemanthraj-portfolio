import React from "react";
import { Award, ShieldCheck, Cpu, Cloud, Terminal, Trophy } from "lucide-react";

export const CertificationsBadges: React.FC = () => {
  const certifications = [
    {
      title: "Cloud & AI Practitioner",
      issuer: "Amazon Web Services (AWS)",
      status: "In Progress",
      icon: Cloud,
      gradient: "linear-gradient(135deg, #ff9900, #ff5500)",
      description: "Cloud computing fundamentals, AI services, security, & AWS architecture.",
    },
    {
      title: "Fundamentals of Machine Learning",
      issuer: "Amazon Web Services (AWS)",
      status: "Verified",
      icon: Cpu,
      gradient: "linear-gradient(135deg, #00f2fe, #4facfe)",
      description: "Machine learning algorithms, model training lifecycle, & cloud ML pipelines.",
    },
    {
      title: "Network Defence",
      issuer: "Cisco Networking Academy",
      status: "Verified",
      icon: ShieldCheck,
      gradient: "linear-gradient(135deg, #00f5d4, #00b4d8)",
      description: "Network security protocols, threat mitigation, firewall & defence strategy.",
    },
    {
      title: "Network Addressing & Troubleshooting",
      issuer: "Cisco Networking Academy",
      status: "Verified",
      icon: Terminal,
      gradient: "linear-gradient(135deg, #7000ff, #a855f7)",
      description: "IP subnetting, IPv4/IPv6 addressing, router diagnostics, & packet analysis.",
    },
    {
      title: "AI Tools & ChatGPT Workshop",
      issuer: "BE10X",
      status: "Verified",
      icon: Award,
      gradient: "linear-gradient(135deg, #ff007f, #7000ff)",
      description: "Prompt engineering, AI automation tools, & generative productivity workflows.",
    },
  ];

  return (
    <section id="certifications" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="cyber-badge" style={{ marginBottom: "0.75rem" }}>
            <Award size={14} /> Certifications & Honors
          </div>
          <h2>
            Verified <span className="gradient-text">Credentials & Awards</span>
          </h2>
          <p>
            Industry recognized certifications in Cloud, Machine Learning, Network Defense, and AI Prompt Engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top Accent Strip */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: cert.gradient,
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#00f2fe",
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <span
                    style={{
                      background: cert.status === "In Progress" ? "rgba(255, 153, 0, 0.15)" : "rgba(0, 245, 212, 0.15)",
                      border: cert.status === "In Progress" ? "1px solid #ff9900" : "1px solid #00f5d4",
                      color: cert.status === "In Progress" ? "#ff9900" : "#00f5d4",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: "12px",
                    }}
                  >
                    {cert.status}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "4px",
                    lineHeight: 1.3,
                  }}
                >
                  {cert.title}
                </h3>

                <div
                  style={{
                    color: "#00f2fe",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {cert.issuer}
                </div>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                  }}
                >
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Awards & Recognition Highlight Box */}
        <div
          className="glass-panel"
          style={{
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
            border: "1px solid rgba(112, 0, 255, 0.3)",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #7000ff, #ff007f)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              boxShadow: "0 0 20px rgba(112, 0, 255, 0.5)",
              flexShrink: 0,
            }}
          >
            <Trophy size={28} />
          </div>

          <div style={{ flex: 1 }}>
            <h4
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "4px",
              }}
            >
              Awards & Recognition
            </h4>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
              <strong style={{ color: "#00f5d4" }}>Participant, Prompt Engineering Showdown</strong> — Competed in a competitive prompt engineering hackathon challenge, designing optimized LLM prompts and system instructions for AI model reasoning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
