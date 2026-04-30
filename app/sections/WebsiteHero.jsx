"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Code, Layout, Sparkles } from "lucide-react";
import SoftAurora from "@/components/SoftAurora";

const WebsiteHero = () => {
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen(); // run on mount
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });

      // Reduce animation load slightly
      gsap.to(".feature-card", {
        y: -8,
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
      className="mx-auto px-4 sm:px-6 relative z-10 pt-10 sm:pt-24 md:pt-7 lg:pt-0 pb-12 sm:pb-20"
    >
      {/* ✅ Responsive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {" "}
        <div className="absolute inset-0 w-full h-full opacity-60">
          <SoftAurora
            bandHeight={isMobile ? 1.2 : 1.1}
            speed={0.6}
            scale={1.5}
            brightness={1}
            color1="#2563eb"
            color2="#a855f7"
            noiseFrequency={2.5}
            noiseAmplitude={1}
            bandSpread={1}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={1}
            enableMouseInteraction
            mouseInfluence={0.25}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-5 sm:mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Available for Q3 Projects
          </motion.div>

          {/* ✅ Fluid Typography */}
          <div className="relative hero-line mb-6 sm:mb-8">
            <h1
              className="relative z-10 font-black tracking-tight text-slate-950 leading-[1.05]
              text-[clamp(2.2rem,6vw,5rem)] md:text-[clamp(3rem,7vw,7rem)]"
            >
              We <span className="text-blue-600">Build</span> Digital
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900">
                Experiences.
              </span>
            </h1>
          </div>

          <p className="hero-line text-sm sm:text-base text-slate-600 mb-8 sm:mb-12 max-w-md sm:max-w-xl mx-auto leading-relaxed font-medium">
            Premium, high-performance websites designed to convert. We blend
            technical precision with world-class aesthetics.
          </p>

          {/* ✅ Buttons */}
          <div className="hero-line flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5 w-full max-w-md mx-auto">
            <motion.button
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto justify-center group px-6 sm:px-10 py-4 sm:py-5 bg-slate-950 text-white rounded-xl sm:rounded-2xl font-bold flex items-center gap-3 shadow-xl transition-all hover:bg-blue-600"
            >
              Start Your Project
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>

            <motion.button
              whileHover={{ backgroundColor: "white", scale: 1.02 }}
              className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-white/60 backdrop-blur-md border border-slate-200 text-slate-900 rounded-xl sm:rounded-2xl font-bold transition-all"
            >
              View Our Work
            </motion.button>
          </div>
        </div>

        {/* ✅ Feature Cards */}
        <div className="mt-16 sm:mt-24 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Layout size={22} />,
              title: "Immersive Design",
              desc: "Pixel-perfect interfaces tailored for impact.",
            },
            {
              icon: <Code size={22} />,
              title: "Clean Code",
              desc: "Future-proof builds using React & GSAP.",
            },
            {
              icon: <Sparkles size={22} />,
              title: "SEO Ready",
              desc: "Rank higher with performance-first tech.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="feature-card group p-6 sm:p-8 bg-white/50 backdrop-blur-xl border border-white/60 rounded-2xl sm:rounded-[2rem] shadow-lg hover:bg-white/80 transition-all duration-500"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-5 sm:mb-6 shadow-md group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default WebsiteHero;
