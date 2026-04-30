"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500`}
    >
      {/* 🍏 Apple Glass Layer */}
      <div
        className={`backdrop-blur-2xl border-b transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/60 border-white/20 shadow-lg shadow-black/5"
            : "py-6 bg-white/30 border-white/10"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3))",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/90 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-md" />
              <span className="relative text-white font-bold text-xl">W</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Web<span className="text-blue-600">Storm</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href} className="relative group">
                <a
                  href={link.href}
                  className="text-slate-700 hover:text-blue-600 text-sm font-semibold transition-colors duration-300"
                >
                  {link.label}
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-2.5 bg-blue-500/90 backdrop-blur-xl text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-lg shadow-blue-200/30 hover:bg-blue-600 transition-all border border-white/20"
            >
              Get a Quote <ArrowRight size={16} />
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden backdrop-blur-2xl bg-white/60 border-t border-white/20"
            >
              <div className="flex flex-col p-6 gap-6">
                {links.map((link, i) => (
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08 }}
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-slate-800 hover:text-blue-600"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  className="w-full py-4 bg-blue-500/90 text-white rounded-xl text-center font-bold shadow-lg border border-white/20"
                >
                  Start Your Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
