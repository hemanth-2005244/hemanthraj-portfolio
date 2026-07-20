import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { soundFx } from "../utils/audio";
import { Bot, Scan, Sparkles } from "lucide-react";

export const RoboAgentGallery: React.FC = () => {
  const [scanningId, setScanningId] = useState<string | null>(null);
  const [activeAnalysis, setActiveAnalysis] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scanBeamRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Canvas Refs for 100% Procedural Animated Visual Models (No Static Images!)
  const canvasRef1 = useRef<HTMLCanvasElement | null>(null);
  const canvasRef2 = useRef<HTMLCanvasElement | null>(null);
  const canvasRef3 = useRef<HTMLCanvasElement | null>(null);

  // Procedural Canvas 1: Gen AI Agentic Swarm Network
  useEffect(() => {
    const canvas = canvasRef1.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const w = (canvas.width = 380);
    const h = (canvas.height = 240);
    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.025;

      // Dark Tech Grid Background
      ctx.strokeStyle = "rgba(0, 242, 254, 0.08)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += 30) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // Dynamic Node Swarm
      const nodes = [
        { x: 70, y: 120 + Math.sin(t) * 20, name: "ORCHESTRATOR", color: "#00f2fe" },
        { x: 190, y: 60 + Math.cos(t * 1.2) * 15, name: "RAG DB", color: "#a855f7" },
        { x: 190, y: 180 + Math.sin(t * 1.5) * 15, name: "TOOL CALL", color: "#00f5d4" },
        { x: 310, y: 120 + Math.cos(t) * 20, name: "SYNTHESIS", color: "#ff007f" },
      ];

      // Draw Connection Beams
      nodes.forEach((n1, i) => {
        nodes.forEach((n2, j) => {
          if (i < j) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = n1.color;
            ctx.globalAlpha = 0.3;
            ctx.setLineDash([4, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.globalAlpha = 1;
          }
        });
      });

      // Draw Nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 14, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(7, 10, 18, 0.9)";
        ctx.strokeStyle = n.color;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 12;
        ctx.shadowColor = n.color;
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 8px monospace";
        ctx.textAlign = "center";
        ctx.fillText(n.name, n.x, n.y + 3);
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  // Procedural Canvas 2: RAG Vector Database & Cosine Similarity Matrix
  useEffect(() => {
    const canvas = canvasRef2.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const w = (canvas.width = 380);
    const h = (canvas.height = 240);
    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.03;

      // Dark Background
      ctx.fillStyle = "rgba(5, 8, 17, 0.95)";
      ctx.fillRect(0, 0, w, h);

      // Radar Concentric Circles
      ctx.save();
      ctx.translate(w / 2, h / 2);
      for (let r = 30; r <= 100; r += 35) {
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(168, 85, 247, 0.25)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Sweeping Scanning Radar Line
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(t) * 110, Math.sin(t) * 110);
      ctx.strokeStyle = "#a855f7";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Vector Embedding Points
      for (let i = 0; i < 16; i++) {
        const angle = i * 0.4 + t * 0.2;
        const radius = (i * 7 + 20) % 95;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = radius < 60 ? "#00f5d4" : "#ff007f";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#00f5d4";
        ctx.fill();
      }

      ctx.restore();

      ctx.fillStyle = "#a855f7";
      ctx.font = "bold 9px monospace";
      ctx.textAlign = "center";
      ctx.fillText("CHROMADB VECTOR SPACE // COSINE SIMILARITY: 0.948", w / 2, h - 15);

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  // Procedural Canvas 3: Machine Failure Predictive Model Classifier
  useEffect(() => {
    const canvas = canvasRef3.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const w = (canvas.width = 380);
    const h = (canvas.height = 240);
    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.02;

      ctx.fillStyle = "rgba(5, 8, 17, 0.95)";
      ctx.fillRect(0, 0, w, h);

      // Decision Tree Nodes Hierarchy
      const root = { x: w / 2, y: 35 };
      const level2 = [
        { x: w / 2 - 80, y: 100 },
        { x: w / 2 + 80, y: 100 },
      ];
      const level3 = [
        { x: w / 2 - 120, y: 170, label: "NORMAL [97.1%]" },
        { x: w / 2 - 40, y: 170, label: "FAILURE [95.8%]" },
        { x: w / 2 + 40, y: 170, label: "NORMAL [96.5%]" },
        { x: w / 2 + 120, y: 170, label: "FAILURE [96.0%]" },
      ];

      // Draw Tree Edges
      ctx.strokeStyle = "rgba(0, 242, 254, 0.4)";
      ctx.lineWidth = 1.5;

      level2.forEach((l2) => {
        ctx.beginPath(); ctx.moveTo(root.x, root.y); ctx.lineTo(l2.x, l2.y); ctx.stroke();
      });

      level3.forEach((l3, idx) => {
        const parent = idx < 2 ? level2[0] : level2[1];
        ctx.beginPath(); ctx.moveTo(parent.x, parent.y); ctx.lineTo(l3.x, l3.y); ctx.stroke();
      });

      // Draw Root & Nodes
      [root, ...level2, ...level3].forEach((node, idx) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8 + Math.sin(t + idx) * 2, 0, Math.PI * 2);
        ctx.fillStyle = idx === 0 ? "#00f2fe" : idx < 3 ? "#00f5d4" : "#ff007f";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00f2fe";
        ctx.fill();
      });

      ctx.fillStyle = "#00f2fe";
      ctx.font = "bold 9px monospace";
      ctx.textAlign = "center";
      ctx.fillText("DECISION TREE MODEL // PREDICTIVE ACCURACY: 96.4%", w / 2, h - 15);

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  const galleryItems = [
    {
      id: "genai-swarm",
      title: "Autonomous Gen AI Swarm Matrix",
      category: "Multi-Agent System & LLM Orchestration",
      canvasRef: canvasRef1,
      accuracy: "ReAct Agent",
      tech: ["LangChain", "OpenAI API", "Multi-Agent Swarms", "Tool Calling", "Async Execution"],
      telemetry: "ORCHESTRATOR_STATE: ACTIVE // DECOMPOSITION: 3 SUB-AGENTS // LATENCY: 14ms // REASONING: OPTIMAL",
      description: "Autonomous agent system performing task decomposition, tool function execution, and multi-step reasoning.",
    },
    {
      id: "rag-vector",
      title: "RAG Vector Database & Embedding Neural Index",
      category: "Vector Search & Retrieval Augmented Generation",
      canvasRef: canvasRef2,
      accuracy: "Cosine Sim 0.95",
      tech: ["ChromaDB", "Text Embeddings", "Dense-Sparse Retrieval", "Context Chunking", "Python"],
      telemetry: "VECTOR_INDEX: CHROMADB // SIMILARITY: COSINE // TOP_K: 4 // DENSE_RECALL: 98.4%",
      description: "High-dimensional vector embedding database performing real-time semantic retrieval over knowledge domain data.",
    },
    {
      id: "ml-model",
      title: "Machine Failure Predictive Maintenance Model",
      category: "Machine Learning & Scikit-Learn",
      canvasRef: canvasRef3,
      accuracy: "96.4% Accuracy",
      tech: ["Python", "Scikit-Learn", "Pandas", "Decision Trees", "Logistic Regression"],
      telemetry: "CONFUSION_MATRIX: [TP: 95.8%, TN: 97.1%] // PRECISION: 0.958, RECALL: 0.962, F1-SCORE: 0.960",
      description: "AI predictive model predicting industrial equipment breakdown before failure occurs.",
    },
  ];

  const handleRoboScan = (id: string) => {
    soundFx.playClick();
    setScanningId(id);
    setActiveAnalysis(id);

    const beam = scanBeamRef.current[id];
    if (beam) {
      gsap.killTweensOf(beam);
      gsap.fromTo(
        beam,
        { top: "-10%", opacity: 1 },
        {
          top: "110%",
          opacity: 1,
          duration: 1.8,
          ease: "power2.inOut",
          onComplete: () => {
            soundFx.playSuccess();
            setScanningId(null);
          },
        }
      );
    }
  };

  const handleNeuralEnhance = (e: React.MouseEvent<HTMLDivElement>) => {
    soundFx.playHover();
    const card = e.currentTarget;
    gsap.to(card, {
      scale: 1.03,
      rotateY: 6,
      rotateX: -4,
      boxShadow: "0 20px 50px rgba(0, 242, 254, 0.4)",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section id="robo-gallery" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container" ref={containerRef}>
        {/* Section Header */}
        <div className="section-header">
          <div className="cyber-badge" style={{ marginBottom: "0.75rem" }}>
            <Bot size={14} /> Procedural Visual Scanner
          </div>
          <h2>
            Robo Agent <span className="gradient-text">Interactive Matrix Scanner</span>
          </h2>
          <p>
            Command autonomous Robo Agents to perform high-resolution laser scans and deep neural analysis on procedural AI models!
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel"
              onMouseEnter={handleNeuralEnhance}
              onMouseLeave={handleMouseLeave}
              style={{
                padding: "1.75rem",
                position: "relative",
                overflow: "hidden",
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Procedural Animated Canvas Frame (100% Dynamic, No Static Images!) */}
              <div
                style={{
                  width: "100%",
                  height: "240px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  position: "relative",
                  marginBottom: "1.5rem",
                  border: "1px solid rgba(0, 242, 254, 0.3)",
                  background: "rgba(5, 8, 17, 0.95)",
                }}
              >
                <canvas
                  ref={item.canvasRef}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />

                {/* Laser Scanning Beam Overlay */}
                <div
                  ref={(el) => {
                    scanBeamRef.current[item.id] = el;
                  }}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: "12px",
                    background: "linear-gradient(180deg, rgba(0, 242, 254, 0.9), rgba(255, 0, 127, 0.9))",
                    boxShadow: "0 0 25px #00f2fe, 0 0 15px #ff007f",
                    opacity: 0,
                    pointerEvents: "none",
                    zIndex: 20,
                  }}
                />

                {/* Scanning Drone Badge */}
                {scanningId === item.id && (
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: "rgba(5, 8, 17, 0.9)",
                      border: "1px solid #00f5d4",
                      color: "#00f5d4",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      zIndex: 30,
                    }}
                  >
                    <Bot size={14} className="animate-spin" /> ROBO AGENT SCANNING...
                  </div>
                )}
              </div>

              {/* Title & Specs */}
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#00f2fe",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "4px",
                }}
              >
                {item.category}
              </div>

              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                  marginBottom: "1.25rem",
                }}
              >
                {item.description}
              </p>

              {/* Robo Agent Action Trigger Buttons */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "1.25rem",
                }}
              >
                <button
                  onClick={() => handleRoboScan(item.id)}
                  className="btn-cyber-primary"
                  style={{
                    padding: "8px 16px",
                    fontSize: "0.82rem",
                    borderRadius: "16px",
                  }}
                >
                  <Scan size={15} /> Robo Laser Scan
                </button>

                <button
                  onClick={() => {
                    soundFx.playSuccess();
                    setActiveAnalysis(activeAnalysis === item.id ? null : item.id);
                  }}
                  className="btn-cyber-outline"
                  style={{
                    padding: "8px 16px",
                    fontSize: "0.82rem",
                    borderRadius: "16px",
                  }}
                >
                  <Sparkles size={15} /> Telemetry Log
                </button>
              </div>

              {/* Revealed AI Telemetry Display */}
              {activeAnalysis === item.id && (
                <div
                  style={{
                    background: "rgba(5, 8, 17, 0.95)",
                    border: "1px solid #00f5d4",
                    borderRadius: "10px",
                    padding: "1rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color: "#00f5d4",
                    lineHeight: 1.6,
                  }}
                >
                  <div style={{ color: "#00f2fe", fontWeight: 700, marginBottom: "4px" }}>
                    // ROBO AGENT DIAGNOSTIC FEED:
                  </div>
                  {item.telemetry}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
