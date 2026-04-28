'use client'
import { useState } from 'react'

const budgets = ['Under R5,000', 'R5k – R10k', 'R10k – R20k', 'R20k+', 'Let\'s discuss']
const services = ['New Website', 'Redesign', 'eCommerce', 'SEO', 'Maintenance']

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    details: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real project, connect to an API / email service here
    setSent(true)
  }

  if (sent) {
    return (
      <section id="contact" className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-amber/10 border border-amber/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-amber text-3xl">✓</span>
          </div>
          <h2 className="font-display text-4xl text-cream mb-4">Message Received!</h2>
          <p className="text-cream/60 text-lg">
            Thanks {form.name}! We'll be in touch within 24 hours. In the meantime, check out our{' '}
            <a href="#portfolio" className="text-amber hover:underline">portfolio</a>.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="text-amber text-sm font-semibold tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            Let's Build Something <span className="italic text-amber">Great Together</span>
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed mb-10">
            Tell us about your project. We'll review your brief and get back to you within 24 hours with a no-obligation proposal.
          </p>

          <div className="space-y-6">
            {[
              { icon: '📍', label: 'Location', value: 'Cape Town, South Africa' },
              { icon: '📧', label: 'Email', value: 'hello@webcraft.studio' },
              { icon: '📞', label: 'Phone', value: '+27 21 555 0100' },
              { icon: '⏰', label: 'Hours', value: 'Mon–Fri, 8am–6pm SAST' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber/10 border border-amber/20 rounded-xl flex items-center justify-center shrink-0 text-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="text-cream/40 text-xs">{item.label}</p>
                  <p className="text-cream font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="card-dark rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-cream/50 text-sm block mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full bg-ink border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/20 focus:outline-none focus:border-amber/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-cream/50 text-sm block mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full bg-ink border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/20 focus:outline-none focus:border-amber/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-cream/50 text-sm block mb-2">Service Required</label>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, service: s }))}
                    className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
                      form.service === s
                        ? 'bg-amber text-ink border-amber'
                        : 'border-white/10 text-cream/50 hover:border-amber/30 hover:text-cream'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-cream/50 text-sm block mb-2">Budget Range</label>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, budget: b }))}
                    className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
                      form.budget === b
                        ? 'bg-amber text-ink border-amber'
                        : 'border-white/10 text-cream/50 hover:border-amber/30 hover:text-cream'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-cream/50 text-sm block mb-2">Project Details *</label>
              <textarea
                name="details"
                required
                value={form.details}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your business, what you need, and any specific requirements or ideas..."
                className="w-full bg-ink border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/20 focus:outline-none focus:border-amber/50 transition-colors resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full justify-center text-base py-4">
              Send Project Brief
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>

            <p className="text-cream/30 text-xs text-center">
              We respond within 24 hours. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
