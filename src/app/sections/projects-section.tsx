import { useState } from "react";
import { motion } from "framer-motion";

import { Pagination } from "@/components/pagination";
import { SectionWrapper } from "@/app/components/section-wrapper";
import type { Project, ProjectsSectionProps } from "@/types/project";
import { PAGE_SIZE } from "@/lib/data";

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const startIdx = (page - 1) * PAGE_SIZE;
  const visibleProjects = projects.slice(startIdx, startIdx + PAGE_SIZE);

  return (
    <SectionWrapper id="works" title="Works">
      <div className="divide-y">
        {visibleProjects.map((project: Project) => {
          return (
            <div
              key={project.title}
              className="flex flex-col transition-colors py-6"
            >
              <div className="flex items-start">
                <div className="w-24 flex-shrink-0 text-xs uppercase text-gray-400 pt-1">
                  {project.date}
                </div>
                <div className="flex-1">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xl md:text-xl font-mono font-medium text-gray-900 hover:underline focus:underline transition group"
                    whileHover={{ x: 8 }}
                  >
                    {project.title}
                  </motion.a>
                  <div className="font-sans text-[17px] text-gray-600 mb-2 mt-2">
                    {project.description}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    {project.tags.map((tag) => (
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
        })}
      </div>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </SectionWrapper>
  );
}
