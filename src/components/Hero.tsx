import React, { useState, useEffect, useRef } from "react";
import { Terminal, ArrowRight, GraduationCap, MapPin, Download, Bot, Sparkles, Cpu, Zap, Activity } from "lucide-react";
import gsap from "gsap";
import { soundFx } from "../utils/audio";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const titles = [
    "Gen AI & Agentic Systems Engineer",
    "Predictive Maintenance ML Specialist",
    "Full Stack LLM & Web Developer",
    "Data Science & Analytics Engineer",
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  const hologramCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Typewriter effect
  useEffect(() => {
    const currentFullTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  // Procedural GSAP 3D Cyber Hologram Canvas Animation (No static images!)
  useEffect(() => {
    const canvas = hologramCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const size = (canvas.width = canvas.height = 320);
    const center = size / 2;
    let angle = 0;

    interface EnergyParticle {
      x: number;
      y: number;
      radius: number;
      speed: number;
      angle: number;
      color: string;
    }

    const particles: EnergyParticle[] = Array.from({ length: 45 }, () => ({
      x: center,
      y: center,
      radius: Math.random() * 80 + 20,
      speed: Math.random() * 0.04 + 0.01,
      angle: Math.random() * Math.PI * 2,
      color: Math.random() > 0.5 ? "#00f2fe" : "#7000ff",
    }));

    const render = () => {
      ctx.clearRect(0, 0, size, size);
      angle += 0.02;

      // Outer Rotating Ring
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(angle);

      ctx.beginPath();
      ctx.arc(0, 0, 110, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 242, 254, 0.4)";
      ctx.lineWidth = 2;
      ctx.setLineDash([12, 8]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Inner Counter-Rotating Hex Ring
      ctx.rotate(-angle * 2);
      ctx.beginPath();
      const sides = 6;
      for (let i = 0; i < sides; i++) {
        const a = (i * Math.PI * 2) / sides;
        const px = Math.cos(a) * 85;
        const py = Math.sin(a) * 85;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(112, 0, 255, 0.6)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();

      // Energy Orbiting Particles
      particles.forEach((p) => {
        p.angle += p.speed;
        const px = center + Math.cos(p.angle) * p.radius;
        const py = center + Math.sin(p.angle) * p.radius;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      // Core Glowing Orb
      ctx.beginPath();
      ctx.arc(center, center, 38 + Math.sin(angle * 3) * 4, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(center, center, 0, center, center, 42);
      gradient.addColorStop(0, "#00f5d4");
      gradient.addColorStop(0.5, "#00f2fe");
      gradient.addColorStop(1, "rgba(112, 0, 255, 0.2)");
      ctx.fillStyle = gradient;
      ctx.shadowBlur = 30;
      ctx.shadowColor = "#00f2fe";
      ctx.fill();

      // Center Core Icon Text
      ctx.fillStyle = "#050811";
      ctx.font = "bold 13px monospace";
      ctx.textAlign = "center";
      ctx.fillText("AI AGENT", center, center + 4);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  const handleTapHologram = () => {
    soundFx.playSuccess();
    setPulseCount((prev) => prev + 1);

    const canvas = hologramCanvasRef.current;
    if (canvas) {
      gsap.fromTo(
        canvas,
        { scale: 0.95, filter: "brightness(1.8)" },
        { scale: 1, filter: "brightness(1)", duration: 0.5, ease: "elastic.out(1, 0.3)" }
      );
    }
  };

  const metrics = [
    { label: "Predictive ML Accuracy", value: "96.4%", detail: "Machine Failure Classifier" },
    { label: "ANITS B.Tech CGPA", value: "7.54", detail: "CSE (AI & ML Specialization)" },
    { label: "Industry Internships", value: "02", detail: "Pantech AI & Charvy Full Stack" },
    { label: "Verified Credentials", value: "05+", detail: "AWS Cloud & Cisco Security" },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        paddingTop: "calc(var(--nav-height) + 2.5rem)",
        paddingBottom: "4rem",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Hero Left Content */}
          <div>
            <div
              className="cyber-badge"
              onClick={() => soundFx.playClick()}
              style={{ marginBottom: "1.25rem", gap: "8px", cursor: "pointer" }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#00f2fe",
                  boxShadow: "0 0 10px #00f2fe",
                  animation: "pulseGlow 2s infinite",
                }}
              />
              Available for Gen AI, Agentic AI & Full Stack Roles ✨
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: "1rem",
                letterSpacing: "-1px",
              }}
            >
              Architecting <br />
              <span className="gradient-text">Gen AI & Autonomous Agents</span>
            </h1>

            <div
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
                color: "#cbd5e1",
                fontWeight: 600,
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                minHeight: "40px",
              }}
            >
              <Terminal color="#00f2fe" size={24} />
              <span>{displayText}</span>
              <span
                style={{
                  width: "3px",
                  height: "1.2em",
                  background: "#00f2fe",
                  display: "inline-block",
                  animation: "float 1s infinite",
                }}
              />
            </div>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "540px",
              }}
            >
              Engineering future-ready Artificial Intelligence, Autonomous Agentic Swarms, RAG Knowledge Architectures, and responsive full-stack software applications from ANITS, Visakhapatnam.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "3rem",
              }}
            >
              <button
                onClick={() => {
                  soundFx.playSuccess();
                  onOpenResumeModal();
                }}
                className="btn-cyber-primary"
              >
                <Download size={18} /> View ATS Resume / PDF
              </button>

              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                className="btn-cyber-outline"
              >
                Explore Agentic Projects <ArrowRight size={18} />
              </a>
            </div>

            {/* Quick Location & School */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                fontSize: "0.9rem",
                color: "#94a3b8",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                paddingTop: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <MapPin size={16} color="#00f2fe" />
                <span>Visakhapatnam, Andhra Pradesh, India</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <GraduationCap size={16} color="#7000ff" />
                <span>ANITS CSE (AI & ML)</span>
              </div>
            </div>
          </div>

          {/* Hero Right: 100% Procedural GSAP Hologram Matrix Core (No Static Images!) */}
          <div style={{ position: "relative" }}>
            <div
              className="glass-panel"
              style={{
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(0, 242, 254, 0.4)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 242, 254, 0.2)",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Bot size={20} color="#00f5d4" />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.82rem",
                      color: "#00f2fe",
                      fontWeight: 700,
                    }}
                  >
                    NEURAL AGENT MATRIX // CORE
                  </span>
                </div>
                <span
                  style={{
                    background: "rgba(0, 245, 212, 0.15)",
                    border: "1px solid #00f5d4",
                    color: "#00f5d4",
                    padding: "3px 10px",
                    borderRadius: "12px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  ONLINE 🤖
                </span>
              </div>

              {/* Procedural Holographic Canvas Container */}
              <div
                onClick={handleTapHologram}
                style={{
                  width: "100%",
                  height: "260px",
                  borderRadius: "16px",
                  background: "radial-gradient(circle, rgba(7, 10, 18, 0.95), rgba(5, 8, 17, 0.98))",
                  border: "1px solid rgba(0, 242, 254, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  cursor: "pointer",
                  marginBottom: "1.25rem",
                }}
              >
                <canvas ref={hologramCanvasRef} style={{ width: "260px", height: "260px" }} />

                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    background: "rgba(0, 242, 254, 0.1)",
                    border: "1px solid rgba(0, 242, 254, 0.3)",
                    color: "#00f2fe",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Zap size={13} color="#00f5d4" /> TAP CORE TO INJECT PROMPT ({pulseCount})
                </div>
              </div>

              {/* Developer Object Code Box */}
              <div
                style={{
                  background: "rgba(5, 8, 17, 0.85)",
                  borderRadius: "12px",
                  padding: "1rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <div>
                  <span style={{ color: "#00f2fe" }}>const</span> agenticDeveloper = &#123;
                </div>
                <div style={{ paddingLeft: "1rem" }}>
                  name: <span style={{ color: "#00f5d4" }}>"HEMANTH RAJU KORADA"</span>,
                </div>
                <div style={{ paddingLeft: "1rem" }}>
                  specialization: <span style={{ color: "#00f5d4" }}>"Gen AI & Agentic Systems"</span>,
                </div>
                <div style={{ paddingLeft: "1rem" }}>
                  mlAccuracy: <span style={{ color: "#ff007f" }}>0.964</span>
                </div>
                <div>&#125;;</div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginTop: "4rem",
          }}
        >
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="glass-card"
              onClick={() => soundFx.playHover()}
              style={{
                padding: "1.5rem",
                textAlign: "center",
                border: "1px solid rgba(0, 242, 254, 0.15)",
                cursor: "pointer",
              }}
            >
              <div
                className="gradient-text"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  marginBottom: "0.2rem",
                }}
              >
                {m.label}
              </div>
              <div style={{ color: "#94a3b8", fontSize: "0.8rem" }}>
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
