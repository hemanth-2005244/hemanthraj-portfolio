import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0, 242, 254, 0.15)",
        background: "rgba(5, 8, 17, 0.95)",
        padding: "2.5rem 0",
        position: "relative",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "4px",
            }}
          >
            HEMANTH RAJU <span style={{ color: "#00f2fe" }}>KORADA</span>
          </div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            AI & Machine Learning Engineer | ANITS CSE (AI & ML)
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} Korada Hemanth Raju. All Rights Reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="btn-cyber-outline"
            style={{
              padding: "10px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title="Back to Top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};
