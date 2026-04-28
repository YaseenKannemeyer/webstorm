"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Code, Layout, Sparkles } from "lucide-react";

const WebsiteHero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance for the text elements
      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      // Floating animation for the background decorative elements
      gsap.to(".floating-shape", {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-slate-50 overflow-hidden flex items-center"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-200 rounded-full blur-[100px] opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-sm mb-8"
          >
            <Sparkles size={16} />
            <span>Next-Gen Web Architecture</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="hero-title text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            <span className="inline-block">We</span>{" "}
            <span className="inline-block text-blue-600">Build</span>{" "}
            <span className="inline-block">Digital</span>
            <br />
            <span className="inline-block">Experiences.</span>
          </h1>

          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Premium, high-performance websites designed to convert. We blend
            technical precision with world-class aesthetics to give your brand
            the digital home it deserves.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-blue-200 hover:bg-blue-700 transition-colors"
            >
              Start Your Project <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ backgroundColor: "rgba(239, 246, 255, 1)" }}
              className="px-8 py-4 bg-transparent border border-slate-200 text-slate-700 rounded-xl font-bold"
            >
              View Our Work
            </motion.button>
          </div>
        </div>

        {/* Feature Cards Floating (Bottom Section) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Layout className="text-blue-500" />,
              title: "Immersive Design",
              desc: "Pixel-perfect interfaces.",
            },
            {
              icon: <Code className="text-blue-500" />,
              title: "Clean Code",
              desc: "Built with React & Framer.",
            },
            {
              icon: <Sparkles className="text-blue-500" />,
              title: "SEO Ready",
              desc: "Optimized for visibility.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-6 bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-slate-800">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteHero;
