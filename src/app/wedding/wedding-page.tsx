"use client";

// Split-screen wedding invitation — Joan Louji & Angelene Vidhya.
// Light/dark theme via a `wd-dark` class on <html>, switched with a
// heart-shaped View Transitions reveal. Fonts via ./layout.tsx.

import { useEffect, useState, type CSSProperties } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { AuroraBackground } from "@/components/ui/aurora-background";

const EVENTS = [
  {
    icon: "ring",
    name: "Engagement",
    when: "11 June · 6:00 PM",
    venue: "Gurusamy Kovil Thirumana Mahal, Keezhapavur",
    mapsUrl: "https://maps.app.goo.gl/oXoqtKZHTcfq8GfN6",
  },
  {
    icon: "church",
    name: "Holy Matrimony",
    when: "12 July · 10:30 – 11:45 AM",
    venue: "St. Antony's Church, Pavoorchatram",
    mapsUrl: "https://maps.app.goo.gl/TRg1nbJ4DpmHxWk96",
  },
  {
    icon: "feast",
    name: "Feast",
    when: "12 July · 12:00 – 2:00 PM",
    venue: "Gurusamy Kovil Thirumana Mahal, Keezhapavur",
    mapsUrl: "https://maps.app.goo.gl/oXoqtKZHTcfq8GfN6",
  },
  {
    icon: "glass",
    name: "Reception",
    when: "12 July · 6:00 – 9:00 PM",
    venue: "SK Thanga Rathinam Thirumana Mahal, Keezhapavur",
    mapsUrl: "https://maps.app.goo.gl/iGvpt9eaYKT3HfiN9",
  },
];

const svg = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICONS: Record<string, React.ReactNode> = {
  ring: (
    <svg viewBox="0 0 48 48" {...svg}>
      <circle cx="24" cy="31" r="11" />
      <path d="M24 9 l-5 6 5 6 5-6 z" />
      <path d="M19 15 h10" />
    </svg>
  ),
  church: (
    <svg viewBox="0 0 48 48" {...svg}>
      <path d="M12 42 V23 L24 14 L36 23 V42" />
      <path d="M12 42 H36" />
      <path d="M24 5 V14 M20 9 H28" />
      <path d="M20 42 V33 a4 4 0 0 1 8 0 V42" />
      <circle cx="17" cy="29" r="1.6" />
      <circle cx="31" cy="29" r="1.6" />
    </svg>
  ),
  feast: (
    <svg viewBox="0 0 48 48" {...svg}>
      <path d="M17 9 v9 a3 3 0 0 1-6 0 v-9 M14 9 v30" />
      <path d="M33 9 c-3 0 -5 3 -5 7 s2 6 5 6 v17 M33 9 v30" />
    </svg>
  ),
  glass: (
    <svg viewBox="0 0 48 48" {...svg}>
      <path d="M16 11 L24 27 L32 11 Z" />
      <path d="M24 27 V38" />
      <path d="M17 38 H31" />
      <path d="M16.5 18 H31.5" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" {...svg}>
      <path d="M12 20s-7-4.4-7-9.3a3.8 3.8 0 0 1 7-2.1 3.8 3.8 0 0 1 7 2.1c0 4.9-7 9.3-7 9.3z" />
    </svg>
  ),
  heartFilled: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-7-4.6-9.3-9C1 8.5 2.7 5.5 6 5.5c1.9 0 3.2 1 4 2.2.8-1.2 2.1-2.2 4-2.2 3.3 0 5 3 3.3 6.5C19 16.4 12 21 12 21z" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" {...svg} strokeWidth={1.6}>
      <path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" {...svg}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" {...svg}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
    </svg>
  ),
};

const fade = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

const css = `
/* theme-aware page chrome */
html, body { background-color: #ffffff !important; color-scheme: light !important; }
html.wd-dark, html.wd-dark body { background-color: #060608 !important; color-scheme: dark !important; }

.page {
  --bg: #ffffff;
  --ink: #1b1b1b;
  --soft: #4a4a4a;
  --muted: #7a7a7a;
  --faint: #a8a8a8;
  --amp: #b0b0b0;
  --line: #d8d8d8;
  --rose: #c2536b;
  --hover-bg: rgba(27, 27, 27, 0.05);
  --hover-shadow: rgba(27, 27, 27, 0.08);

  position: relative;
  z-index: 0;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  color: var(--ink);
  font-family: var(--font-montserrat), system-ui, sans-serif;
}
/* Aurora sits behind everything */
.aurora-bg { position: fixed; inset: 0; z-index: -1; }
html.wd-dark .page {
  --bg: #060608;
  --ink: #f2efe9;
  --soft: #cac4ba;
  --muted: #98928a;
  --faint: #6f6a62;
  --amp: #6a655e;
  --line: #3a3833;
  --rose: #e58fa1;
  --hover-bg: rgba(255, 255, 255, 0.06);
  --hover-shadow: rgba(0, 0, 0, 0.5);
}
.page ::selection { background: var(--ink); color: var(--bg); }

.split { position: relative; display: flex; flex: 1; }

.half {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: clamp(40px, 6vw, 80px);
}
.left { position: relative; }
.right { position: relative; }

.split::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1px;
  height: 150px;
  background: var(--line);
}

/* theme toggle */
.theme-btn {
  position: fixed;
  top: 18px;
  right: 18px;
  z-index: 50;
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--bg);
  color: var(--ink);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.theme-btn:hover { transform: rotate(18deg) scale(1.06); border-color: var(--ink); }
.theme-btn svg { width: 19px; height: 19px; }

/* entrance */
.fade {
  opacity: 0;
  transform: translateY(16px);
  animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes fadeUp { to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) {
  .fade { opacity: 1; transform: none; animation: none; }
}

/* ── LEFT: who & when ── */
.eyebrow { font-family: var(--font-caveat), cursive; font-size: 1.35rem; line-height: 1; color: var(--muted); }
.couple {
  font-family: var(--font-caveat), cursive;
  font-weight: 700;
  font-size: clamp(3.2rem, 8vw, 5.6rem);
  line-height: 1;
  margin: 14px 0 16px;
  color: var(--ink);
}
.couple .amp { font-weight: 400; color: var(--amp); display: block; font-size: 0.5em; margin: 2px 0; }
.invite { font-family: var(--font-caveat), cursive; font-size: 1.45rem; line-height: 1.4; color: var(--soft); max-width: 340px; }
.when { margin-top: 26px; display: flex; align-items: center; gap: 16px; }
.when .d-num { font-family: var(--font-caveat), cursive; font-weight: 700; font-size: clamp(2.6rem, 5vw, 3.4rem); line-height: 1; }
.when .d-side { font-family: var(--font-caveat), cursive; font-size: 1.5rem; line-height: 1; color: var(--ink); }
.when .bar { width: 1px; height: 34px; background: var(--line); }
.year { margin-top: 12px; font-family: var(--font-caveat), cursive; font-size: 1.3rem; letter-spacing: 0.08em; color: var(--muted); }

/* ── RIGHT: wedding timeline ── */
.t-title { font-family: var(--font-caveat), cursive; font-size: clamp(2.2rem, 5vw, 3rem); line-height: 1; color: var(--ink); margin-bottom: 30px; }
.timeline { width: 100%; max-width: 360px; }
.t-row {
  display: grid;
  grid-template-columns: 56px 26px 1fr;
  column-gap: 16px;
  align-items: stretch;
  text-decoration: none;
  color: inherit;
  padding: 6px 12px;
  border-radius: 16px;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.35s ease, box-shadow 0.35s ease;
}
.t-row:hover, .t-row:active, .t-row:focus-visible {
  background-color: var(--hover-bg);
  box-shadow: 0 8px 24px var(--hover-shadow);
  outline: none;
}
.t-icon { display: flex; align-items: center; justify-content: center; }
.t-icon svg { width: 46px; height: 46px; color: var(--ink); transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
.t-row:hover .t-icon svg, .t-row:active .t-icon svg { transform: scale(1.12) rotate(-3deg); }

.t-mid { position: relative; }
.t-mid::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--ink);
  transform: translateX(-50%);
}
.t-row:first-child .t-mid::before { top: 50%; }
.t-row:last-child .t-mid::before { bottom: 50%; }
.t-heart {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--bg);
  padding: 4px 0;
  line-height: 0;
  color: var(--ink);
}
.t-heart svg { width: 13px; height: 13px; display: block; }

.t-text { display: flex; flex-direction: column; justify-content: center; padding: 16px 0; text-align: left; }
.t-when { font-family: var(--font-caveat), cursive; font-size: 1.3rem; line-height: 1.05; color: var(--soft); }
.t-name {
  font-family: var(--font-caveat), cursive;
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 1.05;
  color: var(--ink);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.t-row:hover .t-name, .t-row:active .t-name { transform: translateX(4px); }
.t-venue {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.62rem;
  letter-spacing: 0.04em;
  line-height: 1.5;
  color: var(--muted);
  margin-top: 5px;
}
.t-dir { display: inline-flex; flex-shrink: 0; margin-top: 1px; color: var(--ink); transition: transform 0.25s ease; }
.t-dir svg { width: 14px; height: 14px; }
.t-row:hover .t-dir, .t-row:active .t-dir { transform: scale(1.18); }

/* ── FOOTER ── */
.foot { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 5px; padding: 16px 24px 22px; }
.foot-rule { width: 44px; height: 1px; background: var(--line); margin-bottom: 2px; }
.foot-made {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.52rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--muted);
}
.foot-heart { display: inline-flex; color: var(--rose); }
.foot-heart svg { width: 10px; height: 10px; animation: beat 1.5s ease-in-out infinite; transform-origin: center; }
@keyframes beat {
  0%, 100% { transform: scale(1); }
  12% { transform: scale(1.28); }
  24% { transform: scale(1); }
  36% { transform: scale(1.18); }
  50% { transform: scale(1); }
}
@media (prefers-reduced-motion: reduce) { .foot-heart svg { animation: none; } }
.foot-couple { font-family: var(--font-caveat), cursive; font-size: 1.3rem; line-height: 1; color: var(--ink); }
.foot-date { font-family: var(--font-montserrat), sans-serif; font-size: 0.5rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--faint); }

/* ── Theme switch: heart-shaped View Transition reveal ── */
::view-transition-group(root) { animation-timing-function: cubic-bezier(0.76, 0, 0.24, 1); }
::view-transition-new(root) {
  mask: url('https://media.tenor.com/cyORI7kwShQAAAAi/shigure-ui-dance.gif') center / 0 no-repeat;
  animation: wd-reveal 2s ease-in;
  animation-fill-mode: both;
}
::view-transition-old(root),
html.wd-dark::view-transition-old(root) {
  animation: wd-reveal 0.9s ease-in;
  animation-fill-mode: both;
}
@keyframes wd-reveal {
  0% { mask-size: 0; }
  12% { mask-size: 42vmax; }
  90% { mask-size: 42vmax; }
  100% { mask-size: 2200vmax; }
}

/* ── Responsive: stack the two halves ── */
@media (max-width: 760px) {
  .split { flex-direction: column; }
  .split::after { display: none; }
  .half { flex: none; min-height: auto; padding: 54px 30px; }
  .right::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 1px;
    background: var(--line);
  }
}
`;

export default function WeddingPage() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("wd-theme") === "dark";
    document.documentElement.classList.toggle("wd-dark", isDark);
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("wd-dark");
    const apply = () => {
      document.documentElement.classList.toggle("wd-dark", next);
      document.documentElement.classList.toggle("dark", next); // drives the aurora's dark variant
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = (document as Document & {
      startViewTransition?: (cb: () => void) => void;
    }).startViewTransition;

    if (start && !reduce) start.call(document, apply);
    else apply();

    localStorage.setItem("wd-theme", next ? "dark" : "light");
    setDark(next);
  };

  return (
    <div className="page">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <AuroraBackground className="aurora-bg h-full w-full" />

      <button
        type="button"
        className="theme-btn"
        onClick={toggleTheme}
        aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      >
        {dark ? ICONS.sun : ICONS.moon}
      </button>

      <div className="split">
        {/* LEFT — who & when */}
        <div className="half left">
          <BlurFade delay={0.1} inView>
            <p className="eyebrow">Together with their families</p>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <h1 className="couple">
              Joan <span className="amp">&amp;</span> Angelene
            </h1>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <p className="invite">cordially invite you to celebrate their holy matrimony</p>
          </BlurFade>
          <BlurFade delay={0.55} inView>
            <div className="when">
              <span className="d-side">Sunday</span>
              <span className="bar" />
              <span className="d-num">12</span>
              <span className="bar" />
              <span className="d-side">July</span>
            </div>
          </BlurFade>
          <BlurFade delay={0.7} inView>
            <p className="year">2026</p>
          </BlurFade>
        </div>

        {/* RIGHT — wedding timeline */}
        <div className="half right">
          <p className="t-title fade" style={fade(200)}>
            Wedding Timeline
          </p>
          <div className="timeline">
            {EVENTS.map((e, i) => (
              <a
                key={e.name}
                href={e.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="t-row fade"
                style={fade(280 + i * 90)}
              >
                <div className="t-icon">{ICONS[e.icon]}</div>
                <div className="t-mid">
                  <span className="t-heart">{ICONS.heart}</span>
                </div>
                <div className="t-text">
                  <div className="t-when">{e.when}</div>
                  <div className="t-name">{e.name}</div>
                  <div className="t-venue">
                    <span className="t-dir" aria-label="Get directions">{ICONS.pin}</span>
                    {e.venue}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="foot">
        <BlurFade inView delay={0.1}>
          <div className="foot-rule" />
        </BlurFade>
        <BlurFade inView delay={0.2}>
          <p className="foot-made">
            Made with <span className="foot-heart">{ICONS.heartFilled}</span> for our forever
          </p>
        </BlurFade>
        <BlurFade inView delay={0.35}>
          <p className="foot-couple">Joan &amp; Angelene</p>
        </BlurFade>
        <BlurFade inView delay={0.5}>
          <p className="foot-date">11 June — 12 July 2026</p>
        </BlurFade>
      </footer>
    </div>
  );
}
