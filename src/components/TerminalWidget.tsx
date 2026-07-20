import React, { useState, useRef, useEffect } from "react";
import { Terminal as TermIcon, RefreshCw, CornerDownLeft } from "lucide-react";
import { soundFx } from "../utils/audio";

export const TerminalWidget: React.FC = () => {
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([
    {
      command: "welcome",
      output: (
        <div>
          <span style={{ color: "#00f2fe", fontWeight: 700 }}>HEMANTH_RAJU_OS [Version 3.2.0]</span>
          <br />
          Type <span style={{ color: "#00f5d4" }}>help</span> or click prompt chips below to query portfolio matrix.
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const quickPrompts = ["skills", "projects", "education", "experience", "certifications", "contact", "hire", "whoami"];

  const handleCommand = (cmdStr: string) => {
    soundFx.playClick();
    const cleanCmd = cmdStr.trim().toLowerCase();
    let output: React.ReactNode = null;

    if (cleanCmd) {
      setCommandHistory((prev) => [...prev, cmdStr]);
      setHistoryIndex(-1);
    }

    switch (cleanCmd) {
      case "help":
        output = (
          <div style={{ color: "#cbd5e1" }}>
            Available commands:
            <br />
            <span style={{ color: "#00f2fe" }}>skills</span> - View ML & Web technical stack
            <br />
            <span style={{ color: "#00f2fe" }}>projects</span> - Machine Failure Model & web projects
            <br />
            <span style={{ color: "#00f2fe" }}>education</span> - ANITS B.Tech, Narayana, Kotak details
            <br />
            <span style={{ color: "#00f2fe" }}>experience</span> - Pantech Solutions & Charvy Solutions internships
            <br />
            <span style={{ color: "#00f2fe" }}>certifications</span> - AWS & Cisco credentials
            <br />
            <span style={{ color: "#00f2fe" }}>contact</span> - Phone & Email details
            <br />
            <span style={{ color: "#00f2fe" }}>whoami</span> - Visitor identity & session status
            <br />
            <span style={{ color: "#00f2fe" }}>hire</span> - Recruitment summary & role availability
            <br />
            <span style={{ color: "#00f2fe" }}>matrix</span> - System status diagnostics
            <br />
            <span style={{ color: "#00f2fe" }}>quote</span> - Inspirational engineering quote
            <br />
            <span style={{ color: "#00f2fe" }}>clear</span> - Reset terminal screen
          </div>
        );
        break;

      case "whoami":
        output = (
          <div>
            <span style={{ color: "#00f5d4" }}>[VISITOR_IDENTITY]</span> Recruiter / Engineering Leader / Guest User
            <br />
            Session: Authenticated Encrypted Connection 🔒
            <br />
            Status: Welcome to Hemanth Raju's Portfolio CLI!
          </div>
        );
        break;

      case "hire":
        output = (
          <div style={{ borderLeft: "2px solid #00f5d4", paddingLeft: "10px" }}>
            <div style={{ color: "#00f5d4", fontWeight: 700 }}>AVAILABLE FOR OPPORTUNITIES 🚀</div>
            • Roles: AI/ML Engineer, Full Stack Software Developer, Data Science Intern
            <br />
            • Location: Visakhapatnam, AP, India (Open to Remote / On-site)
            <br />
            • Contact: <a href="mailto:hemanthrajukorada@gmail.com" style={{ color: "#00f2fe" }}>hemanthrajukorada@gmail.com</a>
          </div>
        );
        break;

      case "matrix":
        output = (
          <div>
            <span style={{ color: "#ff007f", fontWeight: 700 }}>[SYSTEM DIAGNOSTICS]</span>
            <br />
            • ML Pipeline: OPTIMAL (96% Accuracy)
            <br />
            • Neural Nodes: 1,024 Processing Units ACTIVE
            <br />
            • Security Firewall: Cisco Network Defence VERIFIED
          </div>
        );
        break;

      case "quote":
        output = (
          <div style={{ fontStyle: "italic", color: "#a855f7" }}>
            "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim." — Edsger W. Dijkstra
          </div>
        );
        break;

      case "skills":
        output = (
          <div>
            <div style={{ color: "#00f5d4", fontWeight: 700 }}>[TECHNICAL SKILLS MATRIX]</div>
            • Languages: Python, Java, C, SQL
            <br />
            • Machine Learning: Scikit-learn, Pandas, NumPy, TensorFlow, Classification, Feature Engineering
            <br />
            • Web Development: HTML5, CSS3, JavaScript, React, REST APIs
            <br />
            • Database & Tools: MySQL, Git, GitHub, VS Code
          </div>
        );
        break;

      case "projects":
        output = (
          <div>
            <div style={{ color: "#00f2fe", fontWeight: 700 }}>1. Machine Failure Prediction</div>
            Predictive maintenance model using Python, Pandas, NumPy, Scikit-learn. Logistic Regression & Decision Trees achieved 96% accuracy.
            <br />
            <div style={{ color: "#00f2fe", fontWeight: 700, marginTop: "6px" }}>2. Personal Portfolio Platform</div>
            Modern animated interactive web portfolio showcasing engineering projects, certifications, and skills.
          </div>
        );
        break;

      case "education":
        output = (
          <div>
            • ANITS (Anil Neerukonda Inst of Tech & Sciences): B.Tech CSE (AI & ML) | CGPA: 7.54 / 10
            <br />
            • Narayana Junior College: Class XII, MPC
            <br />
            • Kotak Salesian School: Class X, ICSE
          </div>
        );
        break;

      case "experience":
        output = (
          <div>
            • AI-Driven Software Dev Intern @ Pantech Solutions (AI model design & implementation, testing, technical docs)
            <br />
            • Full Stack Web Developer Intern @ Charvy Solutions (HTML/CSS/JS interfaces, API integration, debugging, Git)
          </div>
        );
        break;

      case "certifications":
        output = (
          <div>
            • AWS Cloud & AI Practitioner (in progress)
            <br />
            • AWS Fundamentals of Machine Learning
            <br />
            • Cisco Networking Academy: Network Defence
            <br />
            • Cisco Networking Academy: Network Addressing & Troubleshooting
            <br />
            • BE10X: AI Tools & ChatGPT Workshop
            <br />
            • Prompt Engineering Showdown Participant
          </div>
        );
        break;

      case "contact":
        output = (
          <div>
            • Email: hemanthrajukorada@gmail.com
            <br />
            • Phone: +91-8019312187
            <br />
            • Location: Visakhapatnam, Andhra Pradesh, India
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <div style={{ color: "#ff007f" }}>
            Command not recognized: "{cleanCmd}". Type <span style={{ color: "#00f2fe" }}>help</span> for available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
  };

  return (
    <section id="terminal" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="cyber-badge" style={{ marginBottom: "0.75rem" }}>
            <TermIcon size={14} /> Interactive CLI Hub
          </div>
          <h2>
            Terminal <span className="gradient-text">Command Interface</span>
          </h2>
          <p>
            Interact directly with Hemanth Raju's portfolio matrix via command prompts. Use Up/Down arrows for command history!
          </p>
        </div>

        {/* Terminal Glass Frame */}
        <div
          className="glass-panel"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(0, 242, 254, 0.3)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 242, 254, 0.15)",
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.95)",
              padding: "10px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "#94a3b8",
                  marginLeft: "10px",
                }}
              >
                hemanth@portfolio-cli: ~
              </span>
            </div>
            <button
              onClick={() => handleCommand("clear")}
              style={{
                background: "transparent",
                border: "none",
                color: "#94a3b8",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.75rem",
              }}
            >
              <RefreshCw size={12} /> Clear
            </button>
          </div>

          {/* Terminal Body */}
          <div
            style={{
              background: "rgba(5, 8, 17, 0.95)",
              padding: "1.5rem",
              minHeight: "320px",
              maxHeight: "450px",
              overflowY: "auto",
              fontFamily: "var(--font-mono)",
              fontSize: "0.9rem",
              lineHeight: 1.6,
            }}
          >
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#00f2fe" }}>
                  <span>$ hemanth-cli &gt;</span>
                  <span style={{ color: "#ffffff", fontWeight: 600 }}>{item.command}</span>
                </div>
                <div style={{ color: "#cbd5e1", marginTop: "4px", paddingLeft: "1.2rem" }}>
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Bar */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: "rgba(10, 15, 29, 0.9)",
              padding: "12px 18px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <span style={{ color: "#00f2fe", fontFamily: "var(--font-mono)", fontWeight: 700 }}>$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type command ('help', 'projects', 'skills', 'hire')..."
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#ffffff",
                fontFamily: "var(--font-mono)",
                fontSize: "0.9rem",
              }}
            />
            <button
              type="submit"
              style={{
                background: "rgba(0, 242, 254, 0.15)",
                border: "1px solid #00f2fe",
                color: "#00f2fe",
                padding: "6px 14px",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              Run <CornerDownLeft size={14} />
            </button>
          </form>

          {/* Quick Prompts Bar */}
          <div
            style={{
              background: "rgba(5, 8, 17, 0.8)",
              padding: "10px 18px",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <span style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 600 }}>Quick Prompts:</span>
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleCommand(p)}
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(0, 242, 254, 0.2)",
                  color: "#cbd5e1",
                  padding: "3px 10px",
                  borderRadius: "12px",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
