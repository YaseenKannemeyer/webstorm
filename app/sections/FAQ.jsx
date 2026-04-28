'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'Timeline depends on the package. A Starter site typically takes 1-2 weeks, Business sites 3-4 weeks, and Premium/custom builds 6-10 weeks. We provide a detailed timeline at the start of your project.',
  },
  {
    q: 'Do I need to provide content and images?',
    a: 'You can provide your own content, or we can help. We offer copywriting and professional stock photography services. We also integrate with Unsplash for curated free images when needed.',
  },
  {
    q: 'Will my website work on mobile?',
    a: 'Absolutely. Every website we build is fully responsive and tested across devices and screen sizes — from the smallest mobile phones to large desktop monitors.',
  },
  {
    q: 'What happens after my website is live?',
    a: "All packages include a support period. After that, we offer monthly maintenance plans covering updates, backups, security monitoring, and up to 2 hours of content changes per month.",
  },
  {
    q: 'Can you help with Google ranking (SEO)?',
    a: 'Yes. All sites include basic on-page SEO. Business and Premium packages include full technical SEO audits, keyword research, meta optimization, and schema markup. We also offer ongoing SEO as an add-on.',
  },
  {
    q: 'I already have a website. Can you redesign it?',
    a: "Yes, we handle redesigns regularly. We can work with your existing content and domain, migrate your data, and give your site a complete facelift — without disrupting your current traffic.",
  },
  {
    q: 'What platforms do you build on?',
    a: 'We work with Next.js / React, WordPress, Shopify, and WooCommerce — depending on what suits your needs. We recommend the best platform for your specific goals rather than a one-size-fits-all approach.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. We typically split payments into a 50% deposit to start and 50% on completion. For larger projects, we can arrange milestone-based payment structures.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="section-padding bg-ink-light">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
            Common <span className="italic text-amber">Questions</span>
          </h2>
          <p className="text-cream/50 text-lg">Everything you need to know before getting started.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`card-dark rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? 'border-amber/30' : ''}`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-medium pr-4 ${open === i ? 'text-amber' : 'text-cream'}`}>{faq.q}</span>
                <span
                  className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 text-xs ${
                    open === i ? 'border-amber text-amber rotate-45' : 'border-cream/20 text-cream/40'
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-48' : 'max-h-0'}`}
              >
                <p className="px-6 pb-6 text-cream/60 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-cream/30 text-sm mt-10">
          Still have questions?{' '}
          <a href="#contact" className="text-amber hover:underline">Drop us a message →</a>
        </p>
      </div>
    </section>
  )
}
