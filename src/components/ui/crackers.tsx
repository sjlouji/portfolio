"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

const COLORS = ["#d9a7b3", "#e7b8c2", "#f0d9c0", "#c2536b", "#e6c9d6", "#d9b88f", "#ffffff"];

interface CrackersProps {
  /** how long (ms) to keep blasting bursts before stopping */
  duration?: number;
  /** ms between bursts during the blast */
  cadence?: number;
}

export function Crackers({ duration = 10000, cadence = 380 }: CrackersProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const burst = (x: number, y: number) => {
      const count = 55 + Math.floor(Math.random() * 35);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.35;
        const speed = 2 + Math.random() * 4.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 55 + Math.random() * 45,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          size: 1.8 + Math.random() * 2.6,
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles = particles.filter((p) => p.life < p.maxLife);
      for (const p of particles) {
        p.life++;
        p.vy += 0.06; // gravity
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        ctx.globalAlpha = Math.max(0, 1 - p.life / p.maxLife);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = particles.length ? requestAnimationFrame(tick) : 0;
    };

    const fire = (n = 1) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      for (let k = 0; k < n; k++) {
        setTimeout(() => {
          burst(w * (0.2 + Math.random() * 0.6), h * (0.18 + Math.random() * 0.4));
          if (!raf) raf = requestAnimationFrame(tick);
        }, k * 350);
      }
    };

    // Opening volley, then keep blasting continuously for `duration`
    fire(3);
    const blastId = window.setInterval(() => fire(1), cadence);
    const stopId = window.setTimeout(() => clearInterval(blastId), duration);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(blastId);
      clearTimeout(stopId);
      window.removeEventListener("resize", resize);
    };
  }, [duration, cadence]);

  return <canvas ref={canvasRef} className="crackers-canvas" aria-hidden="true" />;
}
