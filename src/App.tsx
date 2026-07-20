import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { BackgroundCanvas } from "./components/BackgroundCanvas";
import type { BgMode } from "./components/BackgroundCanvas";
import { AgentCreaturesCanvas } from "./components/AgentCreaturesCanvas";
import { AgentTelemetryHUD } from "./components/AgentTelemetryHUD";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { SkillsMatrix } from "./components/SkillsMatrix";
import { AIPredictionPlayground } from "./components/AIPredictionPlayground";
import { RoboAgentGallery } from "./components/RoboAgentGallery";
import { AgentArchitectureMap } from "./components/AgentArchitectureMap";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { TerminalWidget } from "./components/TerminalWidget";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { CertificationsBadges } from "./components/CertificationsBadges";
import { ContactSection } from "./components/ContactSection";
import { AIAgentAssistantWidget } from "./components/AIAgentAssistantWidget";
import { ATSResumeModal } from "./components/ATSResumeModal";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [bgMode, setBgMode] = useState<BgMode>("matrix");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "playground",
      "robo-gallery",
      "architecture",
      "projects",
      "terminal",
      "experience",
      "certifications",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Real-time Agent Telemetry HUD Header Bar */}
      <AgentTelemetryHUD />

      {/* Dynamic Background Canvas */}
      <BackgroundCanvas mode={bgMode} />

      {/* Autonomous AI Agent Creatures Layer */}
      <AgentCreaturesCanvas />

      {/* Glass Navigation Header */}
      <Navbar
        activeSection={activeSection}
        bgMode={bgMode}
        setBgMode={setBgMode}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
          <AboutSection />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
          <SkillsMatrix />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
          <AIPredictionPlayground />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
          <RoboAgentGallery />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
          <AgentArchitectureMap />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
          <ProjectsGrid />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
          <TerminalWidget />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
          <ExperienceTimeline />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
          <CertificationsBadges />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
          <ContactSection />
        </motion.div>
      </main>

      {/* Floating Conversational AI Agent Widget */}
      <AIAgentAssistantWidget />

      {/* ATS Resume & PDF Print Viewer Modal */}
      <ATSResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
