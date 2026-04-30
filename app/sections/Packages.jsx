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
    <section className="relative py-24 bg-[#F8FAFC] overflow-hidden min-h-screen flex flex-col justify-center">
      {/* 🌫 Ambient Background Blobs */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-blue-200 opacity-30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vh] bg-blue-100 opacity-40 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 w-full px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Flexible Investment
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            Ready to <span className="text-blue-600">Level Up?</span>
          </h2>

          <p className="text-slate-500 max-w-xl mx-auto">
            Choose a package that fits your business growth stage.
          </p>

          {/* Toggle */}
          <div className="mt-10 inline-flex bg-white border border-slate-200 rounded-2xl p-1 shadow-sm">
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
          style={{ perspective: "1200px", height: "620px" }}
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
                  rotateY: offset * 25,
                  x: offset * 240,
                  scale: isActive ? 1.05 : 0.85,
                  zIndex: isActive ? 10 : 5 - Math.abs(offset),
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                }}
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
                className="absolute w-[340px] cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* GLASS CARD */}
                <div
                  className={`rounded-3xl p-8 border transition-all duration-300 backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-2 ${
                    pkg.highlight
                      ? "bg-white border-blue-200 shadow-blue-100/50"
                      : "bg-white/70 border-slate-200"
                  }`}
                >
                  {/* TITLE */}
                  <div className="mb-6">
                    <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                      {pkg.name}
                      {pkg.highlight && (
                        <Sparkles className="text-blue-600" size={16} />
                      )}
                    </h3>
                    <p className="text-sm text-slate-500">{pkg.tagline}</p>
                  </div>

                  {/* PRICE */}
                  <div className="mb-6">
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
                  <div className="space-y-3 mb-8">
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
                    className={`w-full py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition ${
                      pkg.highlight
                        ? "bg-blue-600 text-white hover:bg-blue-700"
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
