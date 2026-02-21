import { cn } from "@/lib/utils";

import { AnimatedSection } from "@/components/animated-section";
import type { SectionWrapperProps } from "@/types/section";

export function SectionWrapper({
  id,
  title,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("w-full py-20 lg:py-20", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          {title && (
            <h2 className="font-headline text-4xl md:text-5xl font-medium mb-12">
              {title}
            </h2>
          )}
        </AnimatedSection>
        {children}
      </div>
    </section>
  );
}
