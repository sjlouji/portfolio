"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

import { SectionWrapper } from "@/app/components/section-wrapper";
import type {
  ExperienceSectionProps,
  ExperienceItemData,
} from "@/types/experience";

function ExperienceRow({
  exp,
  isExpanded,
  onToggle,
}: {
  exp: ExperienceItemData;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const hasDetail = exp.highlights?.length;
  return (
    <div className="flex flex-col transition-colors py-6">
      <div className="flex items-start">
        <div className="w-30 flex-shrink-0 text-xs uppercase text-gray-400 pt-1">
          {exp.period}
        </div>
        <div className="flex-1 ml-10">
          <motion.a
            href={exp.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xl md:text-xl font-mono font-medium text-gray-900 hover:underline focus:underline transition group"
            whileHover={{ x: 8 }}
          >
            {exp.role}
            <span className="text-gray-500 font-normal">
              {" · "}
              {exp.company}
              {exp.organization ? ` · ${exp.organization}` : ""}
            </span>
            <ExternalLink className="ml-1 h-3.5 w-3.5 opacity-70" />
          </motion.a>
          <div className="font-sans text-[17px] text-gray-600 mb-2 mt-2">
            {exp.description}
          </div>
          <AnimatePresence initial={false}>
            {isExpanded && hasDetail && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <ul className="list-disc list-outside ml-4 mt-3 space-y-2 font-sans text-[17px] text-gray-600">
                  {exp.highlights!.map((item, i) => (
                    <li key={i} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
          {hasDetail ? (
            <button
              type="button"
              onClick={onToggle}
              className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-gray-500 hover:text-gray-900 transition-colors"
            >
              {isExpanded ? (
                <>
                  Hide details <ChevronUp className="h-3.5 w-3.5" />
                </>
              ) : (
                <>
                  View full role <ChevronDown className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          ) : null}
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {exp.tags.map((tag) => (
              <motion.span
                key={tag}
                className="inline-block bg-gray-200 text-xs md:text-sm font-mono text-gray-700 rounded px-2 py-0.5 leading-tight cursor-pointer"
                whileHover={{
                  scale: 1.12,
                  backgroundColor: "#dbeafe",
                  color: "#1e40af",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="divide-y">
        {experiences.map((exp) => {
          const key = `${exp.company}-${exp.role}-${exp.period}`;
          return (
            <ExperienceRow
              key={key}
              exp={exp}
              isExpanded={expandedKey === key}
              onToggle={() =>
                setExpandedKey((k) => (k === key ? null : key))
              }
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
}
