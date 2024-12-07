export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceProps {
  icon: React.ComponentType;
  title: string;
  description: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface ProjectProps {
  title: string;
  category: string;
  description: string;
  image: string;
  stats: string[];
}