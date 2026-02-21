"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { ResumePreview } from "@/app/sections/resume-section";
import type { AboutSectionProps } from "@/types/about";
import { initialData } from "@/lib/data";

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{number}.</span>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

export function AboutSection({ about }: { about: AboutSectionProps }) {
  const sectionRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <SectionHeading number="01" title="About" />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div
            className={`lg:col-span-3 transition-all delay-200 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="space-y-5 text-[20px] leading-relaxed text-muted-foreground">
              {about.description.map((text: string, i: number) => (
                <p className="text-[20px]" key={i}>
                  {text}
                </p>
              ))}
            </div>
            {about.links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
                {about.links.map((link) => (
                  <a
                    key={link.title}
                    href={link.remoteMethod ? link.path : link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Image
                      src={link.logo}
                      alt=""
                      width={18}
                      height={18}
                      unoptimized={link.logo.startsWith("http")}
                    />
                    <span>{link.title}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div
            className={`lg:col-span-2 transition-all delay-400 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
              {about.skillsDescription}
            </h3>
            <div className="flex flex-wrap gap-2">
              {about.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden" aria-hidden>
        <div ref={previewRef}>
          <ResumePreview data={initialData} />
        </div>
      </div>
    </section>
  );
}
