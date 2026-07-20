import React, { useState } from "react";
import { Cpu, Code, Database, Layers, Sparkles, Bot } from "lucide-react";
import { soundFx } from "../utils/audio";

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Gen AI & Agentic", "Machine Learning", "Web & DB", "Languages", "Tools & Systems"];

  const skills = [
    { name: "LangChain / LlamaIndex", category: "Gen AI & Agentic", level: 92, icon: Bot, highlight: "LLM Orchestration & Agentic Chains" },
    { name: "OpenAI / Gemini APIs", category: "Gen AI & Agentic", level: 95, icon: Sparkles, highlight: "Function Calling & Prompt Engineering" },
    { name: "ChromaDB & RAG", category: "Gen AI & Agentic", level: 90, icon: Database, highlight: "Vector Embeddings & Semantic Search" },
    { name: "Multi-Agent Swarms", category: "Gen AI & Agentic", level: 88, icon: Bot, highlight: "Task Decomposition & Agent Routing" },
    
    { name: "Python", category: "Languages", level: 94, icon: Code, highlight: "Primary Language for AI, ML & Data" },
    { name: "Scikit-Learn", category: "Machine Learning", level: 90, icon: Cpu, highlight: "Classification & Predictive Maintenance" },
    { name: "Pandas & NumPy", category: "Machine Learning", level: 92, icon: Cpu, highlight: "Data Preprocessing & Feature Engineering" },
    { name: "TensorFlow (Basic)", category: "Machine Learning", level: 72, icon: Cpu, highlight: "Neural Network Architecture Basics" },
    { name: "Feature Engineering", category: "Machine Learning", level: 88, icon: Cpu, highlight: "Model Optimization & Metrics Evaluation" },

    { name: "HTML5 / CSS3", category: "Web & DB", level: 90, icon: Layers, highlight: "Responsive & Modern Cyber Styling" },
    { name: "JavaScript / React", category: "Web & DB", level: 88, icon: Layers, highlight: "Dynamic Interactive Glassmorphism UIs" },
    { name: "TypeScript", category: "Web & DB", level: 85, icon: Code, highlight: "Type-Safe Application Architecture" },
    { name: "REST APIs", category: "Web & DB", level: 85, icon: Layers, highlight: "Backend & Front-end Integration" },
    { name: "MySQL", category: "Web & DB", level: 82, icon: Database, highlight: "Relational Queries & Schemas" },

    { name: "Java", category: "Languages", level: 78, icon: Code, highlight: "Object-Oriented Programming" },
    { name: "C Language", category: "Languages", level: 80, icon: Code, highlight: "Core Data Structures & Logic" },
    { name: "SQL", category: "Languages", level: 85, icon: Database, highlight: "Database Queries & Design" },

    { name: "Git & GitHub", category: "Tools & Systems", level: 90, icon: Layers, highlight: "Version Control & Team Collaboration" },
    { name: "AWS Cloud Services", category: "Tools & Systems", level: 80, icon: Layers, highlight: "Cloud & Machine Learning Practitioner" },
    { name: "VS Code", category: "Tools & Systems", level: 95, icon: Layers, highlight: "Primary IDE & AI Assistant Workflows" },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="cyber-badge" style={{ marginBottom: "0.75rem" }}>
            <Cpu size={14} /> Core Matrix
          </div>
          <h2>
            Technical <span className="gradient-text">Gen AI & Skillset Matrix</span>
          </h2>
          <p>
            Proficiency breakdown across Generative AI Agentic frameworks, Machine Learning algorithms, Web Development, and Developer Tools.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "3rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                soundFx.speakData(`Skill category ${cat}`);
                setActiveCategory(cat);
              }}
              style={{
                padding: "10px 20px",
                borderRadius: "30px",
                fontSize: "0.9rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: activeCategory === cat ? "1px solid #00f2fe" : "1px solid rgba(255, 255, 255, 0.08)",
                background: activeCategory === cat ? "rgba(0, 242, 254, 0.15)" : "rgba(15, 23, 42, 0.6)",
                color: activeCategory === cat ? "#00f2fe" : "#cbd5e1",
                boxShadow: activeCategory === cat ? "0 0 20px rgba(0, 242, 254, 0.3)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                onMouseEnter={() => soundFx.speakData(skill.name, `${skill.level} percent proficiency`)}
                onClick={() => soundFx.speakData(skill.name, skill.highlight)}
                style={{
                  padding: "1.5rem",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        padding: "8px",
                        borderRadius: "10px",
                        background: "rgba(0, 242, 254, 0.1)",
                        color: "#00f2fe",
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      style={{
                        fontWeight: 800,
                        color: "#ffffff",
                        fontSize: "1.05rem",
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85rem",
                      color: "#00f5d4",
                      fontWeight: 700,
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                <div
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.83rem",
                    marginBottom: "1.2rem",
                    minHeight: "36px",
                  }}
                >
                  {skill.highlight}
                </div>

                {/* Progress Bar */}
                <div
                  style={{
                    width: "100%",
                    height: "6px",
                    background: "rgba(255, 255, 255, 0.08)",
                    borderRadius: "3px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, #00f2fe, #7000ff)",
                      borderRadius: "3px",
                      boxShadow: "0 0 10px #00f2fe",
                      transition: "width 1s ease-in-out",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
