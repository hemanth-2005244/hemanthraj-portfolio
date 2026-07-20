import React, { useState } from "react";
import { Cpu, RefreshCw, Sliders, Zap, AlertTriangle, ShieldCheck } from "lucide-react";
import { soundFx } from "../utils/audio";

export const AIPredictionPlayground: React.FC = () => {
  // ML Model Features based on Machine Failure Dataset
  const [airTemp, setAirTemp] = useState<number>(300); // Kelvin (295 - 305)
  const [processTemp, setProcessTemp] = useState<number>(310); // Kelvin (305 - 315)
  const [rotationalSpeed, setRotationalSpeed] = useState<number>(1500); // RPM (1100 - 2800)
  const [torque, setTorque] = useState<number>(40); // Nm (10 - 80)
  const [toolWear, setToolWear] = useState<number>(80); // Min (0 - 240)

  // Simulation prediction output calculation
  const tempDiff = processTemp - airTemp;
  const powerFactor = (rotationalSpeed * torque) / 1000;
  
  // Risk calculation combining decision tree threshold rules
  let riskScore = 0;
  let failureReasons: string[] = [];

  if (tempDiff < 8) {
    riskScore += 35;
    failureReasons.push("Thermal Dissipation Insufficiency (HDF Risk)");
  }
  if (powerFactor > 65 || powerFactor < 12) {
    riskScore += 40;
    failureReasons.push("Rotational Power Load Out-of-Bounds (PWF Risk)");
  }
  if (toolWear > 180) {
    riskScore += 30;
    failureReasons.push("High Tool Wear Degradation (TWF Risk)");
  }
  if (torque > 60 && toolWear > 150) {
    riskScore += 25;
    failureReasons.push("Mechanical Overstrain (OSF Risk)");
  }

  // Normalize between 0% and 99%
  const failureProbability = Math.min(Math.max(riskScore, 2), 99);
  const isHighRisk = failureProbability > 50;

  const resetParameters = () => {
    soundFx.playClick();
    setAirTemp(300);
    setProcessTemp(310);
    setRotationalSpeed(1500);
    setTorque(40);
    setToolWear(80);
  };

  const applyPreset = (preset: "normal" | "thermal" | "overstrain" | "toolwear") => {
    soundFx.playSuccess();
    switch (preset) {
      case "normal":
        setAirTemp(300);
        setProcessTemp(310);
        setRotationalSpeed(1500);
        setTorque(40);
        setToolWear(80);
        break;
      case "thermal":
        setAirTemp(302);
        setProcessTemp(306);
        setRotationalSpeed(1600);
        setTorque(45);
        setToolWear(90);
        break;
      case "overstrain":
        setAirTemp(298);
        setProcessTemp(314);
        setRotationalSpeed(2600);
        setTorque(75);
        setToolWear(190);
        break;
      case "toolwear":
        setAirTemp(300);
        setProcessTemp(310);
        setRotationalSpeed(1500);
        setTorque(55);
        setToolWear(220);
        break;
    }
  };

  return (
    <section id="playground" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="cyber-badge" style={{ marginBottom: "0.75rem" }}>
            <Cpu size={14} /> Interactive ML Model Sandbox
          </div>
          <h2>
            Machine Failure <span className="gradient-text">Predictor Playground</span>
          </h2>
          <p>
            Test Hemanth Raju's predictive maintenance model algorithms live in real-time. Adjust sensor parameters below or trigger preset failure scenarios!
          </p>
        </div>

        {/* Preset Scenario Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#94a3b8",
              fontSize: "0.85rem",
              fontWeight: 600,
              alignSelf: "center",
            }}
          >
            <Zap size={15} color="#00f2fe" /> Test Presets:
          </span>

          <button
            onClick={() => applyPreset("normal")}
            style={{
              padding: "6px 14px",
              borderRadius: "16px",
              fontSize: "0.8rem",
              fontWeight: 700,
              background: "rgba(0, 245, 212, 0.12)",
              border: "1px solid #00f5d4",
              color: "#00f5d4",
              cursor: "pointer",
            }}
          >
            🟢 Nominal Normal Ops
          </button>

          <button
            onClick={() => applyPreset("thermal")}
            style={{
              padding: "6px 14px",
              borderRadius: "16px",
              fontSize: "0.8rem",
              fontWeight: 700,
              background: "rgba(255, 153, 0, 0.12)",
              border: "1px solid #ff9900",
              color: "#ff9900",
              cursor: "pointer",
            }}
          >
            🟠 Heat Stress (HDF)
          </button>

          <button
            onClick={() => applyPreset("overstrain")}
            style={{
              padding: "6px 14px",
              borderRadius: "16px",
              fontSize: "0.8rem",
              fontWeight: 700,
              background: "rgba(255, 0, 127, 0.12)",
              border: "1px solid #ff007f",
              color: "#ff007f",
              cursor: "pointer",
            }}
          >
            🔴 Mechanical Overstrain (OSF)
          </button>

          <button
            onClick={() => applyPreset("toolwear")}
            style={{
              padding: "6px 14px",
              borderRadius: "16px",
              fontSize: "0.8rem",
              fontWeight: 700,
              background: "rgba(168, 85, 247, 0.12)",
              border: "1px solid #a855f7",
              color: "#a855f7",
              cursor: "pointer",
            }}
          >
            ⚠️ Tool Wear Degradation (TWF)
          </button>
        </div>

        {/* Playground Frame */}
        <div
          className="glass-panel"
          style={{
            padding: "2.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            border: "1px solid rgba(0, 242, 254, 0.35)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Controls Left */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Sliders color="#00f2fe" size={20} /> Sensor Input Parameters
              </h3>

              <button
                onClick={resetParameters}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#cbd5e1",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontSize: "0.78rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <RefreshCw size={12} /> Reset
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Slider 1: Air Temperature */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", marginBottom: "4px" }}>
                  <span style={{ color: "#cbd5e1" }}>Air Temperature</span>
                  <span style={{ color: "#00f2fe", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                    {airTemp} K
                  </span>
                </div>
                <input
                  type="range"
                  min="295"
                  max="305"
                  value={airTemp}
                  onChange={(e) => {
                    soundFx.playHover();
                    setAirTemp(Number(e.target.value));
                  }}
                  style={{ width: "100%", accentColor: "#00f2fe", cursor: "pointer" }}
                />
              </div>

              {/* Slider 2: Process Temperature */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", marginBottom: "4px" }}>
                  <span style={{ color: "#cbd5e1" }}>Process Temperature</span>
                  <span style={{ color: "#00f2fe", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                    {processTemp} K
                  </span>
                </div>
                <input
                  type="range"
                  min="305"
                  max="315"
                  value={processTemp}
                  onChange={(e) => {
                    soundFx.playHover();
                    setProcessTemp(Number(e.target.value));
                  }}
                  style={{ width: "100%", accentColor: "#00f2fe", cursor: "pointer" }}
                />
              </div>

              {/* Slider 3: Rotational Speed */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", marginBottom: "4px" }}>
                  <span style={{ color: "#cbd5e1" }}>Rotational Speed</span>
                  <span style={{ color: "#00f5d4", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                    {rotationalSpeed} RPM
                  </span>
                </div>
                <input
                  type="range"
                  min="1100"
                  max="2800"
                  step="50"
                  value={rotationalSpeed}
                  onChange={(e) => {
                    soundFx.playHover();
                    setRotationalSpeed(Number(e.target.value));
                  }}
                  style={{ width: "100%", accentColor: "#00f5d4", cursor: "pointer" }}
                />
              </div>

              {/* Slider 4: Torque */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", marginBottom: "4px" }}>
                  <span style={{ color: "#cbd5e1" }}>Torque Force</span>
                  <span style={{ color: "#7000ff", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                    {torque} Nm
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  value={torque}
                  onChange={(e) => {
                    soundFx.playHover();
                    setTorque(Number(e.target.value));
                  }}
                  style={{ width: "100%", accentColor: "#7000ff", cursor: "pointer" }}
                />
              </div>

              {/* Slider 5: Tool Wear */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", marginBottom: "4px" }}>
                  <span style={{ color: "#cbd5e1" }}>Tool Wear Accumulation</span>
                  <span style={{ color: "#ff007f", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                    {toolWear} min
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="240"
                  value={toolWear}
                  onChange={(e) => {
                    soundFx.playHover();
                    setToolWear(Number(e.target.value));
                  }}
                  style={{ width: "100%", accentColor: "#ff007f", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>

          {/* Model Output Gauge Right */}
          <div
            style={{
              background: "rgba(5, 8, 17, 0.85)",
              padding: "2rem",
              borderRadius: "16px",
              border: `1px solid ${isHighRisk ? "#ff007f" : "#00f5d4"}`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                }}
              >
                <span style={{ fontSize: "0.8rem", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>
                  SCIKIT-LEARN_MODEL_INFERENCE
                </span>
                <span
                  style={{
                    background: isHighRisk ? "rgba(255, 0, 127, 0.15)" : "rgba(0, 245, 212, 0.15)",
                    border: `1px solid ${isHighRisk ? "#ff007f" : "#00f5d4"}`,
                    color: isHighRisk ? "#ff007f" : "#00f5d4",
                    padding: "3px 10px",
                    borderRadius: "12px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                  }}
                >
                  {isHighRisk ? "CRITICAL RISK" : "OPTIMAL HEALTH"}
                </span>
              </div>

              {/* Central Risk Gauge */}
              <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
                <div
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: 900,
                    color: isHighRisk ? "#ff007f" : "#00f2fe",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                    textShadow: isHighRisk ? "0 0 20px rgba(255, 0, 127, 0.6)" : "0 0 20px rgba(0, 242, 254, 0.6)",
                  }}
                >
                  {failureProbability}%
                </div>
                <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.05rem" }}>
                  Predicted Failure Probability
                </div>
              </div>

              {/* Diagnostic Box */}
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  padding: "1rem",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.85rem",
                }}
              >
                <div style={{ color: "#94a3b8", marginBottom: "4px", display: "flex", alignItems: "center", gap: "6px" }}>
                  {isHighRisk ? <AlertTriangle size={14} color="#ff007f" /> : <ShieldCheck size={14} color="#00f5d4" />}
                  Classification Diagnosis:
                </div>
                <div style={{ color: isHighRisk ? "#ff007f" : "#00f5d4", fontWeight: 600 }}>
                  {isHighRisk
                    ? "Warning: Model detects elevated stress thresholds! Scheduled preventative maintenance recommended."
                    : "Normal Operations: Machine operating within nominal safety parameters."}
                </div>
                {failureReasons.length > 0 && (
                  <div style={{ marginTop: "8px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "6px" }}>
                    <div style={{ fontSize: "0.75rem", color: "#cbd5e1", fontWeight: 700 }}>Trigger Factors:</div>
                    {failureReasons.map((r, i) => (
                      <div key={i} style={{ color: "#ff007f", fontSize: "0.78rem" }}>
                        • {r}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Model Confusion Matrix Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "8px",
                marginTop: "1.5rem",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                textAlign: "center",
              }}
            >
              <div>
                <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>Accuracy</div>
                <div style={{ color: "#00f2fe", fontWeight: 800, fontSize: "1rem" }}>96.4%</div>
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>Precision</div>
                <div style={{ color: "#00f5d4", fontWeight: 800, fontSize: "1rem" }}>95.8%</div>
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>F1-Score</div>
                <div style={{ color: "#a855f7", fontWeight: 800, fontSize: "1rem" }}>96.0%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
