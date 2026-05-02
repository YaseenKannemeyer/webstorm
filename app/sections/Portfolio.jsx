"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard, projects, categories } from "@/components/ui/projectCard";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  // Default count to show before clicking "View All"
  const displayLimit = 6;

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, displayLimit);

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
              Portfolio
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
                    setShowAll(false); // Reset view when changing category
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

          {/* ─── Card Grid ─── */}
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

          {/* ─── View All Button (Desktop & Mobile) ─── */}
          {filteredProjects.length > displayLimit && (
            <motion.div layout className="flex justify-center mt-12 sm:mt-16">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="group relative inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 bg-slate-900 text-white rounded-full font-bold text-sm sm:text-base shadow-xl shadow-blue-900/10 hover:bg-slate-800 hover:-translate-y-1 active:scale-95 transition-all duration-300"
              >
                <span className="relative z-10">
                  {showAll ? "Show Fewer Projects" : "View All Projects"}
                </span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                    showAll ? "rotate-180" : "group-hover:translate-x-1"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
