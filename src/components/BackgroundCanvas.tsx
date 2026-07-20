import React, { useEffect, useRef } from "react";

export type BgMode = "neural" | "robo" | "matrix" | "hypermesh";

interface BackgroundCanvasProps {
  mode: BgMode;
}

export const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({ mode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    // MODE 1: NEURAL PARTICLES
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.9;
        this.vy = (Math.random() - 0.5) * 0.9;
        this.radius = Math.random() * 2 + 1.2;
        this.baseAlpha = Math.random() * 0.5 + 0.3;

        const colors = ["#00f2fe", "#4facfe", "#7000ff", "#00f5d4", "#ff007f"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
          const force = (180 - dist) / 180;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 3.5;
          this.y -= Math.sin(angle) * force * 3.5;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.baseAlpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    }

    const particleCount = Math.min(Math.floor((width * height) / 13000), 90);
    const particles: Particle[] = Array.from({ length: particleCount }, () => new Particle());

    // MODE 2: ROBO CREATURE SWARM
    class RoboCreature {
      x: number;
      y: number;
      vx: number;
      vy: number;
      visorColor: string;
      scanAngle: number = 0;

      constructor(color: string) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.visorColor = color;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 60 || this.x > width - 60) this.vx *= -1;
        if (this.y < 60 || this.y > height - 60) this.vy *= -1;

        this.scanAngle += 0.04;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);

        ctx.beginPath();
        ctx.rect(-14, -10, 28, 20);
        ctx.fillStyle = "rgba(7, 10, 18, 0.9)";
        ctx.strokeStyle = "#00f2fe";
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#00f2fe";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(-8, -4, 16, 8);
        ctx.fillStyle = this.visorColor;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.visorColor;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.lineTo(-25, 45);
        ctx.lineTo(25, 45);
        ctx.closePath();
        ctx.fillStyle = "rgba(0, 242, 254, 0.08)";
        ctx.fill();

        ctx.restore();
      }
    }

    const roboSwarm = [
      new RoboCreature("#00f5d4"),
      new RoboCreature("#ff007f"),
      new RoboCreature("#00f2fe"),
      new RoboCreature("#7000ff"),
    ];

    // MODE 3: DIGITAL CODE MATRIX STREAM ("matrix")
    const charArray = "010101λ∑ΨΩαβγ0x9FLLM_AGENT_RAG_VECTOR_PROMPT_ENGINEER_AI".split("");
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -100));

    // MODE 4: HYPER-DIMENSIONAL MESH
    let meshTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mode === "neural") {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 400);
        gradient.addColorStop(0, "rgba(0, 242, 254, 0.08)");
        gradient.addColorStop(0.5, "rgba(112, 0, 255, 0.04)");
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        particles.forEach((p) => {
          p.update();
          p.draw();
        });

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 140) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = "#00f2fe";
              ctx.globalAlpha = (1 - dist / 140) * 0.25;
              ctx.lineWidth = 0.8;
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        }
      } else if (mode === "robo") {
        roboSwarm.forEach((r) => {
          r.update();
          r.draw();
        });
      } else if (mode === "matrix") {
        ctx.fillStyle = "rgba(5, 8, 17, 0.2)";
        ctx.fillRect(0, 0, width, height);

        ctx.font = "bold 13px monospace";

        for (let i = 0; i < drops.length; i++) {
          const char = charArray[Math.floor(Math.random() * charArray.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const isNearMouse = dist < 120;

          if (isNearMouse) {
            ctx.fillStyle = "#ffffff";
            ctx.shadowBlur = 15;
            ctx.shadowColor = "#00f5d4";
          } else {
            ctx.fillStyle = drops[i] % 3 === 0 ? "#00f5d4" : "#00f2fe";
            ctx.shadowBlur = 8;
            ctx.shadowColor = "#00f2fe";
          }

          ctx.fillText(char, x, y);
          ctx.shadowBlur = 0;

          if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      } else if (mode === "hypermesh") {
        meshTime += 0.02;
        const cols = Math.floor(width / 60) + 1;
        const rows = Math.floor(height / 60) + 1;

        ctx.strokeStyle = "rgba(0, 242, 254, 0.12)";
        ctx.lineWidth = 1;

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const x = i * 60;
            const y = j * 60;

            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const offset = Math.sin(meshTime + (i + j) * 0.3) * 8;
            const warpX = dist < 200 ? (dx / dist) * (200 - dist) * 0.25 : 0;
            const warpY = dist < 200 ? (dy / dist) * (200 - dist) * 0.25 : 0;

            const finalX = x - warpX;
            const finalY = y - warpY + offset;

            ctx.beginPath();
            ctx.arc(finalX, finalY, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = dist < 180 ? "#00f5d4" : "#7000ff";
            ctx.fill();

            if (i < cols - 1) {
              const nextX = (i + 1) * 60;
              ctx.beginPath();
              ctx.moveTo(finalX, finalY);
              ctx.lineTo(nextX, y + offset);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};
