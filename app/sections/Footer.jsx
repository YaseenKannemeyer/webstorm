"use client";
import React from "react";
import { motion } from "framer-motion";

const footerLinks = {
  Services: ["Web Design", "eCommerce", "SEO", "Maintenance", "CRO"],
  Company: ["About Us", "Portfolio", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      {/* 🌫️ Ambient Glow Backgrounds */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-100/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        {/* 🧱 Pattern: Soft Elevation CTA Card (Glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/60 backdrop-blur-md border border-white rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 shadow-xl shadow-blue-900/5"
        >
          <div className="text-center md:text-left">
            <h3 className="text-slate-900 text-3xl md:text-4xl font-black tracking-tight mb-2">
              Ready to launch{" "}
              <span className="text-blue-600 italic">your vision?</span>
            </h3>
            <p className="text-slate-500 font-medium">
              Join 150+ high-growth businesses who chose WebCraft.
            </p>
          </div>
          <motion.a
            href="#packages"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-blue-600 text-white font-black text-sm uppercase tracking-widest rounded-full shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all shrink-0"
          >
            Get Started Today
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-16 mb-16">
          {/* Brand col: Primary System */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 transition-transform group-hover:rotate-12">
                <span className="text-white font-black text-xl">W</span>
              </div>
              <span className="text-slate-900 text-2xl font-black tracking-tighter">
                Web<span className="text-blue-600">Craft</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8 font-medium">
              Building high-performance digital experiences for ambitious South
              African brands.
            </p>

            {/* Social Icons: Staggered Micro-Interaction style */}
            <div className="flex gap-3">
              {["𝕏", "in", "▶", "📸"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all text-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns: High Contrast Muted style */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-xs mb-6">
                {heading}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 text-sm font-medium hover:text-blue-600 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-blue-600 transition-all group-hover:w-3" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar: Neutral System */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-slate-200">
          <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">
            © 2026 WebCraft Studio.{" "}
            <span className="hidden sm:inline">All rights reserved.</span>
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
            Made with <span className="text-blue-600">♥</span> in Cape Town 🇿🇦
          </div>
        </div>
      </div>
    </footer>
  );
}
