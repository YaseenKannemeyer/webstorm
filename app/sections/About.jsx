"use client";
import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    icon: "◈",
    title: "Results-Driven",
    desc: "We measure success in leads, sales, and growth — not just aesthetics.",
  },
  {
    icon: "✦",
    title: "Transparent",
    desc: "Clear timelines, honest pricing, and open communication throughout.",
  },
  {
    icon: "◉",
    title: "Long-term Partners",
    desc: "We're invested in your success — not just your launch day.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      {/* 🌫️ Pattern: Ambient Gradient Blob Background System */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-50 blur-[100px] rounded-full pointer-events-none" />

      {/* 📐 Pattern: Centered Container SaaS Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left visual: 🧱 Soft Elevation Card System + 🧊 Glassmorphism Lite */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Card: Glassmorphism */}
              <div className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/20 shadow-xl shadow-blue-900/5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                    <span className="text-xl text-white font-bold">W</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-extrabold tracking-tight">
                      WebCraft Studio
                    </p>
                    <p className="text-slate-500 text-sm">
                      Cape Town, South Africa
                    </p>
                  </div>
                </div>

                {/* Team Grid: ⚡ Staggered Micro-Interaction style */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    {
                      init: "AT",
                      color: "bg-blue-600",
                      name: "Alex T.",
                      role: "Dev",
                    },
                    {
                      init: "SR",
                      color: "bg-blue-400",
                      name: "Sam R.",
                      role: "Design",
                    },
                    {
                      init: "ML",
                      color: "bg-indigo-400",
                      name: "Maya L.",
                      role: "SEO",
                    },
                  ].map((m, i) => (
                    <motion.div
                      key={m.init}
                      whileHover={{ y: -5 }}
                      className="bg-white/80 rounded-2xl p-4 text-center border border-slate-100 shadow-sm"
                    >
                      <div
                        className={`w-10 h-10 ${m.color} rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-xs`}
                      >
                        {m.init}
                      </div>
                      <p className="text-slate-900 text-[10px] font-bold uppercase tracking-wider">
                        {m.name}
                      </p>
                      <p className="text-slate-400 text-[9px] uppercase tracking-tighter">
                        {m.role}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="border-t border-slate-100 pt-8 grid grid-cols-3 gap-4 text-center">
                  {[
                    ["5+", "Years"],
                    ["150+", "Projects"],
                    ["98%", "Satisfied"],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <p className="text-3xl font-black text-blue-600 tracking-tighter">
                        {v}
                      </p>
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                        {l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Award Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -right-4 bg-white rounded-2xl p-5 shadow-2xl shadow-blue-900/10 border border-blue-50"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <p className="text-slate-900 font-black text-sm">
                      Top Agency 2026
                    </p>
                    <p className="text-slate-500 text-[10px] font-medium italic">
                      Clutch.co Platinum Winner
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content: 🔤 High Contrast Hero Typography System */}
          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 text-xs font-black tracking-[0.3em] uppercase mb-4"
            >
              Our Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-slate-900 text-5xl md:text-7xl font-black tracking-tight leading-[0.9] mb-8"
            >
              Built by People Who <br />
              <span className="text-blue-600 italic">Love the Web</span>
            </motion.h2>

            <p className="text-slate-600 text-xl leading-relaxed mb-6 font-medium">
              WebCraft Studio is a boutique digital agency based in Cape Town.
              We specialize in building websites that don't just look good —
              they work hard for your business.
            </p>

            <p className="text-slate-500 leading-relaxed mb-10">
              Founded in 2019, we’ve helped over 150 businesses launch and grow
              their digital presence. Our team means you always deal with senior
              experts who care about your results.
            </p>

            <div className="space-y-6 mb-12">
              {values.map((v) => (
                <div key={v.title} className="flex gap-5 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                    <span className="text-lg">{v.icon}</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold mb-1">{v.title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pattern Primary Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 text-white font-black rounded-full shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all"
            >
              WORK WITH US
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
