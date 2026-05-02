"use client";
import { useState } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";

// --- Data ---
export const categories = ["All", "Starter", "Business", "Premium"];

export const projects = [
  {
    title: "Mlangeni Grand",
    category: "Starter",
    package: "The Professional",
    description:
      "A refined digital presence for Mors Design. We built a studio portfolio focused on meticulous typography, brand identities, and seamless navigation to highlight their creative process.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    url: "https://www.mors.design/",
    tags: ["React", "Laravel"],
    accent: "bg-blue-700",
  },
  {
    title: "Bvlgari Eclettica High Jewelry Collection",
    category: "Premium",
    package: "The Visionary",
    description:
      "An immersive WebGL experience unveiling 160 one-of-a-kind masterpieces. This showcase blends Roman architecture with high-end gem craftsmanship through fluid scroll animations and 3D gemstone interactions.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    url: "https://pf.j-or-y.com/",
    tags: ["Three.js", "GSAP"],
    accent: "bg-indigo-600",
  },
  {
    title: "Bitcoin Site Redesign",
    category: "Starter",
    package: "The Professional",
    description:
      "A conceptual Web3 redesign exploring modern UI patterns for cryptocurrency education, highlighting decentralized finance technologies through an engaging Webflow build.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    url: "https://thebitcoin.webflow.io/",
    tags: ["Next.js", "SEO"],
    accent: "bg-blue-600",
  },
  {
    title: "Legal Growth - Legal Sites",
    category: "Starter",
    package: "The Starter",
    description:
      "A high-conversion professional portal for Evans Injury Attorneys, engineered to boost visibility, establish trust, and streamline client engagement for personal injury victims.",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80",
    url: "https://evansinjuryattorneys.com/",
    tags: ["Vite", "PWA"],
    accent: "bg-slate-600",
  },
  {
    title: "UrbanNest",
    category: "Business",
    package: "The Professional",
    description:
      "A curated eCommerce experience featuring elegant product discovery, smart recommendations, and a seamless checkout flow tailored for modern living and lifestyle goods.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    url: "https://peaceput.com/en/shop/",
    tags: ["Next.js", "Shopify"],
    accent: "bg-blue-600",
  },
  {
    title: "VaultX Crypto",
    category: "Business",
    package: "The Professional",
    description:
      "A high-performance digital storefront and dashboard featuring secure transactions, real-time analytics, and an optimized mobile shopping experience for tech-forward users.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    url: "https://www.podmodturkey8.com/",
    tags: ["React", "WebSocket"],
    accent: "bg-blue-700",
  },
  {
    title: "Orbit Studio 3D",
    category: "Business",
    package: "The Visionary",
    description:
      "A visionary 3D product showcase for premium lifestyle gear, utilizing WebGL and Three.js to let users explore products from every angle with fluid, interactive transitions.",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&q=80",
    url: "https://evanlite.com/en-eu",
    tags: ["Three.js", "React"],
    accent: "bg-indigo-600",
  },
  {
    title: "Kasi Eats",
    category: "Business",
    package: "The Starter",
    description:
      "A fast, lightweight digital platform designed for local discovery, featuring robust creative direction and an intuitive UI for quick navigation and offline support.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    url: "https://outfit.hellohello.is/",
    tags: ["Vite", "PWA"],
    accent: "bg-slate-600",
  },
  {
    title: "Luxe Linen Co.",
    category: "Business",
    package: "The Professional",
    description:
      "An elegant eCommerce storefront featuring sophisticated editorial photography, customized bundle builders, and seamless subscription flows for premium home comforts and boutique teas.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    url: "https://twoleavestea.com/",
    tags: ["Next.js", "Stripe"],
    accent: "bg-blue-600",
  },
  {
    title: "NovaMed Health",
    category: "Business",
    package: "The Professional",
    description:
      "A modern health and wellness platform offering a patient-first experience, complete with intuitive product discovery for advanced skincare technologies and a secure portal.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    url: "https://elevaremarket.com/en-qa",
    tags: ["React", "Node.js"],
    accent: "bg-blue-700",
  },
  {
    title: "Vertex AR",
    category: "Premium",
    package: "The Visionary",
    description:
      "A cutting-edge AI and WebAR platform integrating spatial computing, allowing users to interact with intelligent tools and visualize solutions in real-time with advanced UI/UX.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    url: "https://oryzo.ai/",
    tags: ["Three.js", "WebXR"],
    accent: "bg-indigo-600",
  },
  {
    title: "Braai & Co.",
    category: "Premium",
    package: "The Starter",
    description:
      "A streamlined digital interface integrating smart scheduling algorithms and interactive features to bring local catering and community booking to the modern web.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    url: "https://www.iyo.ai/",
    tags: ["Vite", "Netlify"],
    accent: "bg-slate-600",
  },
];

// ─── Component: Soft Elevation Card ──────────────────────────────────────────
export const ProjectCard = ({ project, index }) => {
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
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group cursor-pointer h-full"
    >
      <div className="relative h-full bg-white/60 backdrop-blur-md border border-blue-100/60 rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-300/30 hover:-translate-y-2 flex flex-col">
        {/* Browser Mockup Header */}
        <div className="h-8 sm:h-10 px-3 sm:px-6 border-b border-blue-50 flex items-center justify-between bg-white/40 shrink-0">
          <div className="flex gap-1">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-100" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-100" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-100" />
          </div>
          <span className="text-[8px] sm:text-[10px] font-bold text-blue-300 uppercase tracking-widest">
            {project.category}
          </span>
        </div>

        {/* Image Section */}
        <div className="relative h-32 sm:h-48 overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500" />
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <div className="flex-1 min-w-0 pr-2">
              <p
                className={`inline-block px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-bold text-white mb-2 ${project.accent}`}
              >
                {project.package}
              </p>
              <h3 className="text-sm sm:text-lg font-extrabold text-slate-900 tracking-tight leading-tight line-clamp-2">
                {project.title}
              </h3>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
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

          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {project.description}
          </p>

          <div className="flex gap-1.5 flex-wrap mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] sm:text-[11px] font-bold text-blue-500 uppercase tracking-tight border border-blue-100 bg-blue-50/50 px-2 py-1 rounded-md"
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

// ─── Component: Projects Section (Parent) ────────────────────────────────────
export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  // Determine how many projects to show
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Explore a selection of our recent work across various industries.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View All Button */}
      {projects.length > 6 && (
        <motion.div layout className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
          >
            {showAll ? "Show Less" : "View All Projects"}
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                showAll ? "rotate-180" : "group-hover:translate-x-1"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {showAll ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              )}
            </svg>
          </button>
        </motion.div>
      )}
    </section>
  );
}
