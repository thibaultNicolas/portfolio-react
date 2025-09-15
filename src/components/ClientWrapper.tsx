"use client";

import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

/**
 * ClientWrapper component that wraps all components that need NextIntl context
 * This ensures that useTranslations() works properly in all child components
 */
export default function ClientWrapper() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
