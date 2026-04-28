"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Starter",
    tagline: "Perfect for small businesses",
    onceOff: 4999,
    monthly: 299,
    highlight: false,
    features: [
      "5-page website",
      "Mobile responsive",
      "Contact form",
      "Basic SEO",
      "SSL certificate",
    ],
    notIncluded: ["eCommerce", "Custom animations"],
    cta: "Start Small",
  },
  {
    name: "Business",
    tagline: "For growing brands",
    onceOff: 9999,
    monthly: 599,
    highlight: true,
    features: [
      "15-page website",
      "Custom Figma design",
      "CMS / Blog",
      "Advanced SEO",
      "Custom animations",
      "Newsletter setup",
    ],
    notIncluded: ["eCommerce"],
    cta: "Most Popular",
  },
  {
    name: "Premium",
    tagline: "Full digital presence",
    onceOff: 19999,
    monthly: 999,
    highlight: false,
    features: [
      "Unlimited pages",
      "eCommerce ready",
      "Custom API builds",
      "Priority support",
      "Conversion optimization",
    ],
    notIncluded: [],
    cta: "Scale Now",
  },
];

function formatPrice(n) {
  return `R${n.toLocaleString("en-ZA")}`;
}

export default function Packages() {
  const [billing, setBilling] = useState("once-off");

  return (
    <section
      id="packages"
      className="py-24 px-6 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 text-sm font-bold tracking-[0.2em] uppercase mb-4"
          >
            Transparent Pricing
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Ready to <span className="text-blue-600">Level Up?</span>
          </h2>

          {/* Toggle with Framer Motion Layout */}
          <div className="relative inline-flex bg-white border border-slate-200 p-1.5 rounded-2xl shadow-sm">
            {["once-off", "monthly"].map((mode) => (
              <button
                key={mode}
                onClick={() => setBilling(mode)}
                className={`relative px-8 py-3 rounded-xl text-sm font-bold transition-colors z-10 ${
                  billing === mode
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {billing === mode && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {mode === "once-off" ? "Once-Off" : "Monthly Retainer"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col rounded-[2.5rem] p-10 transition-all duration-500 ${
                pkg.highlight
                  ? "bg-slate-900 text-white scale-105 shadow-2xl shadow-blue-200 ring-4 ring-blue-600/20"
                  : "bg-white border border-slate-200 hover:border-blue-200 text-slate-900 shadow-sm"
              }`}
            >
              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  {pkg.highlight && (
                    <span className="bg-blue-600 text-[10px] text-white font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                      Best Value
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm ${pkg.highlight ? "text-slate-400" : "text-slate-500"}`}
                >
                  {pkg.tagline}
                </p>
              </div>

              <div className="mb-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={billing}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="text-5xl font-black tracking-tight">
                      {billing === "once-off"
                        ? formatPrice(pkg.onceOff)
                        : formatPrice(pkg.monthly)}
                    </span>
                    <span
                      className={`text-sm font-bold ${pkg.highlight ? "text-slate-500" : "text-slate-400"}`}
                    >
                      {billing === "once-off" ? "/once" : "/mo"}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {pkg.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${pkg.highlight ? "bg-blue-600/20 text-blue-400" : "bg-blue-50 text-blue-600"}`}
                    >
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-medium">{f}</span>
                  </div>
                ))}
                {pkg.notIncluded.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 opacity-30 grayscale"
                  >
                    <X size={16} />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                  pkg.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {pkg.cta} <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-12">
          All prices exclude VAT. South African local rates apply. 🇿🇦
        </p>
      </div>
    </section>
  );
}
