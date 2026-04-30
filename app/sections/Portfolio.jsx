"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard, projects, categories } from "./ProjectCard";

// ─── Main Section: Soft Blue SaaS Design System ──────────────────────────────
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      {/* Ambient Gradient Blob Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Typography */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-4"
          >
            Case Studies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-900 text-6xl md:text-8xl font-black tracking-tightest mb-6"
          >
            Latest <span className="text-blue-600">Releases.</span>
          </motion.h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed">
            Crafting premium digital experiences with a focus on 3D immersion
            and high-conversion UI.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/*
          Grid layout:
          - Mobile  : 1 column  (shows up to 4 cards — user scrolls for more)
          - Tablet  : 2 columns
          - Desktop : 3 columns (shows 9 cards, 3 per row)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
