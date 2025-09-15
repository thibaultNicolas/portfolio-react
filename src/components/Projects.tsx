"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll trigger for section entrance
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      if (projectsRef.current?.children) {
        gsap.fromTo(
          projectsRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Sample projects data - you can replace with real data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.",
      tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website with smooth animations and clean design.",
      tech: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/300",
    },
  ];

  const handleProjectHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleProjectLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              onMouseEnter={handleProjectHover}
              onMouseLeave={handleProjectLeave}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group/link"
                  >
                    <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 group/link"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
