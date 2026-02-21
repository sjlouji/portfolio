import React, { useRef } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import type { ResumeData } from "@/types/resume";
import { cn } from "@/lib/utils";
import { initialData } from "@/lib/data";
import { useReactToPrint } from "react-to-print";

interface ResumePreviewProps {
  data: ResumeData;
}

const SectionTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <h2
    className={cn(
      "text-xs font-bold uppercase tracking-widest text-muted-foreground pb-1 mb-2 border-b border-border",
      className
    )}
  >
    {children}
  </h2>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  const {
    personalDetails,
    summary,
    experience,
    education,
    achievements,
    skills,
    passions,
    courses,
  } = data;

  return (
    <motion.div
      className="text-foreground font-body leading-normal A4-size p-8 print:shadow-none shadow-xl print:p-6 w-full h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header variants={sectionVariants} className="mb-4 text-left">
        <h1 className="text-3xl font-bold font-headline text-foreground tracking-wider">
          {personalDetails.name}
        </h1>
        <p className="text-base font-medium text-secondary-foreground mt-1">
          {personalDetails.title}
        </p>
        <div className="flex items-center gap-x-4 text-xs text-muted-foreground mt-2 flex-wrap">
          <motion.div
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Phone size={12} />
            <a
              href={`tel:${personalDetails.phone.replace(/\s/g, "")}`}
              className="text-secondary-foreground animated-link transition-colors"
            >
              {personalDetails.phone}
            </a>
          </motion.div>
          <motion.div
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Mail size={12} />
            <a
              href={`mailto:${personalDetails.email}`}
              className="text-secondary-foreground animated-link transition-colors"
            >
              {personalDetails.email}
            </a>
          </motion.div>
          <motion.div
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Linkedin size={12} />
            <a
              href={`https://${personalDetails.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground animated-link transition-colors"
            >
              {personalDetails.linkedin}
            </a>
          </motion.div>
          <div className="flex items-center gap-1.5">
            <MapPin size={12} />
            <span>{personalDetails.location}</span>
          </div>
        </div>
      </motion.header>

      <div className="grid grid-cols-12 gap-x-8 mt-4">
        <div className="col-span-8 space-y-4">
          <motion.section
            variants={sectionVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="pb-4 border-b border-dashed"
          >
            <SectionTitle>Summary</SectionTitle>
            <p className="text-xs text-muted-foreground">{summary}</p>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="pb-4 border-b border-dashed"
          >
            <SectionTitle>Experience</SectionTitle>
            <div className="space-y-3">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <h3 className="text-sm font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-xs font-medium text-secondary-foreground">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-x-4 text-[10px] text-muted-foreground my-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={11} />
                      <span>
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={11} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-3.5 space-y-0.5 text-xs text-muted-foreground">
                    {exp.description.map((point, index) => (
                      <li key={index} className="pl-1">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="text-xs font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-[10px] font-medium text-secondary-foreground">
                    {edu.university}
                  </p>
                  <div className="flex items-center gap-x-4 text-[10px] text-muted-foreground mt-0.5">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={11} />
                      <span>
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        <div className="col-span-4 space-y-4">
          <motion.section
            variants={sectionVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="pb-4 border-b border-dashed"
          >
            <SectionTitle>Achievements</SectionTitle>
            <div className="space-y-2">
              {achievements.map((ach) => (
                <div key={ach.id} className="flex items-start gap-2.5">
                  <div>
                    <h4 className="font-bold text-xs text-foreground">
                      {ach.title}
                    </h4>
                    <p className="text-[10px] text-muted-foreground">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="pb-4 border-b border-dashed"
          >
            <SectionTitle>Skills</SectionTitle>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="pb-4 border-b border-dashed"
          >
            <SectionTitle>Courses</SectionTitle>
            <div className="space-y-1.5">
              {courses.map((course) => (
                <div key={course.id}>
                  <h4 className="font-bold text-xs text-foreground">
                    {course.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {course.institution}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <SectionTitle>Passions</SectionTitle>
            <div className="space-y-2">
              {passions.map((passion) => (
                <div key={passion.id} className="flex items-start gap-2.5">
                  <div>
                    <h4 className="font-bold text-xs text-foreground">
                      {passion.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {passion.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export function ResumeSection() {
  const previewRef = useRef<HTMLDivElement>(null);

  const pageStyle = `
  @media print {
    @page {
      size: A4;
      margin: 0;
    }
    html, body {
      -webkit-print-color-adjust: exact;
    }
    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
    }
    [style*="opacity: 0"] {
      opacity: 1 !important;
    }
    [style*="transform:"] {
      transform: none !important;
    }
    .A4-size {
      width: 100% !important;
      max-width: none !important;
      aspect-ratio: auto !important;
      box-shadow: none !important;
      border-radius: 0 !important;
    }
    .animated-link::after {
      display: none !important;
    }
  }
`;
  const reactToPrintFn = useReactToPrint({
    contentRef: previewRef,
    pageStyle,
  });

  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-5xl mx-auto mb-6 flex justify-end">
          <button onClick={reactToPrintFn}>Download PDF</button>
        </div>
        <div className="w-full max-w-5xl mx-auto bg-white rounded-lg">
          <div ref={previewRef} className="w-[210mm] h-[297mm] mx-auto">
            <ResumePreview data={initialData} />
          </div>
        </div>
      </div>
    </div>
  );
}
