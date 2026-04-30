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
    title: "Custom Digital Systems",
    description:
      "We don’t use templates or drag-and-drop builders. Every interface is designed and built from scratch around your business logic, workflows, and users.",
    tags: ["Custom UI", "React", "Systems"],
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Revenue-Driven eCommerce",
    description:
      "High-performance online stores built for conversion, not just display. Integrated payments, inventory flows, and scalable architecture that grows with your sales.",
    tags: ["Stripe", "Shopify", "Headless"],
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Technical SEO & Visibility",
    description:
      "We engineer your site to be discovered and ranked. Fast load speeds, structured data, and SEO foundations that actually improve traffic quality.",
    tags: ["SEO", "Schema", "Performance"],
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "System Maintenance & Reliability",
    description:
      "Your site stays secure, updated, and operational. We handle backend stability, updates, backups, and ongoing system health so you don’t have downtime risk.",
    tags: ["Security", "Backups", "Monitoring"],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Engineering",
    description:
      "We optimise real-world performance, not just scores. Faster load times, reduced friction, and infrastructure tuned for scale and user retention.",
    tags: ["<2s Load", "CDN", "Optimization"],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Conversion & Revenue Optimization",
    description:
      "We analyse user behaviour and refine flows to increase conversions. Every improvement is tied directly to measurable business outcomes.",
    tags: ["CRO", "Analytics", "A/B Testing"],
  },
];

// Motion Variants
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
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#f8fafc] relative overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-gradient-to-r from-blue-200/40 via-indigo-200/30 to-purple-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ✅ Header */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3 sm:mb-4"
          >
            What We Build
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-lg max-w-md sm:max-w-2xl mx-auto leading-relaxed"
          >
            We don’t just design websites;, we build scalable systems with real
            logic, integrations, and performance at the core.
          </motion.p>
        </div>

        {/* ✅ Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="
grid 
grid-cols-1 
sm:grid-cols-2 
lg:grid-cols-3 
xl:grid-cols-3
gap-3 sm:gap-4 lg:gap-5
"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="
group relative
p-5 sm:p-6
rounded-2xl
bg-white/70 backdrop-blur-xl
border border-white/60
shadow-sm
hover:shadow-lg hover:shadow-blue-100/40
transition-all duration-300
overflow-hidden
flex flex-col
          "
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-100/40 via-transparent to-purple-100/40" />

              {/* Icon */}
              <div
                className="
            relative z-10
            w-10 h-10 sm:w-14 sm:h-14
            rounded-xl
            bg-gradient-to-br from-blue-600 to-indigo-600
            text-white
            flex items-center justify-center
            mb-6
            shadow-lg shadow-blue-500/20
            group-hover:scale-110 transition-transform duration-300
          "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                  text-[10px] sm:text-xs
                  uppercase tracking-wider font-semibold
                  text-slate-500
                  bg-white/70
                  border border-slate-200
                  rounded-md px-2.5 py-1
                  group-hover:text-blue-600 group-hover:border-blue-200
                  transition
                "
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
