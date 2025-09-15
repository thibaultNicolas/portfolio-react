"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { Github, Linkedin, Mail, ArrowUp, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in animation
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );

      // Stagger animation for content
      gsap.fromTo(
        contentRef.current?.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/nicolasthibault",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/nicolasthibault",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:hello@nicolasthibault.dev",
      label: "Email",
    },
  ];

  const navigationLinks = [
    { label: "Home", href: "#home", action: () => scrollToSection("home") },
    {
      label: "Projects",
      href: "#projects",
      action: () => scrollToSection("projects"),
    },
    { label: "About", href: "#about", action: () => scrollToSection("about") },
    {
      label: "Contact",
      href: "#contact",
      action: () => scrollToSection("contact"),
    },
  ];

  const quickLinks = [
    { label: "Resume", href: "/resume.pdf" },
    { label: "Blog", href: "/blog" },
    { label: "Services", href: "/services" },
    { label: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-blue-50 border-t border-blue-100 py-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={contentRef} className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Nicolas Thibault
              </div>
              <p className="text-gray-600 text-lg font-light mb-6 leading-relaxed max-w-md">
                Full-stack web developer passionate about creating exceptional
                digital experiences. I specialize in modern web technologies and
                clean, efficient code.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="text-sm">Montreal, Canada</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="text-sm">hello@nicolasthibault.dev</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Menu */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={link.action}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-blue-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-500 text-sm">
                © 2024 Nicolas Thibault. All rights reserved.
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="group flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                <span className="text-sm font-medium">Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
