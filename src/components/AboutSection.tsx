import React, { useState } from "react";
import { User, Target, Award, BookOpen, CheckCircle2, ChevronRight, Zap } from "lucide-react";

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"objective" | "education" | "strengths">("objective");

  const educationList = [
    {
      institution: "Anil Neerukonda Institute of Technology and Sciences (ANITS)",
      degree: "B.Tech, Computer Science and Engineering (AI & ML)",
      year: "2023 - Present",
      grade: "CGPA: 7.54 / 10",
      highlights: "Specializing in Machine Learning algorithms, predictive analytics, deep learning concepts, and software engineering principles.",
    },
    {
      institution: "Narayana Junior College",
      degree: "Class XII, MPC (Mathematics, Physics, Chemistry)",
      year: "2021 - 2023",
      grade: "Completed with High Honors",
      highlights: "Strengthened mathematical reasoning, linear algebra, calculus, and logical problem-solving foundation.",
    },
    {
      institution: "Kotak Salesian School",
      degree: "Class X, ICSE Curriculum",
      year: "2020 - 2021",
      grade: "ICSE Board Certificate",
      highlights: "Comprehensive grounding in foundational sciences, mathematics, computer applications, and analytical communication.",
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Teamwork & Collaboration",
    "Technical Communication",
    "Leadership Qualities",
    "Time Management",
    "Adaptability & Agility",
  ];

  return (
    <section id="about" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="cyber-badge" style={{ marginBottom: "0.75rem" }}>
            <User size={14} /> Profile & Overview
          </div>
          <h2>
            Architecting <span className="gradient-text">AI Solutions</span>
          </h2>
          <p>
            Learn more about my technical background, academic journey, and engineering objectives.
          </p>
        </div>

        {/* Content Box */}
        <div
          className="glass-panel"
          style={{
            padding: "2.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Left Navigation Tabs */}
          <div>
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Zap color="#00f2fe" size={22} /> Resume Focus
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { id: "objective", label: "Career Objective", icon: Target },
                { id: "education", label: "Education & Academics", icon: BookOpen },
                { id: "strengths", label: "Soft Skills & Competencies", icon: Award },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 18px",
                      borderRadius: "12px",
                      background: isActive
                        ? "linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(112, 0, 255, 0.15))"
                        : "rgba(15, 23, 42, 0.5)",
                      border: isActive
                        ? "1px solid #00f2fe"
                        : "1px solid rgba(255, 255, 255, 0.08)",
                      color: isActive ? "#00f2fe" : "#cbd5e1",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Icon size={18} color={isActive ? "#00f2fe" : "#94a3b8"} />
                      {tab.label}
                    </div>
                    <ChevronRight size={18} opacity={isActive ? 1 : 0.4} />
                  </button>
                );
              })}
            </div>

            {/* Quick Resume Bio Card */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1.25rem",
                borderRadius: "12px",
                background: "rgba(5, 8, 17, 0.7)",
                border: "1px solid rgba(0, 242, 254, 0.2)",
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#94a3b8",
                  marginBottom: "0.5rem",
                }}
              >
                Seeking Opportunities As:
              </div>
              <div
                style={{
                  color: "#00f5d4",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                }}
              >
                • AI / ML Engineer <br />
                • Software Engineer <br />
                • Data Science Intern <br />
                • Full Stack Developer
              </div>
            </div>
          </div>

          {/* Right Display Area */}
          <div
            style={{
              background: "rgba(5, 8, 17, 0.6)",
              padding: "2rem",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              minHeight: "360px",
            }}
          >
            {activeTab === "objective" && (
              <div>
                <h4
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "1rem",
                  }}
                >
                  Career Objective
                </h4>
                <p
                  style={{
                    color: "#cbd5e1",
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                  }}
                >
                  AI and Machine Learning undergraduate with hands-on experience in machine learning, Python, SQL, data analysis, and full-stack web development. Skilled in building predictive models, data preprocessing, feature engineering, and responsive web applications through internships and self-driven projects.
                </p>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    marginBottom: "2rem",
                  }}
                >
                  Driven by a continuous passion to apply strong problem-solving skills, algorithmic design, and engineering fundamentals to create scalable, real-world intelligent software applications.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {[
                    "Predictive Modeling & AI",
                    "Feature Engineering & Clean Data",
                    "Full Stack Web Interfaces",
                    "REST API & Database Systems",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#00f2fe",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      <CheckCircle2 size={16} /> {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div>
                <h4
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "1.5rem",
                  }}
                >
                  Academic Qualifications
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {educationList.map((edu, idx) => (
                    <div
                      key={idx}
                      style={{
                        borderLeft: "2px solid #00f2fe",
                        paddingLeft: "1.25rem",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "8px",
                          marginBottom: "4px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 800,
                            color: "#ffffff",
                            fontSize: "1.05rem",
                          }}
                        >
                          {edu.institution}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.8rem",
                            color: "#00f2fe",
                            background: "rgba(0, 242, 254, 0.1)",
                            padding: "2px 10px",
                            borderRadius: "12px",
                          }}
                        >
                          {edu.year}
                        </span>
                      </div>
                      <div
                        style={{
                          color: "#00f5d4",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          marginBottom: "4px",
                        }}
                      >
                        {edu.degree} — <span style={{ color: "#a855f7" }}>{edu.grade}</span>
                      </div>
                      <div style={{ color: "#94a3b8", fontSize: "0.88rem" }}>
                        {edu.highlights}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "strengths" && (
              <div>
                <h4
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "1rem",
                  }}
                >
                  Soft Skills & Engineering Mindset
                </h4>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.95rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Key interpersonal abilities and work ethic cultivated through team projects, internship collaborations, and technical hackathons:
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {softSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="glass-card"
                      style={{
                        padding: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        border: "1px solid rgba(0, 242, 254, 0.15)",
                      }}
                    >
                      <Award size={18} color="#7000ff" />
                      <span
                        style={{
                          fontWeight: 700,
                          color: "#ffffff",
                          fontSize: "0.9rem",
                        }}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
