import React, { useEffect, useRef, useState } from "react";
import { soundFx } from "../utils/audio";
import { Bot, X, Play } from "lucide-react";

export interface AgentCreature {
  id: string;
  name: string;
  type: "orchestrator" | "rag" | "tool" | "ml" | "guardrail";
  role: string;
  status: string;
  color: string;
  systemInstruction: string;
  tools: string[];
  tokensProcessed: number;
}

export const AgentCreaturesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<AgentCreature | null>(null);
  const [executionLog, setExecutionLog] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const mouse = { x: width / 2, y: height / 2 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Procedural Particle Shockwave Bursts
    interface Shockwave {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      color: string;
      alpha: number;
    }
    const shockwaves: Shockwave[] = [];

    // Autonomous Agent Creatures
    class CreatureNode implements AgentCreature {
      id: string;
      name: string;
      type: "orchestrator" | "rag" | "tool" | "ml" | "guardrail";
      role: string;
      status: string;
      color: string;
      systemInstruction: string;
      tools: string[];
      tokensProcessed: number;

      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      angle: number = 0;
      pulse: number = 0;

      constructor(
        id: string,
        name: string,
        type: "orchestrator" | "rag" | "tool" | "ml" | "guardrail",
        role: string,
        color: string,
        systemInstruction: string,
        tools: string[]
      ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.role = role;
        this.status = "Autonomous Active";
        this.color = color;
        this.systemInstruction = systemInstruction;
        this.tools = tools;
        this.tokensProcessed = Math.floor(Math.random() * 4000) + 1200;

        this.x = Math.random() * (width - 200) + 100;
        this.y = Math.random() * (height - 200) + 100;
        this.vx = (Math.random() - 0.5) * 1.8;
        this.vy = (Math.random() - 0.5) * 1.8;
        this.radius = type === "orchestrator" ? 18 : 14;
      }

      update() {
        if (this.type === "orchestrator") {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          this.vx += dx * 0.0015;
          this.vy += dy * 0.0015;
          this.vx *= 0.94;
          this.vy *= 0.94;
        } else {
          this.vx += (Math.random() - 0.5) * 0.15;
          this.vy += (Math.random() - 0.5) * 0.15;
          this.vx = Math.max(-2, Math.min(2, this.vx));
          this.vy = Math.max(-2, Math.min(2, this.vy));
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 60) { this.x = 60; this.vx *= -1; }
        if (this.x > width - 60) { this.x = width - 60; this.vx *= -1; }
        if (this.y < 80) { this.y = 80; this.vy *= -1; }
        if (this.y > height - 80) { this.y = height - 80; this.vy *= -1; }

        this.angle += 0.03;
        this.pulse = Math.sin(this.angle) * 3;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);

        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.arc(0, 0, this.radius + 8 + this.pulse, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([8, 8]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.rotate(-this.angle * 2);
        ctx.beginPath();
        const sides = 6;
        for (let i = 0; i < sides; i++) {
          const a = (i * Math.PI * 2) / sides;
          const r = this.radius;
          const px = Math.cos(a) * r;
          const py = Math.sin(a) * r;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = "rgba(7, 10, 18, 0.9)";
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 18;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        ctx.restore();

        ctx.fillStyle = this.color;
        ctx.font = "bold 10px monospace";
        ctx.textAlign = "center";
        ctx.fillText(this.name, this.x, this.y - this.radius - 14);
        ctx.fillStyle = "#94a3b8";
        ctx.font = "9px monospace";
        ctx.fillText(`[TAP AGENT]`, this.x, this.y + this.radius + 18);
      }
    }

    const agents: CreatureNode[] = [
      new CreatureNode(
        "agent-orchestrator",
        "AGENT-ALPHA // LLM ORCHESTRATOR",
        "orchestrator",
        "Master Multi-Agent Planner & Task Router",
        "#00f2fe",
        "You are the Lead Agentic Orchestrator. Decompose complex user intents, route requests to tool/RAG agents, and synthesize final responses.",
        ["LangChain", "OpenAI / Gemini API", "Task Decomposition", "ReAct Prompting"]
      ),
      new CreatureNode(
        "agent-rag",
        "AGENT-BETA // VECTOR RAG RETRIEVER",
        "rag",
        "Semantic Search & Memory Context Retriever",
        "#a855f7",
        "Retrieve relevant portfolio context, experience, and projects using ChromaDB vector embeddings and hybrid dense-sparse search.",
        ["ChromaDB", "Cosine Similarity", "Text Embeddings", "Context Chunking"]
      ),
      new CreatureNode(
        "agent-tool",
        "AGENT-GAMMA // TOOL EXECUTOR",
        "tool",
        "Function Calling & API Integration Engine",
        "#00f5d4",
        "Execute dynamic tool calls, calculate metrics, fetch live state, and interface with external web & code endpoints.",
        ["Function Calling", "REST API", "JSON Schema Validation", "Async Execution"]
      ),
      new CreatureNode(
        "agent-ml",
        "AGENT-DELTA // PREDICTIVE ML CLASSIFIER",
        "ml",
        "Scikit-Learn Machine Failure Predictor",
        "#ff007f",
        "Execute predictive maintenance inference pipelines using Decision Trees and Logistic Regression models.",
        ["Python", "Scikit-Learn", "Confusion Matrix", "Feature Engineering"]
      ),
      new CreatureNode(
        "agent-guardrail",
        "AGENT-EPSILON // SAFETY GUARDRAIL",
        "guardrail",
        "Input/Output Safety & Alignment Verifier",
        "#ff9900",
        "Inspect prompt inputs and synthesized agent outputs for alignment, bias mitigation, and data integrity.",
        ["Llama Guard", "Input Filtering", "Hallucination Check", "Output Sanitization"]
      ),
    ];

    const handleCanvasClick = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;

      for (const agent of agents) {
        const dist = Math.sqrt((clickX - agent.x) ** 2 + (clickY - agent.y) ** 2);
        if (dist < agent.radius + 25) {
          soundFx.playSuccess();
          shockwaves.push({
            x: agent.x,
            y: agent.y,
            radius: 5,
            maxRadius: 70,
            color: agent.color,
            alpha: 1,
          });

          setSelectedAgent({
            id: agent.id,
            name: agent.name,
            type: agent.type,
            role: agent.role,
            status: agent.status,
            color: agent.color,
            systemInstruction: agent.systemInstruction,
            tools: agent.tools,
            tokensProcessed: agent.tokensProcessed + 1,
          });
          setExecutionLog(null);
          return;
        }
      }
    };

    window.addEventListener("click", handleCanvasClick);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const s = shockwaves[i];
        s.radius += 2.5;
        s.alpha -= 0.03;
        if (s.alpha <= 0) {
          shockwaves.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.strokeStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      agents.forEach((agent) => {
        agent.update();
        agent.draw();

        if (agent.type !== "orchestrator") {
          const orchestrator = agents[0];
          const dx = orchestrator.x - agent.x;
          const dy = orchestrator.y - agent.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 320) {
            ctx.beginPath();
            ctx.moveTo(orchestrator.x, orchestrator.y);
            ctx.lineTo(agent.x, agent.y);
            ctx.strokeStyle = agent.color;
            ctx.globalAlpha = (1 - dist / 320) * 0.35;
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.globalAlpha = 1;
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleCanvasClick);
    };
  }, []);

  const handleTriggerAction = (actionType: string) => {
    if (!selectedAgent || isExecuting) return;
    soundFx.playClick();
    setIsExecuting(true);
    setExecutionLog(`[${selectedAgent.name}] Initializing ${actionType}...`);

    setTimeout(() => {
      soundFx.playSuccess();
      let logResult = "";
      switch (actionType) {
        case "Run LLM Chain Reasoning":
          logResult = `PROMPT: Decompose task -> SUBTASKS: [RAG Search, Tool Execution] -> REASONING: Step-by-step chain evaluated in 14ms -> SYNTHESIS: Task completed successfully!`;
          break;
        case "Perform Vector RAG Search":
          logResult = `QUERY: "Hemanth Raju ML & Web Experience" -> VECTOR SIMILARITY: 0.948 -> TOP CHUNKS: ANITS B.Tech (AI&ML), Pantech AI Intern, Charvy Full Stack Intern.`;
          break;
        case "Execute Tool Function Call":
          logResult = `TOOL_CALL: calculateModelMetrics() -> ARGS: { dataset: "predictive_maintenance" } -> RESULT: { accuracy: 0.964, f1_score: 0.960 } -> EXECUTION_TIME: 8ms.`;
          break;
        case "Run Safety Guardrail Check":
          logResult = `INPUT_PROMPT: Validated -> TOXICITY: 0.00 -> HALLUCINATION_RISK: LOW -> GUARDRAIL STATUS: VERIFIED & APPROVED.`;
          break;
        default:
          logResult = `Execution finished with status 200 OK.`;
          break;
      }
      setExecutionLog(logResult);
      setIsExecuting(false);
    }, 900);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 15,
          pointerEvents: "none",
        }}
      />

      {selectedAgent && (
        <div
          style={{
            position: "fixed",
            bottom: "28px",
            left: "28px",
            zIndex: 2500,
            maxWidth: "420px",
            width: "calc(100vw - 56px)",
          }}
        >
          <div
            className="glass-panel"
            style={{
              padding: "1.75rem",
              borderRadius: "20px",
              border: `1px solid ${selectedAgent.color}`,
              boxShadow: `0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px ${selectedAgent.color}44`,
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelectedAgent(null)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                padding: "6px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <X size={16} />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: `${selectedAgent.color}22`,
                  border: `1px solid ${selectedAgent.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: selectedAgent.color,
                }}
              >
                <Bot size={22} />
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", color: selectedAgent.color, fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                  AUTONOMOUS AGENT // TELEMETRY
                </div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.2 }}>
                  {selectedAgent.name}
                </div>
              </div>
            </div>

            <p style={{ color: "#cbd5e1", fontSize: "0.88rem", marginBottom: "1rem", lineHeight: 1.5 }}>
              {selectedAgent.role}
            </p>

            <div
              style={{
                background: "rgba(5, 8, 17, 0.85)",
                borderRadius: "10px",
                padding: "10px 14px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "#94a3b8",
                marginBottom: "1rem",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <span style={{ color: selectedAgent.color, fontWeight: 700 }}>SYSTEM_PROMPT: </span>
              "{selectedAgent.systemInstruction}"
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.25rem" }}>
              {selectedAgent.tools.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: `1px solid ${selectedAgent.color}44`,
                    color: "#e2e8f0",
                    fontSize: "0.75rem",
                    padding: "3px 10px",
                    borderRadius: "12px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "8px", marginBottom: "1rem" }}>
              <button
                onClick={() =>
                  handleTriggerAction(
                    selectedAgent.type === "rag"
                      ? "Perform Vector RAG Search"
                      : selectedAgent.type === "tool"
                      ? "Execute Tool Function Call"
                      : selectedAgent.type === "guardrail"
                      ? "Run Safety Guardrail Check"
                      : "Run LLM Chain Reasoning"
                  )
                }
                disabled={isExecuting}
                className="btn-cyber-primary"
                style={{
                  flex: 1,
                  padding: "8px 14px",
                  fontSize: "0.82rem",
                  borderRadius: "12px",
                  justifyContent: "center",
                }}
              >
                <Play size={14} /> {isExecuting ? "Executing..." : "Trigger Agent Action"}
              </button>
            </div>

            {executionLog && (
              <div
                style={{
                  background: "rgba(7, 10, 18, 0.95)",
                  border: `1px solid ${selectedAgent.color}`,
                  padding: "10px 12px",
                  borderRadius: "10px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "#00f5d4",
                  lineHeight: 1.5,
                }}
              >
                <div style={{ color: "#00f2fe", fontWeight: 700, marginBottom: "4px" }}>
                  // AGENT EXECUTION TRACE:
                </div>
                {executionLog}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
