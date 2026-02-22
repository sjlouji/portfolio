import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SectionWrapper } from "@/app/components/section-wrapper";
import type { ContactSectionProps } from "@/types/contact";

function InfoBlock({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-8 w-1/2 ${className}`}>
      <div className="uppercase text-xs text-muted-foreground font-semibold mb-2 tracking-widest">
        {label}
      </div>
      {children}
    </div>
  );
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <SectionWrapper id="contact" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 text-foreground">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8 uppercase">
            {contact.heading.split("\n").map((line: string, i: number) => (
              <span key={i} style={{ display: "block", zIndex: 1 }}>
                {line}
              </span>
            ))}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            {contact.subheading}
          </p>
          <motion.a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center text-2xl md:text-3xl font-mono font-medium text-foreground hover:underline focus:underline transition group"
            whileHover={{ x: 8 }}
          >
            {contact.email}
            <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="flex flex-col justify-center gap-12 lg:items-end">
          <InfoBlock label={contact.addressLabel}>
            <div className="text-muted-foreground leading-relaxed text-base font-mono">
              {contact.address.map((line: string, i: number) => (
                <span key={i} className={i === 0 ? "font-semibold" : undefined}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          </InfoBlock>
          <InfoBlock label={contact.socialsLabel} className="mb-0">
            <div className="flex gap-4">
              {contact.socials.map(
                (link: { name: string; logo: string; url: string }) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <Image
                      src={link.logo}
                      alt={link.name}
                      width={24}
                      height={24}
                      style={{ display: "inline-block" }}
                    />
                  </motion.a>
                ),
              )}
            </div>
          </InfoBlock>
        </div>
      </div>
    </SectionWrapper>
  );
}
