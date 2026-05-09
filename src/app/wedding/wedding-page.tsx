"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Gem, Star, UtensilsCrossed, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Palette ──────────────────────────────────────────────────────────────────
const C = {
  wine:       "#5C1A2E",   // deep burgundy — headings, active UI
  rose:       "#8B4D60",   // medium rose   — icons, secondary text
  gold:       "#B8903C",   // warm gold     — accents, time labels
  goldLight:  "#E8D0B8",   // champagne     — spine, borders
  goldPale:   "#F5E9D4",   // pale gold     — node bg, card tint
  ivory:      "#FBF5EE",   // warm ivory    — page bg
  text:       "#3D2030",   // dark body text
  muted:      "#9B7080",   // muted text
} as const;

// ─── Countdown ────────────────────────────────────────────────────────────────

interface CountdownTime { days: number; hours: number; minutes: number; seconds: number }

function useCountdown(target: Date): CountdownTime {
  const [time, setTime] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTime({
        days:    Math.floor(diff / 86_400_000),
        hours:   Math.floor((diff / 3_600_000) % 24),
        minutes: Math.floor((diff / 60_000) % 60),
        seconds: Math.floor((diff / 1_000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

interface EventItem {
  id: string; title: string; Icon: LucideIcon;
  timeShort: string; timeFull: string; venue: string; mapsUrl: string;
}

const EVENTS: { dayId: string; label: string; items: EventItem[] }[] = [
  {
    dayId: "jul-11",
    label: "Friday, July 11th",
    items: [{
      id: "engagement", title: "Engagement", Icon: Gem,
      timeShort: "6 PM", timeFull: "6:00 PM",
      venue: "Gurusamy Kovil Thirumana Mahal",
      mapsUrl: "https://maps.app.goo.gl/oXoqtKZHTcfq8GfN6",
    }],
  },
  {
    dayId: "jul-12",
    label: "Saturday, July 12th",
    items: [
      {
        id: "marriage", title: "Marriage Ceremony", Icon: Star,
        timeShort: "10 AM", timeFull: "10:00 AM",
        venue: "St. Antony's Church, Pavoorchatram",
        mapsUrl: "https://maps.app.goo.gl/TRg1nbJ4DpmHxWk96",
      },
      {
        id: "lunch", title: "Lunch", Icon: UtensilsCrossed,
        timeShort: "12 PM", timeFull: "12:00 PM – 4:00 PM",
        venue: "Gurusamy Kovil Thirumana Mahal",
        mapsUrl: "https://maps.app.goo.gl/oXoqtKZHTcfq8GfN6",
      },
      {
        id: "reception", title: "Reception", Icon: Sparkles,
        timeShort: "6 PM", timeFull: "6:00 PM – 10:00 PM",
        venue: "SK Thanga Rathinam Thirumana Mahal",
        mapsUrl: "https://maps.app.goo.gl/iGvpt9eaYKT3HfiN9",
      },
    ],
  },
];

// ─── TimelineItem ─────────────────────────────────────────────────────────────

function TimelineItem({
  item, index, isFirst, isLast,
}: {
  item: EventItem; index: number; isFirst: boolean; isLast: boolean;
}) {
  const { Icon } = item;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.09 + 0.25, duration: 0.5 }}
    >
      {/*
        Keep the grid on a plain div, not the motion.div, so Framer Motion
        never touches the layout properties. Two equal `1fr` columns + a
        fixed 40 px centre column guarantees the spine sits at exactly 50%
        of the available width regardless of content size.
      */}
      <div
        className="w-full"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr" }}
      >
        {/* ── Left: time label ── */}
        <div className="text-right pr-4 pt-[10px]">
          <span
            className="text-[11px] font-bold tracking-[0.14em] uppercase tabular-nums leading-none"
            style={{ color: C.gold }}
          >
            {item.timeShort}
          </span>
        </div>

        {/* ── Centre: spine + node ── */}
        <div className="flex flex-col items-center">
          {!isFirst && (
            <div className="w-px h-5 -mt-3" style={{ background: C.goldLight }} />
          )}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2"
            style={{ borderColor: C.gold, background: C.goldPale }}
          >
            <Icon className="w-[15px] h-[15px]" style={{ color: C.rose }} strokeWidth={1.5} />
          </div>
          {!isLast && (
            <div
              className="w-px flex-1 min-h-[80px] mt-0.5"
              style={{ background: `linear-gradient(to bottom, ${C.goldLight}, ${C.goldLight}55)` }}
            />
          )}
        </div>

        {/* ── Right: event details ── */}
        <div className={`pl-4 pt-2 min-w-0 ${!isLast ? "pb-10" : "pb-0"}`}>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.14em] leading-tight"
            style={{ color: C.wine }}
          >
            {item.title}
          </p>
          <p className="text-[11px] mt-0.5 tracking-wider" style={{ color: C.gold }}>
            {item.timeFull}
          </p>
          <p className="text-[12px] mt-1 leading-snug" style={{ color: C.muted }}>
            {item.venue}
          </p>
          <a
            href={item.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-[9px] font-bold uppercase tracking-[0.18em] border px-3 py-1.5 active:scale-95 transition-all duration-150"
            style={{ borderColor: C.gold, color: C.gold }}
          >
            <MapPin className="w-2.5 h-2.5" />
            Get Directions
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WeddingPage() {
  const target = useMemo(() => new Date("2026-07-11T12:30:00Z"), []);
  const countdown = useCountdown(target);
  const [activeDay, setActiveDay] = useState<"jul-11" | "jul-12" | null>(null);

  const jul11Ref = useRef<HTMLDivElement>(null);
  const jul12Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: "jul-11" | "jul-12") => {
    setActiveDay(id);
    const ref = id === "jul-11" ? jul11Ref : jul12Ref;
    if (ref.current) {
      const y = ref.current.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveDay(entry.target.id as "jul-11" | "jul-12");
        }
      },
      { threshold: 0.4 }
    );
    if (jul11Ref.current) observer.observe(jul11Ref.current);
    if (jul12Ref.current) observer.observe(jul12Ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-body pb-14" style={{ background: C.ivory }}>
      <div className="max-w-lg mx-auto px-5">

        {/* ── Hero card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mt-8 bg-white px-8 py-12 text-center"
          style={{ boxShadow: `0 6px 40px rgba(92,26,46,0.10), 0 1px 4px rgba(92,26,46,0.06)` }}
        >
          {/* Top ornament */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-10" style={{ background: C.goldLight }} />
            <span className="text-xs tracking-[0.5em]" style={{ color: C.gold }}>✿ ✿ ✿</span>
            <div className="h-px w-10" style={{ background: C.goldLight }} />
          </div>

          <p className="text-[8px] uppercase tracking-[0.5em] mb-8" style={{ color: C.muted }}>
            Together with their families
          </p>

          <h1
            className="text-[3rem] sm:text-[3.6rem] font-bold uppercase tracking-[0.08em] leading-none"
            style={{ color: C.wine }}
          >
            Joan
          </h1>
          <p className="text-xl my-3 tracking-[0.4em] font-light" style={{ color: C.gold }}>
            &
          </p>
          <h1
            className="text-[3rem] sm:text-[3.6rem] font-bold uppercase tracking-[0.08em] leading-none"
            style={{ color: C.wine }}
          >
            Angeline
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px" style={{ background: C.goldLight }} />
            <span className="text-[9px] tracking-[0.5em]" style={{ color: C.gold }}>✦ ✦ ✦</span>
            <div className="flex-1 h-px" style={{ background: C.goldLight }} />
          </div>

          <p className="text-[8px] uppercase tracking-[0.45em]" style={{ color: C.muted }}>
            Wedding Celebrations
          </p>
          <p
            className="text-[13px] font-semibold tracking-[0.22em] uppercase mt-1.5"
            style={{ color: C.rose }}
          >
            July 11 – 12, 2026
          </p>

          {/* Countdown */}
          <div className="mt-9">
            <p className="text-[7px] uppercase tracking-[0.45em] mb-5" style={{ color: C.goldLight }}>
              Counting down to the celebration
            </p>
            <div className="flex justify-center gap-5 sm:gap-8">
              {[
                { v: countdown.days,    l: "Days" },
                { v: countdown.hours,   l: "Hrs"  },
                { v: countdown.minutes, l: "Mins" },
                { v: countdown.seconds, l: "Secs" },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col items-center gap-1.5">
                  <span
                    className="text-[2.2rem] font-bold tabular-nums leading-none tracking-tight"
                    style={{ color: C.wine }}
                  >
                    {String(v).padStart(2, "0")}
                  </span>
                  <span className="text-[7px] uppercase tracking-[0.35em]" style={{ color: C.gold }}>
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Day nav */}
          <div className="mt-9 flex gap-2.5 justify-center">
            {(["jul-11", "jul-12"] as const).map((id) => {
              const isActive = activeDay === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="px-5 py-2 text-[9px] font-bold uppercase tracking-[0.2em] border transition-all duration-200 active:scale-95"
                  style={
                    isActive
                      ? { background: C.wine, color: "#fff", borderColor: C.wine }
                      : { background: "#fff", color: C.rose, borderColor: C.goldLight }
                  }
                >
                  {id === "jul-11" ? "July 11" : "July 12"}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Events card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.65 }}
          className="mt-4 mb-8 bg-white px-6 pt-9 pb-10"
          style={{ boxShadow: `0 6px 40px rgba(92,26,46,0.10), 0 1px 4px rgba(92,26,46,0.06)` }}
        >
          {/* Section title */}
          <div className="text-center mb-8">
            <p className="text-[8px] uppercase tracking-[0.5em] font-semibold" style={{ color: C.gold }}>
              Weekend Events
            </p>
          </div>

          {EVENTS.map((day, dayIdx) => (
            <div key={day.dayId} id={day.dayId} ref={dayIdx === 0 ? jul11Ref : jul12Ref}>
              {dayIdx > 0 && (
                <div className="flex items-center gap-4 my-2">
                  <span className="text-[8px] tracking-[0.5em]" style={{ color: C.goldLight }}>✦</span>
                </div>
              )}

              {/* Day header — centered over spine */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: dayIdx * 0.15 + 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="flex-1 h-px" style={{ background: C.goldLight }} />
                <p
                  className="text-[9px] uppercase tracking-[0.3em] font-bold whitespace-nowrap"
                  style={{ color: C.wine }}
                >
                  {day.label}
                </p>
                <div className="flex-1 h-px" style={{ background: C.goldLight }} />
              </motion.div>

              {/* Timeline items */}
              {day.items.map((item, i) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={i + dayIdx * 4}
                  isFirst={i === 0}
                  isLast={i === day.items.length - 1}
                />
              ))}
            </div>
          ))}

          {/* Card footer */}
          <div className="mt-8 pt-6 text-center" style={{ borderTop: `1px solid ${C.goldLight}` }}>
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-8" style={{ background: C.goldLight }} />
              <span className="text-xs" style={{ color: C.gold }}>✿</span>
              <div className="h-px w-8" style={{ background: C.goldLight }} />
            </div>
            <p className="text-[8px] uppercase tracking-[0.45em]" style={{ color: C.muted }}>
              Joan Louji + Angeline Vidhya
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
