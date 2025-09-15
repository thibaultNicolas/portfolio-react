"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = () => {
  const initGSAP = () => {
    if (typeof window === "undefined") return;

    // Set initial states for animations
    gsap.set(".gsap-fade-in", { opacity: 0, y: 20 });
    gsap.set(".gsap-fade-in-up", { opacity: 0, y: 30 });
    gsap.set(".gsap-fade-in-down", { opacity: 0, y: -30 });
    gsap.set(".gsap-slide-in-left", { opacity: 0, x: -30 });
    gsap.set(".gsap-slide-in-right", { opacity: 0, x: 30 });
    gsap.set(".gsap-scale-in", { opacity: 0, scale: 0.9 });
  };

  useEffect(() => {
    initGSAP();
  }, []);

  return { initGSAP };
};

export const useScrollAnimation = (
  trigger: string,
  animation: string,
  options: {
    duration?: number;
    delay?: number;
    ease?: string;
    stagger?: number;
  } = {}
) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !elementRef.current) return;

    const element = elementRef.current;
    const {
      duration = 0.8,
      delay = 0,
      ease = "power2.out",
      stagger = 0,
    } = options;

    let animationConfig: gsap.TweenVars = {
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    };

    switch (animation) {
      case "fadeIn":
        gsap.fromTo(
          element,
          { opacity: 0, y: 20 },
          { ...animationConfig, opacity: 1, y: 0 }
        );
        break;
      case "fadeInUp":
        gsap.fromTo(
          element,
          { opacity: 0, y: 30 },
          { ...animationConfig, opacity: 1, y: 0 }
        );
        break;
      case "fadeInDown":
        gsap.fromTo(
          element,
          { opacity: 0, y: -30 },
          { ...animationConfig, opacity: 1, y: 0 }
        );
        break;
      case "slideInLeft":
        gsap.fromTo(
          element,
          { opacity: 0, x: -30 },
          { ...animationConfig, opacity: 1, x: 0 }
        );
        break;
      case "slideInRight":
        gsap.fromTo(
          element,
          { opacity: 0, x: 30 },
          { ...animationConfig, opacity: 1, x: 0 }
        );
        break;
      case "scaleIn":
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0.9 },
          { ...animationConfig, opacity: 1, scale: 1 }
        );
        break;
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [trigger, animation, options]);

  return elementRef;
};

export const useStaggerAnimation = (
  selector: string,
  options: {
    duration?: number;
    delay?: number;
    ease?: string;
    stagger?: number;
  } = {}
) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(selector);
    const {
      duration = 0.6,
      delay = 0,
      ease = "power2.out",
      stagger = 0.1,
    } = options;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease,
        stagger,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, [selector, options]);

  return containerRef;
};

export const useHoverAnimation = (
  elementRef: React.RefObject<HTMLElement | null>,
  options: {
    scale?: number;
    duration?: number;
    ease?: string;
  } = {}
) => {
  useEffect(() => {
    if (typeof window === "undefined" || !elementRef.current) return;

    const element = elementRef.current;
    const { scale = 1.05, duration = 0.3, ease = "power2.out" } = options;

    const handleMouseEnter = () => {
      gsap.to(element, { scale, duration, ease });
    };

    const handleMouseLeave = () => {
      gsap.to(element, { scale: 1, duration, ease });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [elementRef, options]);
};
