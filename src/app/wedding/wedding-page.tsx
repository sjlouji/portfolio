// Faithful port of the trifold wedding-invitation design.
// Fonts are loaded as CSS variables in ./layout.tsx
// (--font-cinzel, --font-playfair, --font-pinyon, --font-montserrat).

const TIMELINE = [
  { side: "item-right", ico: "ico-entrance", label: "3pm Entrance" },
  { side: "item-left", ico: "ico-ceremony", label: "4pm Ceremony" },
  { side: "item-right", ico: "ico-drinks", label: "5pm Drinks" },
  { side: "item-left", ico: "ico-dinner", label: "6pm Dinner" },
  { side: "item-right", ico: "ico-cake", label: "7pm Cake Cutting" },
  { side: "item-left", ico: "ico-dance", label: "8pm Dance" },
  { side: "item-right", ico: "ico-photos", label: "9pm Photos" },
  { side: "item-left", ico: "ico-sendoff", label: "10pm Send-off" },
];

const css = `
html, body { background-color: #ffffff !important; }

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
.ico-entrance::before { content: "🏰"; font-size: 16px; }
.ico-ceremony::before { content: "💍"; font-size: 16px; }
.ico-drinks::before   { content: "🥂"; font-size: 16px; }
.ico-dinner::before   { content: "🍽️"; font-size: 16px; }
.ico-cake::before     { content: "🎂"; font-size: 16px; }
.ico-dance::before    { content: "💃"; font-size: 16px; }
.ico-photos::before   { content: "📷"; font-size: 16px; }
.ico-sendoff::before  { content: "🚗"; font-size: 16px; }

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
  font-size: 2.6rem;
  letter-spacing: 5px;
  color: #111;
  font-weight: 400;
  line-height: 1.1;
}
.name-script {
  font-family: var(--font-pinyon), cursive;
  font-size: 2.8rem;
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
  font-size: 2.2rem;
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
.website-link {
  display: block;
  margin-top: 5px;
  color: #111;
  text-decoration: none;
  font-weight: bold;
}

/* --- Responsive: stack the trifold on small screens --- */
@media (max-width: 1040px) {
  .invitation-container { flex-direction: column; max-width: 560px; min-height: 0; }
  .left-panel, .center-panel, .right-panel { width: 100%; }
  .center-panel { padding: 45px 30px; }
}
`;

export default function WeddingPage() {
  return (
    <div className="wedding-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="invitation-container">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <h2 className="panel-title">Order of Events</h2>
          <div className="timeline">
            {TIMELINE.map((item) => (
              <div key={item.label} className={`timeline-item ${item.side}`}>
                <div className={`icon-placeholder ${item.ico}`} />
                <div>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER PANEL */}
        <div className="center-panel">
          <div className="names-container">
            <div className="name-serif">SOPHIA</div>
            <div className="name-script">Thompson</div>
            <div className="plus-sign">+</div>
            <div className="name-serif">JOSEPH</div>
            <div className="name-script">Hilton</div>
          </div>

          <div className="invite-text">
            JOYFULLY INVITE YOU TO CELEBRATE
            <br />
            THEIR WEDDING
          </div>

          <div className="date-row">
            <div className="date-side">Saturday</div>
            <div className="date-center">28</div>
            <div className="date-side">December</div>
          </div>

          <div className="time-text">20XX AT 5 PM</div>

          <div className="location-title">The Express Hotel</div>
          <div className="location-sub">New York, NY</div>

          <div className="reception-text">reception to follow</div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <div className="right-section">
            <h2 className="section-title">RSVP</h2>
            <div className="qr-code" />
            <p className="section-body">
              Kindly let us know if you will be able to join us on our special day. Visit our
              wedding website <span className="website-link">Francescajoseph.com</span> or scan QR
              to confirm your attendance
            </p>
          </div>

          <div className="right-section">
            <h2 className="section-title">DETAILS</h2>
            <p className="section-body">
              For our out-of-town guests, we&apos;ve reserved a block of rooms to ensure your stay
              is as comfortable as our celebration is memorable. Visit our wedding website for
              additional details
            </p>
          </div>

          <div className="right-section">
            <h2 className="section-title">GIFTS</h2>
            <p className="section-body">
              Your presence is the most precious gift we could ask for. If you&apos;d prefer, a
              contribution to our honeymoon fund would be a lovely way to help us create
              unforgettable memories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
