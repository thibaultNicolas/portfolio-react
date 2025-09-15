"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state - all elements hidden
      gsap.set(
        [
          greetingRef.current,
          nameRef.current,
          titleRef.current,
          descriptionRef.current,
          buttonRef.current,
          scrollRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      // Create timeline for staggered animation
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(greetingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          nameRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .to(
          scrollRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        );

      // Floating animation for scroll indicator
      gsap.to(scrollRef.current, {
        y: 10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div
            ref={greetingRef}
            className="text-lg md:text-xl text-gray-600 mb-6 font-light tracking-wide"
          >
            Hello, I'm
          </div>

          {/* Name */}
          <h1
            ref={nameRef}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 tracking-tight"
          >
            Nicolas Thibault
          </h1>

          {/* Title */}
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl text-gray-700 mb-8 font-light tracking-wide"
          >
            Web Developer
          </h2>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Creating modern, responsive web experiences with clean code and
            innovative design.
          </p>
        </div>

        {/* CTA Button */}
        <div ref={buttonRef} className="mb-16">
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span className="mr-2">View My Work</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-xs font-medium mb-3 tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-px h-8 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
