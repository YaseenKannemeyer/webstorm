"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Code, Layout, Sparkles } from "lucide-react";
import SoftAurora from "@/components/SoftAurora";

const WebsiteHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.to(".feature-card", {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#f8fafc] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* FIX 1: Background Aurora 
          Moved outside the content container so it can span the full width of the screen.
          Removed overflow-hidden to allow the blur to bleed naturally.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-full h-[500px] opacity-60">
          <SoftAurora
            speed={0.6}
            scale={1.8}
            brightness={1.5}
            color1="#2563eb"
            color2="#a855f7"
            noiseFrequency={2}
            enableMouseInteraction
            mouseInfluence={1.1}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Available for Q3 Projects
          </motion.div>

          {/* FIX 2: Simplified Heading Wrapper */}
          <div className="relative hero-line mb-8">
            <h1 className="relative z-10 text-5xl md:text-8xl font-black tracking-tighter text-slate-950 leading-[0.95]">
              We <span className="text-blue-600">Build</span> Digital
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900">
                Experiences.
              </span>
            </h1>
          </div>

          <p className="hero-line text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Premium, high-performance websites designed to convert. We blend
            technical precision with world-class aesthetics.
          </p>

          <div className="hero-line flex flex-col sm:flex-row items-center justify-center gap-5">
            <motion.button
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 bg-slate-950 text-white rounded-2xl font-bold flex items-center gap-3 shadow-2xl shadow-blue-200/50 transition-all hover:bg-blue-600"
            >
              Start Your Project
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>

            <motion.button
              whileHover={{ backgroundColor: "white", scale: 1.02 }}
              className="px-10 py-5 bg-white/50 backdrop-blur-md border border-slate-200 text-slate-900 rounded-2xl font-bold transition-all"
            >
              View Our Work
            </motion.button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Layout size={24} />,
              title: "Immersive Design",
              desc: "Pixel-perfect interfaces tailored for impact.",
            },
            {
              icon: <Code size={24} />,
              title: "Clean Code",
              desc: "Future-proof builds using React & GSAP.",
            },
            {
              icon: <Sparkles size={24} />,
              title: "SEO Ready",
              desc: "Rank higher with performance-first tech.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="feature-card group p-8 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-xl shadow-slate-200/40 hover:bg-white/80 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default WebsiteHero;
