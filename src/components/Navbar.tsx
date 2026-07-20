import React, { useState, useEffect } from "react";
import { Terminal, Cpu, User, Briefcase, Award, Mail, Menu, X, Sparkles, Volume2, VolumeX, Bot, PlayCircle, Mic, MicOff, Globe, Layers } from "lucide-react";
import confetti from "canvas-confetti";
import { soundFx } from "../utils/audio";
import type { BgMode } from "./BackgroundCanvas";

interface NavbarProps {
  activeSection: string;
  bgMode: BgMode;
  setBgMode: (mode: BgMode) => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, bgMode, setBgMode, onOpenResumeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVoiceOn, setIsVoiceOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    soundFx.isMuted = !isMuted;
    setIsMuted(!isMuted);
    if (isMuted) soundFx.playClick();
  };

  const toggleVoice = () => {
    soundFx.isVoiceEnabled = !isVoiceOn;
    setIsVoiceOn(!isVoiceOn);
    soundFx.playClick();
    if (!isVoiceOn) {
      soundFx.speakData("AI Voice Reader", "Voice synthesis announcements enabled");
    }
  };

  const handleConfettiResume = () => {
    soundFx.playSuccess();
    soundFx.speakData("ATS Resume Viewer", "Opening printable resume document");
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.2 },
      colors: ["#00f2fe", "#7000ff", "#00f5d4"],
    });
    onOpenResumeModal();
  };

  const bgModeOptions: { id: BgMode; label: string; icon: string }[] = [
    { id: "quantum", label: "Quantum Void", icon: "🌌" },
    { id: "neural", label: "Neural Matrix", icon: "🧠" },
    { id: "robo", label: "Cyber Swarm", icon: "🤖" },
    { id: "hypermesh", label: "Hyper Mesh", icon: "⚡" },
  ];

  const navLinks = [
    { id: "home", label: "Home", icon: Sparkles },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills Matrix", icon: Cpu },
    { id: "playground", label: "AI Sandbox", icon: PlayCircle },
    { id: "robo-gallery", label: "Matrix Scanner", icon: Bot },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "terminal", label: "CLI Hub", icon: Terminal },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: "var(--nav-height)",
        display: "flex",
        alignItems: "center",
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(7, 10, 18, 0.94)"
          : "rgba(7, 10, 18, 0.4)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: scrolled
          ? "1px solid rgba(0, 242, 254, 0.2)"
          : "1px solid transparent",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onMouseEnter={() => soundFx.speakData("Hemanth Raju Korada", "Gen AI and Agentic Systems Engineer")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #00f2fe, #7000ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#050811",
              fontWeight: 800,
              fontSize: "1.2rem",
              boxShadow: "0 0 15px rgba(0, 242, 254, 0.5)",
            }}
          >
            HK
          </div>
          <div>
            <span
              style={{
                fontSize: "1.15rem",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                color: "#ffffff",
                display: "block",
                lineHeight: 1.1,
              }}
            >
              HEMANTH <span style={{ color: "#00f2fe" }}>RAJU</span>
            </span>
            <span
              style={{
                fontSize: "0.7rem",
                color: "#94a3b8",
                fontFamily: "var(--font-mono)",
                letterSpacing: "1px",
              }}
            >
              GEN AI & AGENTIC ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "4px",
          }}
          className="desktop-menu"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onMouseEnter={() => soundFx.speakData(link.label)}
                onClick={() => soundFx.playClick()}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                  color: isActive ? "#00f2fe" : "#cbd5e1",
                  background: isActive
                    ? "rgba(0, 242, 254, 0.12)"
                    : "transparent",
                  border: isActive
                    ? "1px solid rgba(0, 242, 254, 0.3)"
                    : "1px solid transparent",
                }}
              >
                <Icon size={13} color={isActive ? "#00f2fe" : "#94a3b8"} />
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Action Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* TTS Voice Announcement Toggle */}
          <button
            onClick={toggleVoice}
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: `1px solid ${isVoiceOn ? "#00f5d4" : "rgba(255,255,255,0.15)"}`,
              color: isVoiceOn ? "#00f5d4" : "#94a3b8",
              padding: "8px",
              borderRadius: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title={isVoiceOn ? "Voice Reader Active (TTS)" : "Voice Reader Off"}
          >
            {isVoiceOn ? <Mic size={18} /> : <MicOff size={18} />}
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={toggleSound}
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(0, 242, 254, 0.3)",
              color: isMuted ? "#94a3b8" : "#00f2fe",
              padding: "8px",
              borderRadius: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title={isMuted ? "Unmute SFX" : "Mute SFX"}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          {/* Dynamic Background Mode Switcher Dropdown */}
          <div style={{ position: "relative" }}>
            <select
              value={bgMode}
              onChange={(e) => {
                const newMode = e.target.value as BgMode;
                soundFx.playClick();
                soundFx.speakData(`Switched background mode to ${newMode}`);
                setBgMode(newMode);
              }}
              style={{
                background: "rgba(15, 23, 42, 0.9)",
                border: "1px solid rgba(112, 0, 255, 0.4)",
                color: "#a855f7",
                padding: "6px 10px",
                borderRadius: "10px",
                fontSize: "0.8rem",
                fontWeight: 700,
                outline: "none",
                cursor: "pointer",
              }}
            >
              {bgModeOptions.map((opt) => (
                <option key={opt.id} value={opt.id} style={{ background: "#050811", color: "#ffffff" }}>
                  {opt.icon} {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Resume Confetti & ATS PDF Modal Action */}
          <button
            onClick={handleConfettiResume}
            className="btn-cyber-primary"
            style={{
              padding: "8px 14px",
              fontSize: "0.82rem",
              borderRadius: "20px",
            }}
          >
            Resume PDF 📄
          </button>

          {/* Mobile Drawer Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(0, 242, 254, 0.3)",
              color: "#00f2fe",
              padding: "8px",
              borderRadius: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="mobile-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "var(--nav-height)",
            left: 0,
            right: 0,
            background: "rgba(7, 10, 18, 0.96)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(0, 242, 254, 0.3)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  soundFx.speakData(link.label);
                  setMobileOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "10px 14px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: isActive ? "#00f2fe" : "#cbd5e1",
                  background: isActive
                    ? "rgba(0, 242, 254, 0.15)"
                    : "rgba(255, 255, 255, 0.03)",
                }}
              >
                <Icon size={18} />
                {link.label}
              </a>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 1080px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};
