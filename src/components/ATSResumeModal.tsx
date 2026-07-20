import React, { useState } from "react";
import { X, Download, Copy, Check, ShieldCheck, FileText } from "lucide-react";
import confetti from "canvas-confetti";
import { soundFx } from "../utils/audio";

interface ATSResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ATSResumeModal: React.FC<ATSResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedType, setCopiedType] = useState<"text" | "md" | null>(null);

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    soundFx.playSuccess();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.3 },
      colors: ["#00f2fe", "#7000ff", "#00f5d4"],
    });
    window.print();
  };

  const plainResumeText = `
HEMANTH RAJU KORADA
AI / Machine Learning Engineer | Full Stack Developer
Visakhapatnam, Andhra Pradesh, India | +91-8019312187 | hemanthrajukorada@gmail.com

CAREER OBJECTIVE:
AI and Machine Learning undergraduate with hands-on experience in machine learning, Python, SQL, data analysis, and full-stack web development. Skilled in building predictive models, data preprocessing, feature engineering, and responsive web applications through internships at Pantech Solutions and Charvy Solutions.

EDUCATION:
• Anil Neerukonda Institute of Technology and Sciences (ANITS) [2023 - Present]
  B.Tech, Computer Science and Engineering (AI & ML) — CGPA: 7.54 / 10
• Narayana Junior College [2021 - 2023]
  Class XII, MPC
• Kotak Salesian School [2020 - 2021]
  Class X, ICSE

TECHNICAL SKILLS:
• Languages: Python, Java, C, SQL
• Machine Learning: Scikit-learn, Pandas, NumPy, TensorFlow (Basic), Classification, Feature Engineering, Model Evaluation
• Web Development: HTML5, CSS3, JavaScript, React, REST APIs
• Database: MySQL
• Tools & Platforms: Git, GitHub, VS Code

INTERNSHIP EXPERIENCE:
• AI-Driven Software Development Intern, Pantech Solutions
  - Worked on AI-driven software development concepts, contributing to model design and implementation.
  - Assisted in model development, testing, and technical documentation.
• Full Stack Web Developer Intern, Charvy Solutions
  - Developed responsive web interfaces using HTML, CSS, and JavaScript.
  - Assisted in debugging, API integration, and feature implementation.
  - Collaborated with team members using Git for version control.

PROJECTS:
• Machine Failure Prediction Model
  - Developed predictive maintenance model using Python, Pandas, NumPy, and Scikit-learn.
  - Implemented Logistic Regression & Decision Trees achieving 96% accuracy with F1-Score evaluation.
• Personal Portfolio Website
  - Developed and deployed an interactive personal portfolio showcasing projects, skills, and certifications.

CERTIFICATIONS:
• AWS Cloud and AI Practitioner (in progress)
• AWS Fundamentals of Machine Learning
• Cisco Network Defence
• Cisco Network Addressing and Basic Troubleshooting
• BE10X AI Tools & ChatGPT Workshop
• Participant, Prompt Engineering Showdown
  `.trim();

  const markdownResume = `
# HEMANTH RAJU KORADA
**AI / Machine Learning Engineer | Full Stack Developer**  
📍 Visakhapatnam, Andhra Pradesh, India | 📞 +91-8019312187 | ✉️ hemanthrajukorada@gmail.com

---

## 🎯 CAREER OBJECTIVE
AI and Machine Learning undergraduate with hands-on experience in machine learning, Python, SQL, data analysis, and full-stack web development. Skilled in building predictive models, data preprocessing, feature engineering, and responsive web applications through internships at Pantech Solutions and Charvy Solutions. Seeking roles as Software Engineer, AI/ML Engineer, Data Science Intern, or Full Stack Developer.

---

## 🎓 EDUCATION
- **Anil Neerukonda Institute of Technology and Sciences (ANITS)** (2023 - Present)  
  *B.Tech, Computer Science and Engineering (AI & ML)* — **CGPA: 7.54 / 10**
- **Narayana Junior College** (2021 - 2023)  
  *Class XII, MPC (Mathematics, Physics, Chemistry)*
- **Kotak Salesian School** (2020 - 2021)  
  *Class X, ICSE Curriculum*

---

## 🛠️ TECHNICAL SKILLS
- **Languages:** Python, Java, C, SQL
- **Machine Learning:** Scikit-learn, Pandas, NumPy, TensorFlow (Basic), Classification Algorithms, Feature Engineering, Model Evaluation
- **Web Development:** HTML5, CSS3, JavaScript, React.js, REST APIs
- **Database Systems:** MySQL
- **Developer Tools:** Git, GitHub, VS Code

---

## 💼 INTERNSHIP EXPERIENCE
### **AI-Driven Software Development Intern** | Pantech Solutions
- Contributed to AI model design, architecture, testing, and technical documentation.
- Assisted senior engineers in model validation and dataset preparation.

### **Full Stack Web Developer Intern** | Charvy Solutions
- Developed responsive web applications using HTML, CSS, JavaScript, and REST APIs.
- Collaborated in team Git workflows for version control and issue tracking.

---

## 🚀 PROJECTS
- **Machine Failure Prediction Model:** Engineered predictive maintenance classifier achieving **96% accuracy** with Logistic Regression & Decision Trees.
- **Personal Portfolio Platform:** Deployed futuristic animated portfolio showcasing engineering projects and certifications.

---

## 📜 CERTIFICATIONS
- AWS Cloud and AI Practitioner (*In Progress*)
- AWS Fundamentals of Machine Learning
- Cisco Network Defence
- Cisco Network Addressing & Troubleshooting
- BE10X AI Tools & ChatGPT Workshop
- Participant, Prompt Engineering Showdown
  `.trim();

  const handleCopyText = (type: "text" | "md") => {
    soundFx.playClick();
    const content = type === "text" ? plainResumeText : markdownResume;
    navigator.clipboard.writeText(content);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(5, 8, 17, 0.88)",
        backdropFilter: "blur(20px)",
        zIndex: 3000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: "850px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "2.5rem",
          position: "relative",
          border: "1px solid #00f2fe",
          boxShadow: "0 0 50px rgba(0, 242, 254, 0.4)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                background: "rgba(0, 245, 212, 0.15)",
                border: "1px solid #00f5d4",
                color: "#00f5d4",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "0.82rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <ShieldCheck size={16} /> ATS SCORE: 98/100 (HIGH MATCH)
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <button
              onClick={() => handleCopyText("text")}
              className="btn-cyber-outline"
              style={{ padding: "8px 12px", fontSize: "0.8rem" }}
            >
              {copiedType === "text" ? <Check size={14} color="#00f5d4" /> : <Copy size={14} />}
              {copiedType === "text" ? "Copied Plain!" : "Copy Text"}
            </button>

            <button
              onClick={() => handleCopyText("md")}
              className="btn-cyber-outline"
              style={{ padding: "8px 12px", fontSize: "0.8rem" }}
            >
              {copiedType === "md" ? <Check size={14} color="#00f5d4" /> : <FileText size={14} />}
              {copiedType === "md" ? "Copied Markdown!" : "Copy Markdown"}
            </button>

            <button
              onClick={handleDownloadPDF}
              className="btn-cyber-primary"
              style={{ padding: "8px 16px", fontSize: "0.8rem" }}
            >
              <Download size={15} /> Print / Save PDF
            </button>

            <button
              onClick={onClose}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                padding: "8px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable ATS Resume Document Frame */}
        <div
          id="printable-ats-resume"
          style={{
            background: "#ffffff",
            color: "#0f172a",
            padding: "2.5rem",
            borderRadius: "12px",
            fontFamily: "var(--font-sans)",
            fontSize: "0.92rem",
            lineHeight: 1.6,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", borderBottom: "2px solid #0f172a", paddingBottom: "1rem", marginBottom: "1.25rem" }}>
            <h1 style={{ fontSize: "1.8rem", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.5px" }}>
              HEMANTH RAJU KORADA
            </h1>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: "#2563eb", margin: "4px 0" }}>
              AI / Machine Learning Engineer | Full Stack Developer
            </div>
            <div style={{ fontSize: "0.85rem", color: "#475569" }}>
              Visakhapatnam, Andhra Pradesh, India | +91-8019312187 | hemanthrajukorada@gmail.com
            </div>
          </div>

          {/* Objective */}
          <div style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", borderBottom: "1px solid #cbd5e1", paddingBottom: "3px", marginBottom: "6px" }}>
              CAREER OBJECTIVE
            </h2>
            <p style={{ fontSize: "0.88rem", color: "#334155" }}>
              AI and Machine Learning undergraduate with hands-on experience in machine learning, Python, SQL, data analysis, and full-stack web development. Skilled in building predictive models, data preprocessing, feature engineering, and responsive web applications through internships at Pantech Solutions and Charvy Solutions. Seeking to apply strong problem-solving and engineering fundamentals as a Software Engineer, AI/ML Engineer, Data Science Intern, or Full Stack Developer.
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", borderBottom: "1px solid #cbd5e1", paddingBottom: "3px", marginBottom: "6px" }}>
              EDUCATION
            </h2>
            <div style={{ marginBottom: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
                <span>Anil Neerukonda Institute of Technology and Sciences (ANITS)</span>
                <span>2023 - Present</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "#475569" }}>
                B.Tech, Computer Science and Engineering (AI & ML) — <strong>CGPA: 7.54 / 10</strong>
              </div>
            </div>
            <div style={{ marginBottom: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
                <span>Narayana Junior College</span>
                <span>2021 - 2023</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "#475569" }}>Class XII, MPC</div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
                <span>Kotak Salesian School</span>
                <span>2020 - 2021</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "#475569" }}>Class X, ICSE</div>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", borderBottom: "1px solid #cbd5e1", paddingBottom: "3px", marginBottom: "6px" }}>
              TECHNICAL SKILLS
            </h2>
            <div style={{ fontSize: "0.88rem", color: "#334155" }}>
              • <strong>Languages:</strong> Python, Java, C, SQL
              <br />
              • <strong>Machine Learning:</strong> Scikit-learn, Pandas, NumPy, TensorFlow (Basic), Classification, Feature Engineering, Model Evaluation
              <br />
              • <strong>Web Development:</strong> HTML5, CSS3, JavaScript, React, REST APIs
              <br />
              • <strong>Database:</strong> MySQL | <strong>Tools:</strong> Git, GitHub, VS Code
            </div>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", borderBottom: "1px solid #cbd5e1", paddingBottom: "3px", marginBottom: "6px" }}>
              INTERNSHIP EXPERIENCE
            </h2>
            <div style={{ marginBottom: "8px" }}>
              <div style={{ fontWeight: 700 }}>AI-Driven Software Development Intern — Pantech Solutions</div>
              <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#334155" }}>
                <li>Worked on AI-driven software development concepts, contributing to model design and implementation.</li>
                <li>Assisted in model development, testing, and technical documentation.</li>
              </ul>
            </div>
            <div>
              <div style={{ fontWeight: 700 }}>Full Stack Web Developer Intern — Charvy Solutions</div>
              <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#334155" }}>
                <li>Developed responsive web interfaces using HTML, CSS, and JavaScript.</li>
                <li>Assisted in debugging, REST API integration, and feature implementation using Git version control.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", borderBottom: "1px solid #cbd5e1", paddingBottom: "3px", marginBottom: "6px" }}>
              PROJECTS
            </h2>
            <div style={{ marginBottom: "6px" }}>
              <div style={{ fontWeight: 700 }}>Machine Failure Prediction Model</div>
              <div style={{ fontSize: "0.85rem", color: "#334155" }}>
                Predictive maintenance model built with Python, Pandas, NumPy, & Scikit-learn using Logistic Regression & Decision Trees, achieving 96% classification accuracy.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700 }}>Personal Portfolio Website</div>
              <div style={{ fontSize: "0.85rem", color: "#334155" }}>
                Developed and deployed personal portfolio showcasing engineering projects, skills, education, and certifications.
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", borderBottom: "1px solid #cbd5e1", paddingBottom: "3px", marginBottom: "6px" }}>
              CERTIFICATIONS & HONORS
            </h2>
            <div style={{ fontSize: "0.85rem", color: "#334155" }}>
              • AWS Cloud & AI Practitioner (in progress) | AWS Fundamentals of Machine Learning
              <br />
              • Cisco Network Defence | Cisco Network Addressing & Troubleshooting
              <br />
              • BE10X AI Tools & ChatGPT Workshop | Participant, Prompt Engineering Showdown
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          #printable-ats-resume, #printable-ats-resume * { visibility: visible; }
          #printable-ats-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};
