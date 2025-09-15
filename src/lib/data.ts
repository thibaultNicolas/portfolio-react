import { Project, Skill } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration.",
    longDescription:
      "A full-stack e-commerce solution featuring product catalog, shopping cart, user authentication, and secure payment processing. Built with modern web technologies and optimized for performance.",
    image: "/assets/projets/brulerie.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "TailwindCSS", "Prisma"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    longDescription:
      "A comprehensive project management tool with drag-and-drop functionality, team collaboration features, and real-time synchronization. Built with React and WebSocket integration.",
    image: "/assets/projets/creox.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    featured: true,
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing modern web development skills.",
    longDescription:
      "A minimalist portfolio website built with Next.js, featuring smooth animations, responsive design, and optimized performance. Includes contact form and project showcase.",
    image: "/assets/projets/formation_csf.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "GSAP",
      "TailwindCSS",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://nicolasthibault.dev",
    featured: true,
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts.",
    longDescription:
      "An interactive weather application providing detailed forecasts, weather maps, and location-based data. Features clean UI and real-time weather updates.",
    image: "/assets/projets/nike.png",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-demo.vercel.app",
    featured: false,
  },
  {
    id: "5",
    title: "Blog Platform",
    description: "A headless CMS blog platform with markdown support.",
    longDescription:
      "A modern blog platform built with Next.js and headless CMS integration. Features markdown support, SEO optimization, and content management capabilities.",
    image: "/assets/projets/off.png",
    technologies: ["Next.js", "Contentful", "MDX", "TailwindCSS", "Vercel"],
    githubUrl: "https://github.com/yourusername/blog-platform",
    liveUrl: "https://blog-demo.vercel.app",
    featured: false,
  },
  {
    id: "6",
    title: "Social Media Dashboard",
    description: "A comprehensive social media analytics dashboard.",
    longDescription:
      "A powerful analytics platform for social media management with real-time data visualization, engagement metrics, and content scheduling features.",
    image: "/assets/projets/ouest.png",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://social-dashboard-demo.vercel.app",
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend Skills
  {
    name: "React",
    icon: "/assets/skills/atom.png",
    category: "frontend",
    level: 95,
  },
  {
    name: "Next.js",
    icon: "/assets/skills/atom.png",
    category: "frontend",
    level: 90,
  },
  {
    name: "TypeScript",
    icon: "/assets/skills/typescript.png",
    category: "frontend",
    level: 88,
  },
  {
    name: "JavaScript",
    icon: "/assets/skills/java-script.png",
    category: "frontend",
    level: 92,
  },
  {
    name: "HTML5",
    icon: "/assets/skills/html.png",
    category: "frontend",
    level: 95,
  },
  {
    name: "CSS3",
    icon: "/assets/skills/css-3.png",
    category: "frontend",
    level: 90,
  },
  {
    name: "TailwindCSS",
    icon: "/assets/skills/css-3.png",
    category: "frontend",
    level: 85,
  },
  {
    name: "Sass",
    icon: "/assets/skills/sass.png",
    category: "frontend",
    level: 80,
  },

  // Backend Skills
  {
    name: "Node.js",
    icon: "/assets/skills/atom.png",
    category: "backend",
    level: 85,
  },
  {
    name: "PHP",
    icon: "/assets/skills/php.png",
    category: "backend",
    level: 75,
  },
  {
    name: "C#",
    icon: "/assets/skills/c-sharp.png",
    category: "backend",
    level: 70,
  },

  // Tools & Technologies
  {
    name: "Git",
    icon: "/assets/skills/github.png",
    category: "tools",
    level: 90,
  },
  {
    name: "GitHub",
    icon: "/assets/skills/github.png",
    category: "tools",
    level: 88,
  },
  {
    name: "WordPress",
    icon: "/assets/skills/wordpress.png",
    category: "tools",
    level: 80,
  },
  {
    name: "Shopify",
    icon: "/assets/skills/shopify.png",
    category: "tools",
    level: 75,
  },
  {
    name: "PrestaShop",
    icon: "/assets/skills/prestashop.png",
    category: "tools",
    level: 70,
  },
  {
    name: "Figma",
    icon: "/assets/skills/figma.png",
    category: "tools",
    level: 85,
  },
  {
    name: "Adobe XD",
    icon: "/assets/skills/xd.png",
    category: "tools",
    level: 80,
  },
  {
    name: "Photoshop",
    icon: "/assets/skills/photoshop.png",
    category: "tools",
    level: 75,
  },
  {
    name: "Illustrator",
    icon: "/assets/skills/illustrator.png",
    category: "tools",
    level: 70,
  },
];

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "mailto:your.email@example.com",
  twitter: "https://twitter.com/yourusername",
};
