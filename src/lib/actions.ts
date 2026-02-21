"use server";

import { portfolioData } from "@/lib/data";
import { z } from "zod";

const personalizeSchema = z.object({
  viewerProfile: z.string().min(3),
});

export async function personalizeContentAction(prevState: unknown, formData: FormData) {
  try {
    const validatedFields = personalizeSchema.safeParse({
      viewerProfile: formData.get("viewerProfile"),
    });

    if (!validatedFields.success) {
      return {
        success: false,
        error: "Invalid input. Please describe what you're looking for.",
        data: null,
      };
    }

    const personalizedIntro = portfolioData.about.description.join(" ");
    const workHistoryStr = portfolioData.works
      .map((w) => `${w.title}: ${w.description}`)
      .join("\n");
    const skillsStr = portfolioData.about.skills.map((s) => s.name).join(", ");
    const projectsStr = portfolioData.works
      .map((p) => `${p.title}: ${p.description}`)
      .join("\n");

    return {
      success: true,
      error: null,
      data: {
        personalizedIntro,
        tailoredWorkHistory: workHistoryStr,
        tailoredSkills: skillsStr,
        tailoredProjects: projectsStr,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Failed to personalize content. Please try again later.",
      data: null,
    };
  }
}
