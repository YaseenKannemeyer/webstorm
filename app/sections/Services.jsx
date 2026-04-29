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
            What We Build
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            We build systems — not templates.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              designed to grow your business.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Modern tools like Wix or AI builders can create simple websites. We
            build custom systems with real logic, integrations, and scalability
            — designed for businesses that need more than a template.
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
