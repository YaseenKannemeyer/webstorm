"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

// --- Data Stays Consistent ---
const categories = ["All", "eCommerce", "Visionary 3D", "Business", "Starter"];
const projects = [
  {
    title: "Mlangeni Grand",
    category: "Business",
    package: "The Professional",
    description:
      "High-end hospitality platform featuring dynamic booking engines and parallax galleries.",
    image:
      "https://images.unsplash.com/photo-1550966841-3ee32230673d?auto=format&fit=crop&w=1200&q=80",
    url: "https://mlangeni-hospitality.co.za",
    tags: ["React", "Laravel"],
    accent: "bg-blue-600",
  },
  {
    title: "ShoeHero 3D",
    category: "Visionary 3D",
    package: "The Visionary",
    description:
      "Immersive 3D commerce experience with real-time physics and scroll-synced animation.",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
    url: "https://shoe-hero-3d.vercel.app",
    tags: ["Three.js", "GSAP"],
    accent: "bg-indigo-600",
  },
  {
    title: "Cape Harvest",
    category: "eCommerce",
    package: "The Professional",
    description:
      "Premium winery marketplace with automated logistics and high-conversion UX.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    url: "https://capeharvest.store",
    tags: ["Next.js", "SEO"],
    accent: "bg-blue-500",
  },
  {
    title: "Manenberg Forum",
    category: "Starter",
    package: "The Starter",
    description:
      "Community-driven portal optimized for sub-second load times on mobile devices.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    url: "https://manenberg-forum.org.za",
    tags: ["Vite", "PWA"],
    accent: "bg-slate-800",
  },
];

// ─── Component: Soft Elevation Card ──────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group cursor-pointer"
    >
      {/* Pattern: Soft Elevation Card System */}
      <div className="relative bg-white/60 backdrop-blur-md border border-slate-200 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2">
        {/* Browser Mockup Header */}
        <div className="h-10 px-6 border-b border-slate-100 flex items-center justify-between bg-white/40">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          </div>
          <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
            {project.category}
          </span>
        </div>

        {/* Image Section */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500" />
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p
                className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold text-white mb-3 ${project.accent}`}
              >
                {project.package}
              </p>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {project.title}
              </h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <svg
                className="w-5 h-5"
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
            </div>
          </div>

          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter border border-slate-100 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Section: Soft Blue SaaS Design System ──────────────────────────────
export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      {/* Pattern: Ambient Gradient Blob Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Pattern: High Contrast Hero Typography */}
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

        {/* Filter System */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm">
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

        {/* Pattern: Centered Container SaaS Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
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
