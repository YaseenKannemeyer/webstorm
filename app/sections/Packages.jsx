"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

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
  },
  {
    name: "Premium",
    tagline: "The Full Creative Suite",
    onceOff: 24500,
    monthly: 1500,
    highlight: false,
    coverage: "12 Months Priority SLA",
    features: [
      "Unlimited Pages & Layouts",
      "Custom WebGL / 3D Experiences",
      "High-End Motion Design",
      "Headless CMS / E-commerce",
      "Professional Photography",
      "Technical SEO & A/B Testing",
      "Dedicated Account Manager",
    ],
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState("once-off");
  const [active, setActive] = useState(1);

  return (
    <section
      id="packages"
      className="relative py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* 🍏 Apple Ambient Glass Orbs */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-blue-200/40 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[45vw] h-[45vh] bg-indigo-200/30 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 w-full px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Flexible Investment
          </p>

          <p className="text-slate-500 max-w-xl mx-auto">
            Choose a package that fits your business growth stage.
          </p>

          {/* Toggle (Glass Pill) */}
          <div className="mt-10 inline-flex bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-1 shadow-lg shadow-black/5">
            {["once-off", "monthly"].map((mode) => (
              <button
                key={mode}
                onClick={() => setBilling(mode)}
                className={`px-6 py-2 rounded-xl text-sm font-semibold transition ${
                  billing === mode
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {mode === "once-off" ? "Once-Off" : "Monthly"}
              </button>
            ))}
          </div>
        </div>

        {/* FAN CAROUSEL */}
        <motion.div
          className="relative w-full flex items-center justify-center"
          style={{ perspective: "1400px", height: "640px" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50)
              setActive((a) => Math.min(a + 1, packages.length - 1));
            if (info.offset.x > 50) setActive((a) => Math.max(a - 1, 0));
          }}
        >
          {packages.map((pkg, i) => {
            const offset = i - active;
            const isActive = offset === 0;

            return (
              <motion.div
                key={pkg.name}
                onClick={() => setActive(i)}
                animate={{
                  rotateY: offset * 28,
                  x: offset * 260,
                  scale: isActive ? 1.08 : 0.82,
                  zIndex: isActive ? 20 : 5 - Math.abs(offset),
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                }}
                transition={{ type: "spring", stiffness: 160, damping: 20 }}
                className="absolute w-[280px] md:w-[340px] cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 🍏 Apple Glass Card */}
                <div
                  className={`relative rounded-3xl p-8 border backdrop-blur-2xl shadow-xl transition-all duration-300 overflow-hidden ${
                    pkg.highlight
                      ? "bg-white/80 border-blue-200 shadow-blue-200/30"
                      : "bg-white/60 border-white/40"
                  }`}
                >
                  {/* subtle light sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/10 pointer-events-none" />

                  {/* TITLE */}
                  <div className="mb-6 relative z-10">
                    <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                      {pkg.name}
                      {pkg.highlight && (
                        <Sparkles className="text-blue-600" size={16} />
                      )}
                    </h3>
                    <p className="text-sm text-slate-500">{pkg.tagline}</p>
                  </div>

                  {/* PRICE */}
                  <div className="mb-6 relative z-10">
                    <div className="text-4xl font-black text-slate-900">
                      R
                      {(billing === "once-off"
                        ? pkg.onceOff
                        : pkg.monthly
                      ).toLocaleString("en-ZA")}
                    </div>

                    {billing === "once-off" && (
                      <div className="text-xs text-blue-600 font-semibold mt-2 flex items-center gap-1">
                        <ShieldCheck size={14} />
                        {pkg.coverage}
                      </div>
                    )}
                  </div>

                  {/* FEATURES */}
                  <div className="space-y-3 mb-8 relative z-10">
                    {pkg.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <Check size={14} className="text-blue-600 mt-1" />
                        {f}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className={`w-full py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition relative z-10 ${
                      pkg.highlight
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200/40"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    Get Started <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* FOOTER */}
        <p className="text-center text-slate-500 text-sm mt-16">
          Standard turnaround: 2–4 weeks • All prices exclude VAT • 🇿🇦 South
          African rates
        </p>
      </div>
    </section>
  );
}
