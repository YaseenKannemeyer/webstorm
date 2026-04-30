"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard, projects, categories } from "@/components/ui/projectCard";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const [showAllMobile, setShowAllMobile] = useState(false);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const mobileLimit = 4;

  const displayedProjects = showAllMobile
    ? filteredProjects
    : filteredProjects.slice(0, mobileLimit);

  return (
    <>
      {/* ─── Liquid Glass Sticky Nav ──────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 flex justify-center px-4 py-3
        bg-blue-50/40 backdrop-blur-2xl backdrop-saturate-150
        border-b border-blue-200/30
        shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_32px_rgba(59,91,255,0.07)]"
      >
        <div
          className="inline-flex items-center gap-1.5 p-1.5
          bg-white/50 backdrop-blur-md border border-blue-100/50
          rounded-2xl shadow-sm flex-wrap justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setShowAllMobile(false);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all ${
                activeTab === cat
                  ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-300/40"
                  : "text-blue-500 hover:text-blue-700 hover:bg-white/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* ─── Main Section ─────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#EFF6FF] overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-200/40 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4"
            >
              Case Studies
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4 leading-tight"
            >
              Digital{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-slate-500 text-sm sm:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Crafting premium digital experiences with a focus on 3D immersion
              and high-conversion UI.
            </motion.p>
          </div>

          {/* ─── Card Grid — 2 cols mobile → 3 cols desktop ─── */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* View More Button — visible only when there are hidden cards */}
          {filteredProjects.length > mobileLimit && (
            <div className="flex justify-center mt-8 sm:hidden">
              <button
                onClick={() => setShowAllMobile((prev) => !prev)}
                className="px-6 py-3 rounded-2xl bg-white/70 border border-blue-100 text-blue-600 font-bold text-sm shadow-sm backdrop-blur-md active:scale-95 transition"
              >
                {showAllMobile ? "Show Less" : "View More Projects"}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
