"use client";

// Faithful port of the trifold wedding-invitation design.
// Fonts are loaded as CSS variables in ./layout.tsx
// (--font-cinzel, --font-playfair, --font-pinyon, --font-montserrat).

import { useEffect, useRef, useState } from "react";

const MAPS = {
  church: "https://maps.app.goo.gl/TRg1nbJ4DpmHxWk96",
  mahal: "https://maps.app.goo.gl/oXoqtKZHTcfq8GfN6",
  reception: "https://maps.app.goo.gl/iGvpt9eaYKT3HfiN9",
};

const TIMELINE = [
  {
    side: "item-right", ico: "ico-matrimony", title: "Holy Matrimony",
    time: "10:30 – 11:45 AM", venue: "St. Antony's Church", mapsUrl: MAPS.church,
  },
  {
    side: "item-left", ico: "ico-feast", title: "Feast",
    time: "12:00 – 2:00 PM", venue: "Gurusamy Kovil Mahal", mapsUrl: MAPS.mahal,
  },
  {
    side: "item-right", ico: "ico-reception", title: "Reception",
    time: "6:00 – 9:00 PM", venue: "SK Thanga Rathinam Mahal", mapsUrl: MAPS.reception,
  },
];

const VENUES = [
  {
    name: "St. Antony's Church",
    addr: "Pavoorchatram, Tamil Nadu 627808",
    mapsUrl: MAPS.church,
  },
  {
    name: "Gurusamy Kovil Thirumana Mahal",
    addr: "Keezhapavur, Tamil Nadu 627806",
    mapsUrl: MAPS.mahal,
  },
  {
    name: "SK Thanga Rathinam Thirumana Mahal",
    addr: "Surandai Road, Keezhapavur, Tamil Nadu 627806",
    mapsUrl: MAPS.reception,
  },
];

const css = `
html, body { background-color: #ffffff !important; }

/* Scroll-reveal */
.reveal {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--reveal-delay, 0ms);
  will-change: opacity, transform;
}
.reveal.is-visible {
  opacity: 1;
  transform: none;
}
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}

.wedding-page {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: var(--font-montserrat), sans-serif;
  padding: 20px;
}

.invitation-container {
  position: relative;
  display: flex;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)' opacity='0.22'/%3E%3C/svg%3E");
  width: 1000px;
  max-width: 100%;
  min-height: 600px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 12px 28px rgba(0, 0, 0, 0.08),
    0 30px 60px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

/* Paper folds + soft vignette overlay */
.invitation-container::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  border-radius: inherit;
  background:
    linear-gradient(90deg, transparent 22.5%, rgba(0, 0, 0, 0.05) 25%, transparent 27.5%),
    linear-gradient(90deg, transparent 72.5%, rgba(0, 0, 0, 0.05) 75%, transparent 77.5%),
    radial-gradient(130% 90% at 50% -10%, rgba(0, 0, 0, 0.04), transparent 55%),
    radial-gradient(130% 90% at 50% 110%, rgba(0, 0, 0, 0.04), transparent 55%);
}

/* --- LEFT PANEL: Order of Events --- */
.left-panel {
  width: 25%;
  background-color: transparent;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.panel-title {
  font-family: var(--font-playfair), serif;
  font-style: italic;
  font-size: 1.35rem;
  color: #222;
  margin-bottom: 25px;
  text-align: center;
}
.timeline {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 10px;
  bottom: 20px;
  width: 1px;
  background-color: #444;
  transform: translateX(-50%);
}
.timeline-item {
  position: relative;
  width: 100%;
  margin-bottom: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.68rem;
  font-weight: 400;
  color: #111;
  text-transform: capitalize;
}
.timeline-item::after {
  content: '';
  position: absolute;
  top: 12px;
  width: 30px;
  height: 1px;
  background-color: #444;
}
.item-left { padding-right: 70px; }
.item-left::after { right: 50%; }
.item-right { padding-left: 70px; }
.item-right::after { left: 50%; }

/* Hover interaction */
.timeline-item { cursor: pointer; }
.timeline-item > div:last-child {
  transition: transform 0.3s ease, letter-spacing 0.3s ease, color 0.3s ease;
}
.timeline-item::after {
  transition: width 0.3s ease, background-color 0.3s ease;
}
.timeline-item:hover .icon-placeholder {
  transform: scale(1.35) translateY(-3px);
  opacity: 1;
}
.timeline-item:hover > div:last-child {
  transform: translateY(3px);
  letter-spacing: 0.4px;
  color: #000;
}
.timeline-item:hover::after {
  width: 42px;
  background-color: #000;
}

.icon-placeholder {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 0.8;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}
.ico-matrimony::before { content: "💒"; font-size: 18px; }
.ico-feast::before     { content: "🍽️"; font-size: 18px; }
.ico-reception::before { content: "🥂"; font-size: 18px; }

/* --- CENTER PANEL: Main Invitation --- */
.center-panel {
  width: 50%;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: transparent;
}
.names-container { margin-bottom: 30px; }
.name-serif {
  font-family: var(--font-cinzel), serif;
  font-size: clamp(1.9rem, 7.5vw, 2.6rem);
  letter-spacing: clamp(2px, 1vw, 5px);
  color: #111;
  font-weight: 400;
  line-height: 1.1;
}
.name-script {
  font-family: var(--font-pinyon), cursive;
  font-size: clamp(2rem, 8.5vw, 2.8rem);
  color: #888;
  margin-top: -12px;
  margin-bottom: 5px;
}
.plus-sign {
  font-family: var(--font-playfair), serif;
  font-size: 1.8rem;
  font-style: italic;
  color: #444;
  margin: 15px 0;
}
.invite-text {
  font-family: var(--font-cinzel), serif;
  font-size: 0.75rem;
  letter-spacing: 2px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 30px;
}
.date-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  border-top: 1px solid #444;
  border-bottom: 1px solid #444;
  padding: 10px 0;
  margin-bottom: 10px;
}
.date-side {
  font-family: var(--font-cinzel), serif;
  font-size: 0.75rem;
  letter-spacing: 2px;
  width: 35%;
  text-transform: uppercase;
}
.date-center {
  font-family: var(--font-playfair), serif;
  font-size: 1.9rem;
  width: 30%;
  border-left: 1px solid #444;
  border-right: 1px solid #444;
  line-height: 1;
}
.time-text {
  font-family: var(--font-playfair), serif;
  font-style: italic;
  font-size: 0.7rem;
  color: #555;
  margin-bottom: 35px;
  letter-spacing: 1px;
}
.location-title {
  font-family: var(--font-playfair), serif;
  font-style: italic;
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 4px;
}
.location-sub {
  font-family: var(--font-playfair), serif;
  font-style: italic;
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 35px;
}
.reception-text {
  font-family: var(--font-pinyon), cursive;
  font-size: clamp(1.7rem, 7.5vw, 2.2rem);
  color: #333;
}

/* --- RIGHT PANEL: RSVP, Details & Gifts --- */
.right-panel {
  width: 25%;
  background-color: transparent;
  padding: 40px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.right-section { margin-bottom: 40px; width: 100%; }
.section-title {
  font-family: var(--font-cinzel), serif;
  font-size: 1.25rem;
  letter-spacing: 3px;
  color: #111;
  margin-bottom: 12px;
}
.section-body {
  font-family: var(--font-playfair), serif;
  font-size: 0.7rem;
  line-height: 1.6;
  color: #444;
}
.qr-code {
  width: 65px;
  height: 65px;
  margin: 0 auto 15px auto;
  background:
    linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000),
    linear-gradient(45deg, #000 25%, #fff 25%, #fff 75%, #000 75%, #000);
  background-size: 10px 10px;
  background-position: 0 0, 5px 5px;
  border: 4px solid #fff;
  outline: 1px solid #000;
}
.qr-img {
  width: 84px;
  height: 84px;
  display: block;
  margin: 0 auto 14px auto;
}
.website-link {
  display: block;
  margin-top: 5px;
  color: #111;
  text-decoration: none;
  font-weight: bold;
}

/* Timeline item text */
.timeline-item { text-decoration: none; color: #111; }
.tl-title {
  font-family: var(--font-cinzel), serif;
  font-size: 0.72rem;
  letter-spacing: 0.5px;
  color: #111;
  margin-top: 3px;
  text-transform: uppercase;
}
.tl-time {
  font-family: var(--font-playfair), serif;
  font-style: italic;
  font-size: 0.66rem;
  color: #555;
  margin-top: 2px;
}
.tl-venue {
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.58rem;
  color: #999;
  margin-top: 2px;
  line-height: 1.3;
}

/* Center: verse + parents + blessing */
.verse {
  font-family: var(--font-playfair), serif;
  font-style: italic;
  font-size: 0.82rem;
  line-height: 1.65;
  color: #555;
  max-width: 360px;
  margin-bottom: 6px;
}
.verse-ref {
  font-family: var(--font-cinzel), serif;
  font-size: 0.58rem;
  letter-spacing: 2px;
  color: #999;
  margin-bottom: 28px;
  text-transform: uppercase;
}
.parents {
  font-family: var(--font-playfair), serif;
  font-style: italic;
  font-size: 0.72rem;
  color: #777;
  line-height: 1.5;
  margin-top: 8px;
  max-width: 320px;
}
.blessing {
  font-family: var(--font-pinyon), cursive;
  font-size: clamp(1.5rem, 6.5vw, 2rem);
  color: #333;
  margin-top: 10px;
}

/* Right: venues list */
.venue-item {
  display: block;
  text-decoration: none;
  margin-bottom: 16px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.venue-item:hover { transform: translateY(-2px); opacity: 0.65; }
.venue-name {
  font-family: var(--font-playfair), serif;
  font-style: italic;
  font-size: 0.95rem;
  color: #111;
}
.venue-addr {
  font-family: var(--font-montserrat), sans-serif;
  font-size: 0.62rem;
  color: #888;
  line-height: 1.4;
  margin-top: 2px;
}

/* --- Responsive: stack the trifold on small screens --- */
@media (max-width: 1040px) {
  .invitation-container { flex-direction: column; max-width: 560px; min-height: 0; }
  .left-panel, .center-panel, .right-panel { width: 100%; }
  .center-panel { padding: 45px 30px; order: -1; }   /* names first when stacked */
  /* vertical fold creases don't apply to a stacked layout */
  .invitation-container::before { display: none; }
}

@media (max-width: 480px) {
  .wedding-page { padding: 12px; }
  .invitation-container { border-radius: 6px; }
  .left-panel  { padding: 28px 12px; }
  .right-panel { padding: 30px 18px; }
  .center-panel { padding: 36px 20px; }
  .item-left  { padding-right: 52px; }
  .item-right { padding-left: 52px; }
  .timeline-item::after { width: 24px; }
  .invite-text { font-size: 0.7rem; }
  .right-section { margin-bottom: 32px; }
}
`;

/** stagger helper: sets the reveal delay as a CSS custom property */
const revealDelay = (delayMs: number) =>
  ({ "--reveal-delay": `${delayMs}ms` } as React.CSSProperties);

export default function WeddingPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [qrSrc, setQrSrc] = useState("");

  useEffect(() => {
    const url = `${window.location.origin}${window.location.pathname}`;
    setQrSrc(
      `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=0&data=${encodeURIComponent(url)}`
    );
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));

    // If the browser can't observe, just show everything.
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="wedding-page" ref={rootRef}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="invitation-container">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <h2 className="panel-title reveal" style={revealDelay(0)}>
            Order of Events
          </h2>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <a
                key={item.title}
                href={item.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`timeline-item ${item.side} reveal`}
                style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
              >
                <div className={`icon-placeholder ${item.ico}`} />
                <div className="tl-title">{item.title}</div>
                <div className="tl-time">{item.time}</div>
                <div className="tl-venue">{item.venue}</div>
              </a>
            ))}
          </div>
        </div>

        {/* CENTER PANEL */}
        <div className="center-panel">
          <p className="verse reveal" style={revealDelay(0)}>
            “Love bears all things, believes all things, hopes all things, endures all things”
          </p>
          <p className="verse-ref reveal" style={revealDelay(60)}>
            1 Corinthians 13:7
          </p>

          <div className="invite-text reveal" style={revealDelay(120)}>
            TOGETHER WITH THEIR FAMILIES,
            <br />
            WE CORDIALLY INVITE YOU TO CELEBRATE
            <br />
            THE HOLY MATRIMONY OF
          </div>

          <div className="names-container reveal" style={revealDelay(180)}>
            <div className="name-serif">JOAN</div>
            <div className="name-script">Louji</div>
            <div className="parents">
              S/O Mr. L. Salette Arulanantham &amp; Mrs. K. Ponrani
            </div>

            <div className="plus-sign">+</div>

            <div className="name-serif">ANGELENE</div>
            <div className="name-script">Vidhya</div>
            <div className="parents">
              D/O Mr. K. John Bright &amp; Mrs. K. Santhi
            </div>
          </div>

          <div className="date-row reveal" style={revealDelay(260)}>
            <div className="date-side">Sunday</div>
            <div className="date-center">12</div>
            <div className="date-side">July</div>
          </div>

          <div className="time-text reveal" style={revealDelay(320)}>
            IN THE YEAR 2026
          </div>

          <div className="blessing reveal" style={revealDelay(400)}>
            by the grace of God
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <div className="right-section reveal" style={revealDelay(0)}>
            <h2 className="section-title">DIRECTIONS</h2>
            {qrSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={qrSrc} alt="Scan for directions to all the venues" className="qr-img" />
            ) : (
              <div className="qr-code" />
            )}
            <p className="section-body">Scan for directions to all the venues</p>
          </div>

          <div className="right-section reveal" style={revealDelay(120)}>
            <h2 className="section-title">VENUES</h2>
            {VENUES.map((v) => (
              <a
                key={v.name}
                href={v.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="venue-item"
              >
                <div className="venue-name">{v.name}</div>
                <div className="venue-addr">{v.addr}</div>
              </a>
            ))}
          </div>

          <div className="right-section reveal" style={revealDelay(240)}>
            <h2 className="section-title">BLESSINGS</h2>
            <p className="section-body">With joyful hearts, we await your blessings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
