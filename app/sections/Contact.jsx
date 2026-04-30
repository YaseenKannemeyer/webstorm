"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const budgets = [
  "Under R5,000",
  "R5k – R10k",
  "R10k – R20k",
  "R20k+",
  "Let's discuss",
];

const services = ["New Website", "Redesign", "eCommerce", "SEO", "Maintenance"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    details: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <section
        id="contact"
        className="py-24 bg-[#F8FAFC] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-sky-50/40 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative max-w-2xl mx-auto text-center px-6"
        >
          <div className="w-24 h-24 bg-white/50 backdrop-blur-xl border border-white/70 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-900/5">
            <span className="text-blue-600 text-4xl font-black">✓</span>
          </div>

          <h2 className="text-slate-900 text-5xl font-black tracking-tight mb-4">
            Brief Received!
          </h2>

          <p className="text-slate-500 text-xl font-medium leading-relaxed">
            Thanks {form.name}! We're already reviewing your ideas and will
            reach out within 24 hours.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#F8FAFC] overflow-hidden"
    >
      {/* 🌫️ Ambient Glass Atmosphere */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-blue-200/30 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-sky-100/40 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* LEFT SIDE */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 text-xs font-black tracking-[0.4em] uppercase mb-4"
            >
              Get in Touch
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-slate-900 text-5xl md:text-7xl font-black tracking-tight leading-[0.9] mb-8"
            >
              Let's Build <br />
              <span className="text-blue-600 italic">Something Great.</span>
            </motion.h2>

            <p className="text-slate-500 text-xl font-medium leading-relaxed mb-12">
              Tell us about your project goals. We'll get back to you within 24
              hours with a custom roadmap for your success.
            </p>

            {/* Info Cards (Glass Lite) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: "📍", label: "Location", value: "Cape Town, RSA" },
                { icon: "📧", label: "Email", value: "hello@webcraft.studio" },
                { icon: "📞", label: "Phone", value: "+27 21 555 0100" },
                { icon: "⏰", label: "Hours", value: "Mon–Fri, 8am–6pm" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/60 backdrop-blur-md border border-white/70 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-blue-200/40 transition-all">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-slate-900 font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM (MAIN GLASS CARD) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            {/* outer glow ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-transparent rounded-[2.5rem] blur-xl" />

            {/* main glass panel */}
            <div className="relative bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 border border-white/70 shadow-2xl shadow-blue-900/5 overflow-hidden">
              {/* inner highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/10 pointer-events-none" />

              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  {["name", "email"].map((field) => (
                    <div key={field}>
                      <label className="text-slate-900 font-bold text-sm block mb-2 capitalize">
                        {field === "name" ? "Full Name" : "Email Address"}
                      </label>

                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        required
                        value={form[field]}
                        onChange={handleChange}
                        placeholder={
                          field === "email" ? "john@company.com" : "John Smith"
                        }
                        className="w-full bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl px-5 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-500 transition-all"
                      />
                    </div>
                  ))}
                </div>

                {/* Services */}
                <div>
                  <label className="text-slate-900 font-bold text-sm block mb-3">
                    What do you need?
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, service: s }))}
                        className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest border transition-all ${
                          form.service === s
                            ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20"
                            : "bg-white/40 backdrop-blur-md border-white/60 text-slate-500 hover:border-blue-200"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="text-slate-900 font-bold text-sm block mb-3">
                    Approximate Budget
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, budget: b }))}
                        className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest border transition-all ${
                          form.budget === b
                            ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20"
                            : "bg-white/40 backdrop-blur-md border-white/60 text-slate-500 hover:border-blue-200"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label className="text-slate-900 font-bold text-sm block mb-2">
                    Project Details
                  </label>

                  <textarea
                    name="details"
                    required
                    value={form.details}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your business goals..."
                    className="w-full bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl px-5 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-500 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-sm uppercase tracking-[0.2em] py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  Send Project Brief
                  <span>→</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
