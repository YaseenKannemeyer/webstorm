"use client";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";

// --- Data ---
export const categories = [
  "All",
  "eCommerce",
  "Visionary 3D",
  "Business",
  "Starter",
];

export const projects = [
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
    accent: "bg-blue-700",
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
    accent: "bg-blue-600",
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
    accent: "bg-slate-600",
  },
  {
    title: "UrbanNest",
    category: "eCommerce",
    package: "The Professional",
    description:
      "Curated home-goods store with AR product previews and smart recommendation engine.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    url: "https://urbannest.co.za",
    tags: ["Next.js", "Shopify"],
    accent: "bg-blue-600",
  },
  {
    title: "VaultX Crypto",
    category: "Business",
    package: "The Professional",
    description:
      "Real-time crypto dashboard with live charting, portfolio analytics, and alert system.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    url: "https://vaultx.io",
    tags: ["React", "WebSocket"],
    accent: "bg-blue-700",
  },
  {
    title: "Orbit Studio 3D",
    category: "Visionary 3D",
    package: "The Visionary",
    description:
      "Award-winning creative agency site with WebGL particle fields and fluid transitions.",
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1200&q=80",
    url: "https://orbitstudio.design",
    tags: ["Three.js", "React"],
    accent: "bg-indigo-600",
  },
  {
    title: "Kasi Eats",
    category: "Starter",
    package: "The Starter",
    description:
      "Lightweight township food-discovery app with offline support and map integration.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    url: "https://kasieats.co.za",
    tags: ["Vite", "PWA"],
    accent: "bg-slate-600",
  },
  {
    title: "Luxe Linen Co.",
    category: "eCommerce",
    package: "The Professional",
    description:
      "Luxury bedding brand with editorial photography, bundle builder, and subscription flows.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    url: "https://luxelinen.co.za",
    tags: ["Next.js", "Stripe"],
    accent: "bg-blue-600",
  },
  {
    title: "NovaMed Health",
    category: "Business",
    package: "The Professional",
    description:
      "Patient-first telehealth platform with appointment booking and secure medical records portal.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    url: "https://novamed.co.za",
    tags: ["React", "Node.js"],
    accent: "bg-blue-700",
  },
  {
    title: "Vertex AR",
    category: "Visionary 3D",
    package: "The Visionary",
    description:
      "WebAR furniture placement tool with real-time lighting simulation and drag-to-room UX.",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    url: "https://vertexar.design",
    tags: ["Three.js", "WebXR"],
    accent: "bg-indigo-600",
  },
  {
    title: "Braai & Co.",
    category: "Starter",
    package: "The Starter",
    description:
      "Local BBQ catering booking site with menu builder and live availability calendar.",
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1200&q=80",
    url: "https://braaiandco.co.za",
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
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group cursor-pointer"
    >
      <div className="relative bg-white/60 backdrop-blur-md border border-blue-100/60 rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-300/30 hover:-translate-y-2">
        {/* Browser Mockup Header */}
        <div className="h-8 sm:h-10 px-3 sm:px-6 border-b border-blue-50 flex items-center justify-between bg-white/40">
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
        <div className="relative h-20 sm:h-36 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500" />
        </div>

        {/* Content Section */}
        <div className="p-3 sm:p-5">
          <div className="flex justify-between items-start mb-1.5 sm:mb-2">
            <div className="flex-1 min-w-0 pr-2">
              <p
                className={`inline-block px-1.5 sm:px-2 py-0.5 rounded-full text-[7px] sm:text-[9px] font-bold text-white mb-1 sm:mb-1.5 ${project.accent}`}
              >
                {project.package}
              </p>
              <h3 className="text-xs sm:text-base font-extrabold text-slate-900 tracking-tight leading-tight truncate">
                {project.title}
              </h3>
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
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

          <p className="text-slate-500 text-[9px] sm:text-xs leading-relaxed mb-2 sm:mb-3 line-clamp-2">
            {project.description}
          </p>

          <div className="flex gap-1 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[7px] sm:text-[9px] font-bold text-blue-400 uppercase tracking-tighter border border-blue-100 px-1 sm:px-1.5 py-0.5 rounded"
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
