"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Twitter, BookOpen } from "lucide-react";

import type { HeroSectionProps } from "@/types/hero";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Medium: BookOpen,
};

export function HeroSection({ content }: { content: HeroSectionProps }) {
  const [visible, setVisible] = useState(false);
  const { name, title, subTitle, contact } = content;
  const socials = contact?.socials ?? [];

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-start justify-center px-6 lg:px-8 w-full">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <div
            className={`transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-4 font-mono text-sm tracking-wider text-primary">
              Hello, my name is
            </p>
          </div>

          <div
            className={`transition-all delay-150 duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
              {name}.
            </h1>
          </div>

          <div
            className={`transition-all delay-300 duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-muted-foreground md:text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>

          <div
            className={`transition-all delay-500 duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
              {subTitle}
            </p>
          </div>

          {socials.length > 0 && (
            <div
              className={`mt-10 flex items-center gap-5 transition-all delay-700 duration-700 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {socials.map((link) => {
                const Icon = iconMap[link.name];
                if (!Icon) return null;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
