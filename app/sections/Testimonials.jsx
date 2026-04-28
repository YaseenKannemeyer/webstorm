'use client'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Owner, Luxe Jewellery Co.',
    quote:
      'WebCraft completely transformed our online presence. Our sales tripled within 3 months of launching the new site. The design is stunning and my customers constantly compliment it.',
    rating: 5,
    avatar: 'SM',
    color: 'bg-rose-400',
  },
  {
    name: 'James T.',
    role: 'Partner, Apex Law Firm',
    quote:
      'Professional, responsive, and genuinely talented. They understood our brand immediately and delivered a site that communicates trust and authority. Our enquiries are up 4×.',
    rating: 5,
    avatar: 'JT',
    color: 'bg-blue-400',
  },
  {
    name: 'Priya N.',
    role: 'Founder, FitPulse',
    quote:
      "The landing page they built for our app launch achieved a 62% conversion rate. I've worked with agencies before — WebCraft is in a different league entirely.",
    rating: 5,
    avatar: 'PN',
    color: 'bg-emerald-400',
  },
  {
    name: 'Andre V.',
    role: 'Director, Cape Harvest Wines',
    quote:
      'We were skeptical about investing in a new website but the ROI has been extraordinary. The site generated over R2 million in the first year. Worth every cent.',
    rating: 5,
    avatar: 'AV',
    color: 'bg-purple-400',
  },
  {
    name: 'Lisa K.',
    role: 'Architect, Studio Marin',
    quote:
      'As someone who cares deeply about aesthetics, I was worried no agency would match my vision. WebCraft exceeded every expectation. The site won us a design award.',
    rating: 5,
    avatar: 'LK',
    color: 'bg-amber',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const t = testimonials[active]

  return (
    <section className="section-padding bg-ink-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber/2 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-amber text-sm font-semibold tracking-widest uppercase mb-3">Client Stories</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            Don't Take Our <span className="italic text-amber">Word for It</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="card-dark rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden">
          <div className="absolute top-6 right-8 font-display text-8xl text-amber/10 leading-none select-none">"</div>

          <div className="flex text-amber text-xl mb-6">
            {'★'.repeat(t.rating)}
          </div>

          <blockquote className="text-cream text-xl md:text-2xl font-light leading-relaxed mb-8 relative z-10">
            "{t.quote}"
          </blockquote>

          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-ink font-bold shrink-0`}>
              {t.avatar}
            </div>
            <div>
              <p className="text-cream font-semibold">{t.name}</p>
              <p className="text-cream/40 text-sm">{t.role}</p>
            </div>
          </div>
        </div>

        {/* Selector dots */}
        <div className="flex flex-wrap justify-center gap-4">
          {testimonials.map((testimonial, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 ${
                active === i
                  ? 'border-amber/50 bg-amber/10'
                  : 'border-white/5 bg-ink-muted hover:border-white/15'
              }`}
            >
              <div className={`w-8 h-8 rounded-full ${testimonial.color} flex items-center justify-center text-ink text-xs font-bold shrink-0`}>
                {testimonial.avatar}
              </div>
              <div className="text-left hidden sm:block">
                <p className={`text-sm font-medium ${active === i ? 'text-cream' : 'text-cream/50'}`}>{testimonial.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
