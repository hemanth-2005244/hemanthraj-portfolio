import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Copy, Check } from "lucide-react";
import { soundFx } from "../utils/audio";

interface ChatMessage {
  sender: "agent" | "user";
  text: string;
}

export const AIAgentAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "agent",
      text: "Hello! I am Hemanth-AI Agent v3.5 🤖. Ask me anything about Hemanth Raju's machine learning models, full stack web projects, ANITS degree, or certifications!",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const quickQuestions = [
    "What is his ML model accuracy?",
    "Tell me about his internships",
    "What are his AWS certifications?",
    "How do I contact Hemanth?",
  ];

  const handleSend = (userQuery: string) => {
    const text = userQuery.trim();
    if (!text || isTyping) return;
    soundFx.playClick();

    const newMessages: ChatMessage[] = [...messages, { sender: "user", text }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    // Simulate Agent Thinking & Response
    setTimeout(() => {
      soundFx.playSuccess();
      const lower = text.toLowerCase();
      let reply = "";

      if (lower.includes("accuracy") || lower.includes("machine failure") || lower.includes("model")) {
        reply = "Hemanth built a Machine Failure Prediction model using Python, Pandas, Scikit-learn, and Decision Trees, achieving 96% classification accuracy! Check the AI Simulator section to test it live.";
      } else if (lower.includes("intern") || lower.includes("experience") || lower.includes("pantech") || lower.includes("charvy")) {
        reply = "Hemanth completed 2 industry internships: 1) AI-Driven Software Development Intern @ Pantech Solutions, and 2) Full Stack Web Developer Intern @ Charvy Solutions!";
      } else if (lower.includes("certif") || lower.includes("aws") || lower.includes("cisco")) {
        reply = "Hemanth holds certifications in AWS Cloud & AI Practitioner (in progress), AWS Machine Learning Fundamentals, Cisco Network Defence, Cisco Troubleshooting, and BE10X Prompt Engineering!";
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone")) {
        reply = "You can contact Hemanth directly at hemanthrajukorada@gmail.com or call +91-8019312187 (Visakhapatnam, AP, India).";
      } else if (lower.includes("degree") || lower.includes("education") || lower.includes("anits") || lower.includes("cgpa")) {
        reply = "Hemanth is pursuing B.Tech in CSE (AI & ML) at ANITS (Anil Neerukonda Institute of Technology and Sciences) with a CGPA of 7.54 / 10.";
      } else {
        reply = "I'm Hemanth's AI Assistant Agent! You can explore his projects, skills, education timeline, and interactive ML simulator on this portfolio site.";
      }

      setMessages((prev) => [...prev, { sender: "agent", text: reply }]);
      setIsTyping(false);
    }, 800);
  };

  const handleCopyMessage = (text: string, idx: number) => {
    soundFx.playClick();
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <>
      {/* Floating Agent Avatar Button */}
      <button
        onClick={() => {
          soundFx.playClick();
          setIsOpen(!isOpen);
        }}
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 1200,
          background: "linear-gradient(135deg, #00f2fe, #7000ff)",
          border: "none",
          padding: "14px 20px",
          borderRadius: "30px",
          color: "#050811",
          fontWeight: 800,
          fontSize: "0.95rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 0 30px rgba(0, 242, 254, 0.6)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#00f5d4",
            boxShadow: "0 0 10px #00f5d4",
            animation: "pulseGlow 2s infinite",
          }}
        />
        <Bot size={22} color="#050811" />
        <span>AI AGENT ASSISTANT</span>
      </button>

      {/* Interactive Chat Window Drawer */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "28px",
            zIndex: 1300,
            maxWidth: "380px",
            width: "calc(100vw - 40px)",
          }}
        >
          <div
            className="glass-panel"
            style={{
              padding: "0",
              overflow: "hidden",
              borderRadius: "20px",
              border: "1px solid #00f2fe",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 242, 254, 0.3)",
            }}
          >
            {/* Header Bar */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(112, 0, 255, 0.2))",
                padding: "1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#00f2fe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#050811",
                  }}
                >
                  <Bot size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.95rem" }}>
                    HEMANTH-AI AGENT
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#00f5d4", fontFamily: "var(--font-mono)" }}>
                    AUTONOMOUS ASSISTANT // ONLINE
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#cbd5e1",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Log Body */}
            <div
              style={{
                background: "rgba(5, 8, 17, 0.95)",
                padding: "1.25rem",
                maxHeight: "340px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: m.sender === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "85%",
                      padding: "10px 14px",
                      borderRadius: "14px",
                      fontSize: "0.88rem",
                      lineHeight: 1.5,
                      background:
                        m.sender === "user"
                          ? "linear-gradient(135deg, #00f2fe, #4facfe)"
                          : "rgba(15, 23, 42, 0.85)",
                      color: m.sender === "user" ? "#050811" : "#cbd5e1",
                      border:
                        m.sender === "agent"
                          ? "1px solid rgba(0, 242, 254, 0.2)"
                          : "none",
                      fontWeight: m.sender === "user" ? 700 : 400,
                      position: "relative",
                    }}
                  >
                    {m.text}
                  </div>

                  {m.sender === "agent" && (
                    <button
                      onClick={() => handleCopyMessage(m.text, idx)}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: copiedIdx === idx ? "#00f5d4" : "#64748b",
                        fontSize: "0.72rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                        marginTop: "3px",
                        padding: "2px 4px",
                      }}
                    >
                      {copiedIdx === idx ? <Check size={12} /> : <Copy size={12} />}
                      {copiedIdx === idx ? "Copied" : "Copy response"}
                    </button>
                  )}
                </div>
              ))}

              {isTyping && (
                <div style={{ display: "flex", gap: "6px", alignItems: "center", padding: "8px 12px", background: "rgba(15, 23, 42, 0.8)", borderRadius: "12px", width: "fit-content" }}>
                  <span style={{ fontSize: "0.8rem", color: "#00f2fe", fontFamily: "var(--font-mono)" }}>Agent is reasoning</span>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00f2fe", animation: "pulseGlow 1s infinite" }} />
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div
              style={{
                background: "rgba(10, 15, 29, 0.9)",
                padding: "8px 12px",
                display: "flex",
                gap: "6px",
                overflowX: "auto",
                borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  style={{
                    whiteSpace: "nowrap",
                    background: "rgba(0, 242, 254, 0.08)",
                    border: "1px solid rgba(0, 242, 254, 0.2)",
                    color: "#00f2fe",
                    fontSize: "0.72rem",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    cursor: "pointer",
                  }}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              style={{
                padding: "10px 12px",
                background: "rgba(7, 10, 18, 0.98)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask AI Agent anything..."
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#ffffff",
                  fontSize: "0.88rem",
                }}
              />
              <button
                type="submit"
                disabled={isTyping}
                style={{
                  background: isTyping ? "#64748b" : "#00f2fe",
                  border: "none",
                  color: "#050811",
                  padding: "8px",
                  borderRadius: "10px",
                  cursor: isTyping ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
