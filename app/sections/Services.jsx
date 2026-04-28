"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  ShoppingBag,
  Search,
  ShieldCheck,
  Zap,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Custom Web Design",
    description:
      "Bespoke designs crafted from scratch — no templates. Every pixel is intentional, every layout built around your brand.",
    tags: ["Figma", "UI/UX", "Branding"],
    color: "blue",
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "eCommerce Stores",
    description:
      "Full-featured online stores with Shopify or custom headless builds. Scalable, secure, and optimized for sales.",
    tags: ["Shopify", "Stripe", "Headless"],
    color: "blue",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimization",
    description:
      "Get found on Google. We implement technical SEO, site speed improvements, and structured data markup.",
    tags: ["Technical SEO", "Vitals", "Schema"],
    color: "blue",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Website Maintenance",
    description:
      "Keep your site secure and fast. Monthly plans covering updates, backups, and security monitoring.",
    tags: ["Security", "Backups", "24/7"],
    color: "blue",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance & Speed",
    description:
      "Slow sites lose customers. We optimize load times and code to ensure your site loads in under 2 seconds.",
    tags: ["<2s Load", "CDN", "Edge"],
    color: "blue",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Conversion Optimization",
    description:
      "We analyze user behavior and optimize for conversions. Turning your traffic into measurable revenue.",
    tags: ["A/B Testing", "Heatmaps", "CRO"],
    color: "blue",
  },
];

// Motion Variants for Staggered Reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-white relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 text-sm font-bold tracking-[0.2em] uppercase mb-4"
          >
            Capabilities
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Everything you need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              dominate the web.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We don't just build websites; we build high-performance business
            assets designed to scale your brand to the next level.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Highlight Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-500 leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 group-hover:border-blue-100 group-hover:text-blue-500 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
