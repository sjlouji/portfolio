export interface HeroSectionProps {
  name: string;
  title: string;
  subTitle: string;
  contact?: { socials?: { name: string; url: string }[] };
}
