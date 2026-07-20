import React, { useState, useMemo } from "react";
import { Briefcase, ExternalLink, CheckCircle2, X, Search, Copy, Check } from "lucide-react";
import { soundFx } from "../utils/audio";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  type: "ml" | "web" | "internship" | "cloud";
  summary: string;
  fullDetails: string;
  tools: string[];
  metrics: string;
  highlights: string[];
  gradient: string;
}

export const ProjectsGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filterTabs = [
    { id: "All", label: "All Works" },
    { id: "ml", label: "Machine Learning & AI" },
    { id: "web", label: "Full Stack Web" },
    { id: "internship", label: "Internships" },
    { id: "cloud", label: "Cloud & Systems" },
  ];

  const projects: ProjectItem[] = [
    {
      id: "machine-failure",
      title: "Machine Failure Prediction Model",
      category: "Machine Learning & Predictive Analytics",
      type: "ml",
      summary: "Developed a predictive maintenance model using Python, Pandas, NumPy, and Scikit-learn achieving 96% prediction accuracy.",
      fullDetails:
        "Engineered an end-to-end machine learning solution to predict equipment failure before occurrence. Performed comprehensive data cleaning, missing value imputation, normalization, and feature correlation analysis. Evaluated Logistic Regression and Decision Tree classification algorithms, optimizing metrics including Confusion Matrix, Precision, Recall, and F1-Score.",
      tools: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Decision Trees", "Logistic Regression"],
      metrics: "96% Model Accuracy",
      highlights: [
        "Performed feature engineering & data scaling for predictive maintenance dataset.",
        "Implemented Decision Tree & Logistic Regression classification pipelines.",
        "Evaluated model with Precision, Recall, F1-Score, and Confusion Matrix.",
        "Achieved 96% classification accuracy on unseen validation sets.",
      ],
      gradient: "linear-gradient(135deg, #00f2fe, #4facfe)",
    },
    {
      id: "pantech-internship",
      title: "AI-Driven Software Development",
      category: "Pantech Solutions Internship",
      type: "internship",
      summary: "Worked on AI-driven software development concepts, contributing to model design, architecture, testing, and technical documentation.",
      fullDetails:
        "Collaborated with senior software engineers to research and build artificial intelligence modules. Assisted in designing model pipelines, preparing dataset schema, writing automated testing scripts, and producing comprehensive technical documentation.",
      tools: ["Python", "AI Model Architecture", "Dataset Preparation", "Technical Documentation"],
      metrics: "AI Software Intern",
      highlights: [
        "Contributed to model design and architecture definition.",
        "Assisted in unit testing, data preprocessing, and model evaluation.",
        "Produced structured technical documentation for AI software modules.",
      ],
      gradient: "linear-gradient(135deg, #7000ff, #a855f7)",
    },
    {
      id: "charvy-internship",
      title: "Full Stack Web Interfaces",
      category: "Charvy Solutions Internship",
      type: "internship",
      summary: "Developed responsive web interfaces using HTML, CSS, JavaScript, REST API integrations, debugging, and Git version control.",
      fullDetails:
        "Engaged in full-stack web development tasks for client projects. Built modular responsive UI layouts, integrated REST APIs for dynamic data fetching, resolved cross-browser compatibility bugs, and maintained codebase version control using Git.",
      tools: ["HTML5", "CSS3", "JavaScript", "REST APIs", "Git & GitHub"],
      metrics: "Full Stack Intern",
      highlights: [
        "Engineered responsive user interfaces with HTML5, CSS3, and JavaScript.",
        "Integrated asynchronous REST APIs and managed data state.",
        "Collaborated in team Git workflow for feature branch management.",
      ],
      gradient: "linear-gradient(135deg, #00f5d4, #00f2fe)",
    },
    {
      id: "portfolio-platform",
      title: "Personal Animated Portfolio Website",
      category: "Full Stack & Interactive Web",
      type: "web",
      summary: "Developed and deployed a personal portfolio showcasing engineering projects, skills, education, and certifications.",
      fullDetails:
        "Designed and built a high-performance, responsive portfolio website featuring custom canvas particle animations, cyberpunk glassmorphism UI, CLI terminal simulator, and interactive modal dialogs.",
      tools: ["React", "TypeScript", "HTML5/CSS3", "Vite", "Canvas API"],
      metrics: "Deployed Portfolio",
      highlights: [
        "Built responsive interactive glassmorphic design system.",
        "Implemented interactive CLI terminal for prompt queries.",
        "Optimized asset loading and TypeScript type safety.",
      ],
      gradient: "linear-gradient(135deg, #ff007f, #7000ff)",
    },
    {
      id: "cloud-security",
      title: "Network & Cloud Security Protocols",
      category: "Systems & Security Training",
      type: "cloud",
      summary: "Hands-on implementation of Cisco Network Defence, addressing protocols, and AWS Cloud Machine Learning fundamentals.",
      fullDetails:
        "Completed rigorous coursework and practical exercises in network defense mechanisms, IP addressing, router configuration, hardware diagnostics, and cloud-based machine learning services on AWS.",
      tools: ["AWS Cloud", "TCP/IP", "Cisco Network Defence", "Hardware Diagnostics"],
      metrics: "5+ Certifications",
      highlights: [
        "Mastered network security protocols and threat detection.",
        "Configured dual-boot Linux/Windows administration environments.",
        "Acquired AWS Cloud & Machine Learning practitioner knowledge.",
      ],
      gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((proj) => {
      const matchesTab = activeTab === "All" || proj.type === activeTab;
      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const handleCopySummary = (proj: ProjectItem, e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.playClick();
    soundFx.speakData("Copied Project Summary", proj.title);
    const summaryText = `${proj.title} - ${proj.category}\n${proj.summary}\nKey Tools: ${proj.tools.join(", ")}`;
    navigator.clipboard.writeText(summaryText);
    setCopiedId(proj.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="projects" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="cyber-badge" style={{ marginBottom: "0.75rem" }}>
            <Briefcase size={14} /> Projects & Deliverables
          </div>
          <h2>
            Featured <span className="gradient-text">Engineering Works</span>
          </h2>
          <p>
            Explore AI models, software applications, and web development projects built during internships and academic pursuits.
          </p>
        </div>

        {/* Filter Controls: Search & Category Tabs */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {/* Search Bar */}
          <div
            style={{
              position: "relative",
              maxWidth: "480px",
              width: "100%",
            }}
          >
            <Search
              size={18}
              color="#00f2fe"
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, tool (e.g. Scikit-learn, Python, React)..."
              style={{
                width: "100%",
                padding: "12px 16px 12px 46px",
                borderRadius: "30px",
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(0, 242, 254, 0.3)",
                color: "#ffffff",
                fontSize: "0.9rem",
                outline: "none",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>

          {/* Category Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playClick();
                  soundFx.speakData(`Project filter ${tab.label}`);
                  setActiveTab(tab.id);
                }}
                style={{
                  padding: "8px 18px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: activeTab === tab.id ? "1px solid #00f2fe" : "1px solid rgba(255, 255, 255, 0.08)",
                  background: activeTab === tab.id ? "rgba(0, 242, 254, 0.15)" : "rgba(15, 23, 42, 0.6)",
                  color: activeTab === tab.id ? "#00f2fe" : "#cbd5e1",
                  boxShadow: activeTab === tab.id ? "0 0 15px rgba(0, 242, 254, 0.25)" : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 2rem",
              background: "rgba(15, 23, 42, 0.5)",
              borderRadius: "16px",
              border: "1px dashed rgba(255, 255, 255, 0.1)",
              color: "#94a3b8",
            }}
          >
            No projects match your search parameters. Try adjusting your query or filter category.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="glass-panel"
                onMouseEnter={() => soundFx.speakData(proj.title, proj.metrics)}
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
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
                    background: proj.gradient,
                  }}
                />

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        color: "#00f2fe",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {proj.category}
                    </span>
                    <span
                      style={{
                        background: "rgba(0, 242, 254, 0.1)",
                        border: "1px solid rgba(0, 242, 254, 0.3)",
                        color: "#00f5d4",
                        padding: "4px 10px",
                        borderRadius: "12px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                      }}
                    >
                      {proj.metrics}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      marginBottom: "0.75rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {proj.title}
                  </h3>

                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {proj.summary}
                  </p>

                  {/* Tech Chips */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {proj.tools.map((t, i) => (
                      <span
                        key={i}
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "#cbd5e1",
                          fontSize: "0.78rem",
                          padding: "3px 10px",
                          borderRadius: "12px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      soundFx.speakData(`Opening specifications for ${proj.title}`);
                      setSelectedProject(proj);
                    }}
                    className="btn-cyber-outline"
                    style={{
                      flex: 1,
                      padding: "10px",
                      fontSize: "0.88rem",
                      justifyContent: "center",
                    }}
                  >
                    View Specs <ExternalLink size={16} />
                  </button>

                  <button
                    onClick={(e) => handleCopySummary(proj, e)}
                    style={{
                      background: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(0, 242, 254, 0.3)",
                      color: copiedId === proj.id ? "#00f5d4" : "#cbd5e1",
                      padding: "10px 14px",
                      borderRadius: "12px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s ease",
                    }}
                    title="Copy Project Summary"
                  >
                    {copiedId === proj.id ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Specs Modal Popup */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(5, 8, 17, 0.85)",
            backdropFilter: "blur(20px)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: "680px",
              width: "100%",
              padding: "2.5rem",
              position: "relative",
              border: "1px solid #00f2fe",
              boxShadow: "0 0 50px rgba(0, 242, 254, 0.3)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                padding: "8px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <X size={20} />
            </button>

            <div
              style={{
                fontSize: "0.85rem",
                color: "#00f2fe",
                fontFamily: "var(--font-mono)",
                marginBottom: "6px",
              }}
            >
              PROJECT_SPECIFICATION // {selectedProject.category}
            </div>

            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: 900,
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              {selectedProject.title}
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "1.02rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              {selectedProject.fullDetails}
            </p>

            {/* Highlights List */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h4
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                }}
              >
                Key Technical Deliverables:
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {selectedProject.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      color: "#94a3b8",
                      fontSize: "0.92rem",
                    }}
                  >
                    <CheckCircle2 size={16} color="#00f5d4" style={{ marginTop: "3px" }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Used */}
            <div
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                paddingTop: "1.25rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {selectedProject.tools.map((t, i) => (
                <span
                  key={i}
                  style={{
                    background: "rgba(0, 242, 254, 0.1)",
                    border: "1px solid rgba(0, 242, 254, 0.3)",
                    color: "#00f2fe",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    padding: "4px 12px",
                    borderRadius: "16px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
