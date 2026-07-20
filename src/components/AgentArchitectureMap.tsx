import React from "react";
import { Network } from "lucide-react";

export const AgentArchitectureMap: React.FC = () => {
  const agentModules = [
    {
      title: "1. Data Ingestion & Preprocessing Agent",
      role: "Performs feature engineering, normalization, & missing value imputation on machine failure sensor streams.",
      tools: ["Python", "Pandas", "NumPy", "Data Preprocessing"],
      color: "#00f2fe",
    },
    {
      title: "2. Classification & Inference Engine",
      role: "Runs Decision Tree & Logistic Regression algorithms to compute 96% accuracy prediction scores.",
      tools: ["Scikit-learn", "Decision Trees", "Logistic Regression", "Confusion Matrix"],
      color: "#00f5d4",
    },
    {
      title: "3. Full-Stack Web Integration Layer",
      role: "Exposes RESTful endpoints, handles state management, and renders responsive Web UI components.",
      tools: ["React", "REST APIs", "JavaScript", "MySQL"],
      color: "#7000ff",
    },
    {
      title: "4. Autonomous System Security & Deployment",
      role: "Maintains network defence protocols, version control pipelines, & cloud infrastructure security.",
      tools: ["Cisco Network Defence", "AWS Cloud", "Git & GitHub", "Dual-Boot Linux"],
      color: "#ff007f",
    },
  ];

  return (
    <section id="architecture" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="cyber-badge" style={{ marginBottom: "0.75rem" }}>
            <Network size={14} /> System Topology
          </div>
          <h2>
            Autonomous Agent <span className="gradient-text">& ML Architecture</span>
          </h2>
          <p>
            Architectural schematic illustrating how AI agents, machine learning pipelines, and full-stack software interface seamlessly.
          </p>
        </div>

        {/* System Topology Diagram Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {agentModules.map((mod, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                borderTop: `3px solid ${mod.color}`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: mod.color,
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                MODULE 0{idx + 1}
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}
              >
                {mod.title}
              </h3>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  marginBottom: "1.25rem",
                }}
              >
                {mod.role}
              </p>

              {/* Tools Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {mod.tools.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#cbd5e1",
                      fontSize: "0.75rem",
                      padding: "3px 10px",
                      borderRadius: "10px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
