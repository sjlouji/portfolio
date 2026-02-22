"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import type { LandingPageProps } from "@/types/landing";
import { sectionIds } from "@/lib/data";

import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { HeroSection } from "@/app/sections/hero-section";
import { AboutSection } from "@/app/sections/about-section";
import { ExperienceSection } from "@/app/sections/experience-section";
import { ProjectsSection } from "@/app/sections/projects-section";
import { ContactSection } from "@/app/sections/contact-section";
import { PostSection } from "@/app/sections/post-section";

export function LandingPage({
  initialData,
  blogs,
  blogsLoadFailed = false,
  mediumProfileUrl = "https://medium.com/@sjlouji10",
}: LandingPageProps & {
  blogs: any[];
  blogsLoadFailed?: boolean;
  mediumProfileUrl?: string;
}) {
  const [activeSection, setActiveSection] = useState("hero");
  const lastSection = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      let current = "hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            current = id;
          }
        }
      }
      setActiveSection(current);
      setActionSessionToUrl(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionTitles: Record<string, string> = {
      hero: "Home",
      ...Object.fromEntries(
        initialData.sections.map((s) => [s.href.replace("#", ""), s.name]),
      ),
    };
    const sectionName = sectionTitles[activeSection] ?? activeSection;
    const siteName = initialData?.name ?? "Joan Louji";
    document.title = `${siteName} | ${sectionName}`;
  }, [activeSection, initialData]);

  const setActionSessionToUrl = (section: string) => {
    if (section && section !== lastSection.current) {
      history.replaceState(
        null,
        "",
        section === "hero"
          ? window.location.pathname + window.location.search
          : `#${section}`,
      );
      lastSection.current = section;
    }
  };

  const sectionComponents: Record<string, React.ReactNode> = {
    hero: <HeroSection content={initialData} />,
    about: <AboutSection about={initialData.about} />,
    experience: <ExperienceSection experiences={initialData.experience} />,
    works: <ProjectsSection projects={initialData.works} />,
    posts: (
      <PostSection
        blogs={blogs}
        loadFailed={blogsLoadFailed}
        mediumProfileUrl={mediumProfileUrl}
      />
    ),
    contact: <ContactSection contact={initialData.contact} />,
  };

  return (
    <div className="relative min-h-screen">
      {sectionIds.map((id) => (
        <motion.div
          key={id}
          id={id}
          initial={false}
          animate={
            activeSection === id
              ? { opacity: 1, y: 0 }
              : { opacity: 0.3, y: 60 }
          }
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={
            id === "contact"
              ? "flex justify-center w-full"
              : "min-h-screen flex justify-center w-full"
          }
        >
          {sectionComponents[id]}
        </motion.div>
      ))}
      <Header content={initialData} />
      <Footer name={initialData.name} />
    </div>
  );
}
