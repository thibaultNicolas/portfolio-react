export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools";
  level: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}

export interface Locale {
  locale: "en" | "fr";
  messages: Record<string, any>;
}
