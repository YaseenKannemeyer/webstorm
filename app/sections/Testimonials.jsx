"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Owner, Luxe Jewellery Co.",
    quote:
      "WebCraft completely transformed our online presence. Our sales tripled within 3 months of launching the new site. The design is stunning and my customers constantly compliment it.",
    rating: 5,
    avatar: "SM",
    accent: "bg-blue-600",
  },
  {
    name: "James T.",
    role: "Partner, Apex Law Firm",
    quote:
      "Professional, responsive, and genuinely talented. They understood our brand immediately and delivered a site that communicates trust and authority. Our enquiries are up 4×.",
    rating: 5,
    avatar: "JT",
    accent: "bg-indigo-500",
  },
  {
    name: "Priya N.",
    role: "Founder, FitPulse",
    quote:
      "The landing page they built for our app launch achieved a 62% conversion rate. I've worked with agencies before — WebCraft is in a different league entirely.",
    rating: 5,
    avatar: "PN",
    accent: "bg-cyan-500",
  },
  {
    name: "Andre V.",
    role: "Director, Cape Harvest Wines",
    quote:
      "We were skeptical about investing in a new website but the ROI has been extraordinary. The site generated over R2 million in the first year. Worth every cent.",
    rating: 5,
    avatar: "AV",
    accent: "bg-blue-400",
  },
  {
    name: "Lisa K.",
    role: "Architect, Studio Marin",
    quote:
      "As someone who cares deeply about aesthetics, I was worried no agency would match my vision. WebCraft exceeded every expectation. The site won us a design award.",
    rating: 5,
    avatar: "LK",
    accent: "bg-slate-800",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* 🌫️ Pattern: Ambient Gradient Blob Background System */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* 🔤 Pattern: High Contrast Hero Typography System */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 text-xs font-black tracking-[0.4em] uppercase mb-4"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-900 text-5xl md:text-7xl font-black tracking-tight leading-[0.9]"
          >
            Don't Take Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 italic">
              Word for It
            </span>
          </motion.h2>
        </div>

        {/* 🧱 Pattern: Soft Elevation Card System (Glassmorphism Lite) */}
        <div className="relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 border border-white shadow-2xl shadow-blue-900/5 relative overflow-hidden"
            >
              {/* Massive Decorative Quote */}
              <div className="absolute top-8 right-12 text-blue-600/5 text-[12rem] font-black leading-none select-none">
                ”
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-slate-900 text-2xl md:text-3xl font-bold tracking-tight leading-snug mb-10 relative z-10">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-5">
                <div
                  className={`w-14 h-14 rounded-2xl ${t.accent} flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-200`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-slate-900 font-black tracking-tight text-lg">
                    {t.name}
                  </p>
                  <p className="text-slate-500 font-medium text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ⚡ Pattern: Staggered Micro-Interaction (Dots) */}
        <div className="flex flex-wrap justify-center gap-3">
          {testimonials.map((testimonial, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`group flex items-center gap-3 px-5 py-4 rounded-2xl border transition-all duration-300 ${
                active === i
                  ? "border-blue-200 bg-white shadow-lg shadow-blue-900/5 translate-y-[-4px]"
                  : "border-slate-100 bg-white/40 hover:bg-white hover:border-blue-100 hover:translate-y-[-2px]"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg ${testimonial.accent} flex items-center justify-center text-white text-[10px] font-black shrink-0 transition-transform group-hover:scale-110`}
              >
                {testimonial.avatar}
              </div>
              <div className="text-left hidden sm:block">
                <p
                  className={`text-xs font-black uppercase tracking-widest ${active === i ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"}`}
                >
                  {testimonial.name}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
