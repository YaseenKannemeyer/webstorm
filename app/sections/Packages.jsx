"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, ShieldCheck } from "lucide-react";

const packages = [
  {
    name: "Starter",
    tagline: "Essential digital presence",
    onceOff: 6500,
    monthly: 450,
    highlight: false,
    coverage: "3 Months Free Support",
    features: [
      "5-Page High-Speed Site",
      "Free .co.za Domain",
      "Standard Hosting",
      "Basic SEO Setup",
      "SSL Certificate",
    ],
    cta: "Start Small",
  },
  {
    name: "Business",
    tagline: "Performance & Growth",
    onceOff: 12500,
    monthly: 850,
    highlight: true,
    coverage: "6 Months Free Support",
    features: [
      "Up to 15 Pages",
      "Managed Cloud Hosting",
      "Advanced SEO",
      "CMS / Blog Integration",
      "Custom Animations",
      "Monthly Analytics",
    ],
    cta: "Most Popular",
  },
  {
    name: "Premium",
    tagline: "The Full Creative Suite",
    onceOff: 24500,
    monthly: 1500,
    highlight: false,
    coverage: "12 Months Free Support",
    features: [
      "Unlimited Pages",
      "Professional Photography",
      "High-End 3D/Motion Design",
      "Technical SEO Optimization",
      "E-commerce Ready",
      "Priority 24/7 Support",
    ],
    cta: "Scale Now",
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState("once-off");

  return (
    <section className="relative py-24 px-6 bg-[#F8FAFC] overflow-hidden">
      {/* 🌫️ Pattern: Ambient Glow Background System */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#DBEAFE] blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-[#DBEAFE] blur-[100px] opacity-40 pointer-events-none" />

      {/* 📐 Pattern: Centered Container SaaS Grid Layout */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#2563EB] text-xs font-black uppercase tracking-[0.3em] mb-4"
          >
            Flexible Investment
          </motion.p>

          {/* 🔤 Pattern: High Contrast Hero Typography */}
          <h2 className="text-5xl md:text-7xl font-extrabold text-[#0F172A] mb-8 tracking-tight">
            Ready to <span className="text-[#2563EB]">Level Up?</span>
          </h2>

          {/* Pricing Toggle */}
          <div className="inline-flex bg-white border border-[#E2E8F0] p-1.5 rounded-2xl shadow-sm">
            {["once-off", "monthly"].map((mode) => (
              <button
                key={mode}
                onClick={() => setBilling(mode)}
                className={`relative px-8 py-3 rounded-xl text-sm font-bold transition-all z-10 ${
                  billing === mode
                    ? "text-white"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                {billing === mode && (
                  <motion.div
                    layoutId="activePricingTab"
                    className="absolute inset-0 bg-[#2563EB] rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {mode === "once-off" ? "Once-Off" : "Monthly"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              /* 🧱 Pattern: Component Styling (Rounded-3xl, Glassmorphism Lite) */
              className={`group flex flex-col rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-2 ${
                pkg.highlight
                  ? "bg-[#0F172A] text-white shadow-2xl scale-105 ring-4 ring-[#2563EB]/10"
                  : "bg-white/60 backdrop-blur-md border border-[#E2E8F0] hover:border-[#2563EB]/30 text-[#0F172A] shadow-sm hover:shadow-xl"
              }`}
            >
              <div className="mb-8">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    {pkg.name}
                  </h3>
                  {pkg.highlight && (
                    <span className="bg-[#2563EB] text-[10px] text-white font-black px-3 py-1 rounded-full uppercase">
                      Best Value
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm mt-2 ${pkg.highlight ? "text-[#64748B]" : "text-[#64748B]"}`}
                >
                  {pkg.tagline}
                </p>
              </div>

              <div className="mb-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={billing}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black tracking-tighter">
                        R
                        {(billing === "once-off"
                          ? pkg.onceOff
                          : pkg.monthly
                        ).toLocaleString("en-ZA")}
                      </span>
                      <span className="text-[#64748B] font-bold text-sm">
                        {billing === "once-off" ? "" : "/mo"}
                      </span>
                    </div>
                    {billing === "once-off" && (
                      <div className="mt-3 flex items-center gap-2 text-[#2563EB] text-xs font-bold uppercase tracking-wider">
                        <ShieldCheck size={14} strokeWidth={3} /> {pkg.coverage}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {pkg.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        pkg.highlight
                          ? "bg-[#2563EB]/20 text-[#2563EB]"
                          : "bg-[#EFF6FF] text-[#2563EB]"
                      }`}
                    >
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-medium opacity-90">{f}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                  pkg.highlight
                    ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-lg shadow-blue-600/20"
                    : "bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] hover:bg-white hover:border-[#2563EB]"
                }`}
              >
                {pkg.cta} <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#64748B] text-sm mt-16 leading-relaxed">
          Standard turnaround: 2-4 weeks. <br />
          All prices exclude VAT. South African local rates apply. 🇿🇦
        </p>
      </div>
    </section>
  );
}
