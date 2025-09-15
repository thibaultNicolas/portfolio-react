import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={footerRef} className="bg-dark-navy text-white">
      <div className="w-full px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-3xl font-bold text-gradient mb-4">
                Thibault.
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Full-stack developer passionate about creating beautiful,
                functional, and user-centered digital experiences.
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    name: "GitHub",
                    href: "https://github.com/nicolasthibault",
                    icon: "🐙",
                  },
                  {
                    name: "LinkedIn",
                    href: "https://linkedin.com/in/nicolas-thibault",
                    icon: "💼",
                  },
                  {
                    name: "Twitter",
                    href: "https://twitter.com/nicolasthibault",
                    icon: "🐦",
                  },
                  {
                    name: "Email",
                    href: "mailto:nicolasthibault@hotmail.ca",
                    icon: "📧",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {["About", "Skills", "Portfolio", "Contact"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() =>
                        document
                          .getElementById(link.toLowerCase())
                          .scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-pale-blue">📧</span>
                  <a
                    href="mailto:nicolasthibault@hotmail.ca"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    nicolasthibault@hotmail.ca
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-pale-blue">📱</span>
                  <a
                    href="tel:+1581882798"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    (581) 888-2798
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-pale-blue">📍</span>
                  <span className="text-gray-300">Quebec, Canada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Nicolas Thibault. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
