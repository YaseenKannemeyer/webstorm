"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Timeline depends on the package. A Starter site typically takes 1-2 weeks, Business sites 3-4 weeks, and Premium/custom builds 6-10 weeks. We provide a detailed timeline at the start of your project.",
  },
  {
    q: "Do I need to provide content and images?",
    a: "You can provide your own content, or we can help. We offer copywriting and professional stock photography services. We also integrate with Unsplash for curated free images when needed.",
  },
  {
    q: "Will my website work on mobile?",
    a: "Absolutely. Every website we build is fully responsive and tested across devices and screen sizes — from the smallest mobile phones to large desktop monitors.",
  },
  {
    q: "What happens after my website is live?",
    a: "All packages include a support period. After that, we offer monthly maintenance plans covering updates, backups, security monitoring, and up to 2 hours of content changes per month.",
  },
  {
    q: "Can you help with Google ranking (SEO)?",
    a: "Yes. All sites include basic on-page SEO. Business and Premium packages include full technical SEO audits, keyword research, meta optimization, and schema markup. We also offer ongoing SEO as an add-on.",
  },
  {
    q: "What platforms do you build on?",
    a: "We work with Next.js / React, WordPress, Shopify, and WooCommerce — depending on what suits your needs.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      {/* 🌫️ Pattern: Ambient Gradient Blob Background System */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* 🔤 Pattern: High Contrast Hero Typography System */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 text-xs font-black tracking-[0.4em] uppercase mb-4"
          >
            Support
          </motion.p>

          <p className="text-slate-500 text-lg font-medium">
            Everything you need to know before we launch your vision.
          </p>
        </div>

        {/* 🧱 Pattern: Soft Elevation Card System (Accordions) */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`group transition-all duration-500 rounded-[2rem] border ${
                open === i
                  ? "bg-white shadow-xl shadow-blue-900/5 border-blue-100"
                  : "bg-white/40 backdrop-blur-md border-slate-200 hover:border-blue-200"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-8 py-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                    open === i ? "text-blue-600" : "text-slate-900"
                  }`}
                >
                  {faq.q}
                </span>

                {/* ⚡ Pattern: Staggered Micro-Interaction (Icon) */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    open === i
                      ? "bg-blue-600 text-white rotate-180"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
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
                      d={open === i ? "M20 12H4" : "M12 4v16m8-8H4"}
                    />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8">
                      <div className="h-[1px] w-full bg-slate-100 mb-6" />
                      <p className="text-slate-500 leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-slate-400 text-sm mt-12 font-bold uppercase tracking-widest"
        >
          Still curious?{" "}
          <a
            href="#contact"
            className="text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline transition-all"
          >
            Drop us a message →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
