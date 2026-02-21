export interface ExperienceItemData {
  period: string;
  role: string;
  company: string;
  companyUrl: string;
  organization?: string;
  description: string;
  highlights?: string[];
  tags: string[];
}

export interface ExperienceSectionProps {
  experiences: ExperienceItemData[];
}
