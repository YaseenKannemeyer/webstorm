import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Layout,
  ShoppingBag,
  Search,
  ShieldCheck,
  Zap,
  BarChart3,
  Cloud,
} from "lucide-react";

export default function BentoGridDemo() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* 🍏 Ambient Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-blue-200/30 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Our Services
          </p>

          <p className="text-slate-500 max-w-xl mx-auto">
            We design and build high-performance digital experiences tailored to
            modern businesses.
          </p>
        </div>

        <BentoGrid className="mx-auto">
          {services.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={
                <div className="text-blue-600 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
              }
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 ${
                i === 0 || i === 3 ? "md:col-span-2" : ""
              }`}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

/* 🖼️ SPLASH IMAGE COMPONENTS */
const Skeleton = ({ children, bg }) => (
  <div
    className={`relative flex flex-1 w-full h-full min-h-[10rem] rounded-xl overflow-hidden ${bg}`}
  >
    {children}
    <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
  </div>
);

const services = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Custom Digital Systems",
    description:
      "We design fully tailored digital systems that align with your internal workflows, business logic, and operational goals. From dashboards to complex platforms, everything is built to feel intuitive, scalable, and uniquely yours.",
    header: <Skeleton bg="bg-blue-100"></Skeleton>,
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "eCommerce",
    description:
      "High-performance online stores engineered for conversion, retention, and scalability. We focus on seamless checkout flows, product storytelling, and optimized performance that turns traffic into consistent revenue.",
    header: (
      <Skeleton bg="bg-indigo-50">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
        <div className="m-auto w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl animate-pulse" />
      </Skeleton>
    ),
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Technical SEO",
    description:
      "We engineer search visibility from the ground up with structured data, performance optimization, and crawl-friendly architecture. The goal is simple: make your website easier to find, faster to load, and stronger in rankings.",
    header: (
      <Skeleton bg="bg-emerald-50">
        <div className="flex flex-col gap-2 p-4 w-full">
          <div className="h-2 w-full bg-emerald-200/50 rounded" />
          <div className="h-2 w-3/4 bg-emerald-200/50 rounded" />
          <div className="h-2 w-1/2 bg-emerald-200/50 rounded" />
        </div>
      </Skeleton>
    ),
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Maintenance & Security",
    description:
      "We continuously monitor, secure, and maintain your digital systems to ensure reliability and uptime. From updates to vulnerability prevention, your platform stays stable, secure, and production-ready at all times.",
    header: (
      <Skeleton bg="bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          alt="Server Room"
        />
      </Skeleton>
    ),
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance",
    description:
      "We optimize every layer of your website for speed, responsiveness, and efficiency. The result is ultra-fast experiences that reduce bounce rates, improve engagement, and keep users interacting longer.",
    header: (
      <Skeleton bg="bg-amber-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <Zap className="w-12 h-12 text-amber-400 opacity-20" />
        </div>
      </Skeleton>
    ),
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Conversion (CRO)",
    description:
      "We analyze user behavior and design strategic improvements that increase conversions. Through testing, UX refinement, and data-driven decisions, we turn more visitors into paying customers.",
    header: (
      <Skeleton bg="bg-rose-50">
        <div className="flex items-end gap-1 p-4 h-full w-full">
          <div className="bg-rose-200 w-full h-[20%]" />
          <div className="bg-rose-200 w-full h-[40%]" />
          <div className="bg-rose-300 w-full h-[70%]" />
          <div className="bg-rose-400 w-full h-[50%]" />
          <div className="bg-rose-500 w-full h-[90%]" />
        </div>
      </Skeleton>
    ),
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Infrastructure",
    description:
      "We build and manage scalable cloud environments designed to handle growth and traffic spikes effortlessly. Your systems stay fast, stable, and globally accessible no matter the load.",
    header: (
      <Skeleton bg="bg-blue-50">
        <div className="flex items-end gap-1 p-4 h-full w-full">
          <div className="bg-blue-200 w-full h-[20%]" />
          <div className="bg-blue-200 w-full h-[40%]" />
          <div className="bg-blue-300 w-full h-[70%]" />
          <div className="bg-blue-400 w-full h-[50%]" />
          <div className="bg-blue-500 w-full h-[90%]" />
        </div>
      </Skeleton>
    ),
  },
];
