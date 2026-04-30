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
      {/* ─── Main Section ─────────────────────────────────────────────── */}
      <section
        id="portfolio"
        className="relative py-16 sm:py-24 bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#EFF6FF] overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-200/40 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-4"
            >
              Case Studies
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-slate-500 max-w-xl mx-auto"
            >
              Crafting premium digital experiences with a focus on 3D immersion
              and high-conversion UI.
            </motion.p>
          </div>

          {/* ─── Liquid Glass Sticky Nav ──────────────────────────────────── */}
          <nav
            className="sticky top-0 z-50 flex justify-center px-4 py-3
        bg-blue-50/40 backdrop-blur-2xl backdrop-saturate-150
        border-b border-blue-200/30 pb-10
        "
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
