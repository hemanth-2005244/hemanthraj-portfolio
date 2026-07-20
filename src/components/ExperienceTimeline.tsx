import React from "react";
import { Briefcase, GraduationCap, MapPin, Building2, CheckCircle2 } from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  const experiences = [
    {
      type: "internship",
      role: "AI-Driven Software Development Intern",
      company: "Pantech Solutions",
      period: "Recent Internship",
      location: "Remote / Hybrid",
      bullets: [
        "Worked on AI-driven software development concepts, contributing to model design and architecture.",
        "Assisted in model development, training validation, testing, and technical documentation.",
        "Collaborated with dev teams to research algorithmic solutions for intelligent software applications.",
      ],
      badgeColor: "#00f2fe",
    },
    {
      type: "internship",
      role: "Full Stack Web Developer Intern",
      company: "Charvy Solutions",
      period: "Recent Internship",
      location: "Hybrid",
      bullets: [
        "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
        "Assisted in debugging, REST API integration, dynamic UI rendering, and feature implementation.",
        "Collaborated with team members using Git for version control and issue tracking.",
      ],
      badgeColor: "#00f5d4",
    },
    {
      type: "education",
      role: "B.Tech in Computer Science & Engineering (AI & ML)",
      company: "Anil Neerukonda Institute of Technology and Sciences (ANITS)",
      period: "2023 - Present",
      location: "Visakhapatnam, AP",
      bullets: [
        "Specializing in Artificial Intelligence and Machine Learning with a current CGPA of 7.54 / 10.",
        "Hands-on coursework in Python, Data Preprocessing, Feature Engineering, Classification, & Database Systems.",
        "Active student member building technical projects and machine learning predictive systems.",
      ],
      badgeColor: "#7000ff",
    },
    {
      type: "education",
      role: "Class XII (Intermediate MPC)",
      company: "Narayana Junior College",
      period: "2021 - 2023",
      location: "Andhra Pradesh",
      bullets: [
        "Completed Higher Secondary Education specializing in Mathematics, Physics, and Chemistry.",
        "Built solid mathematical foundation for linear algebra, probability, and computer science logic.",
      ],
      badgeColor: "#4facfe",
    },
    {
      type: "education",
      role: "Class X (ICSE Board)",
      company: "Kotak Salesian School",
      period: "2020 - 2021",
      location: "Visakhapatnam, AP",
      bullets: [
        "Completed ICSE Board examination with high academic performance and computer science basics.",
      ],
      badgeColor: "#ff007f",
    },
  ];

  return (
    <section id="experience" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="cyber-badge" style={{ marginBottom: "0.75rem" }}>
            <Briefcase size={14} /> Career & Education
          </div>
          <h2>
            Experience <span className="gradient-text">& Timeline</span>
          </h2>
          <p>
            Chronological journey through industry internships and academic achievements.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: "850px", margin: "0 auto", position: "relative" }}>
          {/* Vertical Line */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              bottom: "20px",
              left: "24px",
              width: "2px",
              background: "linear-gradient(180deg, #00f2fe, #7000ff, #00f5d4)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  position: "relative",
                }}
              >
                {/* Node Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(7, 10, 18, 0.9)",
                    border: `2px solid ${exp.badgeColor}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: exp.badgeColor,
                    zIndex: 2,
                    boxShadow: `0 0 15px ${exp.badgeColor}`,
                    flexShrink: 0,
                  }}
                >
                  {exp.type === "internship" ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                </div>

                {/* Content Box */}
                <div
                  className="glass-panel"
                  style={{
                    flex: 1,
                    padding: "1.75rem",
                    borderLeft: `3px solid ${exp.badgeColor}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        color: exp.badgeColor,
                        fontWeight: 700,
                      }}
                    >
                      {exp.period}
                    </span>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "#94a3b8",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      marginBottom: "4px",
                    }}
                  >
                    {exp.role}
                  </h3>

                  <div
                    style={{
                      color: "#cbd5e1",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      marginBottom: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Building2 size={15} color="#00f2fe" />
                    {exp.company}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {exp.bullets.map((b, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          color: "var(--text-muted)",
                          fontSize: "0.9rem",
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle2 size={14} color="#00f5d4" style={{ marginTop: "3px", flexShrink: 0 }} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
