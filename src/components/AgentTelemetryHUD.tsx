import React from "react";
import { Cpu, Activity } from "lucide-react";

export const AgentTelemetryHUD: React.FC = () => {
  return (
    <div
      style={{
        background: "rgba(5, 8, 17, 0.92)",
        borderBottom: "1px solid rgba(0, 242, 254, 0.2)",
        padding: "6px 0",
        fontSize: "0.78rem",
        fontFamily: "var(--font-mono)",
        color: "#cbd5e1",
        position: "relative",
        zIndex: 900,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#00f5d4",
                boxShadow: "0 0 10px #00f5d4",
              }}
            />
            <span style={{ color: "#00f2fe", fontWeight: 700 }}>
              AI_CREATURE_AGENTS: 4 ONLINE
            </span>
          </div>

          <div style={{ display: "none", alignItems: "center", gap: "6px" }} className="hud-metric">
            <Cpu size={12} color="#7000ff" />
            <span>NEURAL ACCURACY: <strong style={{ color: "#00f5d4" }}>96.4%</strong></span>
          </div>

          <div style={{ display: "none", alignItems: "center", gap: "6px" }} className="hud-metric">
            <Activity size={12} color="#00f2fe" />
            <span>LATENCY: <strong style={{ color: "#00f2fe" }}>12ms</strong></span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ color: "#94a3b8" }}>
            TIP: Click floating AI creatures on screen to inspect live telemetry!
          </span>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hud-metric { display: flex !important; }
        }
      `}</style>
    </div>
  );
};
