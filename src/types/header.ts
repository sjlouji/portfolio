export interface HeaderSectionProps {
  name: string;
  title: string;
  logo: string;
  logoText?: string;
  sections?: { name: string; href: string }[];
}
