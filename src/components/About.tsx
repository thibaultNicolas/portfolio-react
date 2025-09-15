"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { Code, Database, Globe, Zap, CheckCircle } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll trigger animations
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

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      if (skillsRef.current?.children) {
        gsap.fromTo(
          skillsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        "React",
        "Vue.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Sass",
        "Less",
        "Bootstrap",
        "Material UI",
        "shadcn/ui",
        "Tailwind CSS",
        "GSAP",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express",
        "C#",
        "PHP",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "REST APIs",
        "Postman",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Globe,
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "Vercel",
        "Git",
        "CI/CD",
        "WordPress",
        "Shopify",
        "PrestaShop",
        "Figma",
        "Photoshop",
        "Illustrator",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const achievements = [
    "5+ years of web development experience",
    "50+ successful projects delivered",
    "Expert in modern JavaScript frameworks",
    "Strong focus on performance and accessibility",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 -left-20 w-32 h-32 bg-purple-100 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Passionate developer with a focus on modern web technologies
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* About Content */}
          <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I&apos;m a dedicated web developer with expertise in React,
                Next.js, and modern web technologies. I love creating beautiful,
                functional, and user-friendly applications that make a
                difference.
              </p>

              {/* Achievements */}
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                  src="/assets/computer.jpg"
                  alt="Nicolas Thibault working on computer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div
            ref={skillsRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {category.title}
                </h3>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer">
              <Zap className="w-5 h-5" />
              <span>Let&apos;s work together</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
