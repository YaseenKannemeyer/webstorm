const values = [
  { icon: '◈', title: 'Results-Driven', desc: 'We measure success in leads, sales, and growth — not just aesthetics.' },
  { icon: '✦', title: 'Transparent', desc: 'Clear timelines, honest pricing, and open communication throughout.' },
  { icon: '◉', title: 'Long-term Partners', desc: "We're invested in your success — not just your launch day." },
]

export default function About() {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left visual */}
        <div className="relative order-2 lg:order-1">
          <div className="relative">
            {/* Main block */}
            <div className="card-dark rounded-3xl p-8 border border-amber/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber rounded-xl flex items-center justify-center">
                  <span className="font-display text-xl text-ink font-bold">W</span>
                </div>
                <div>
                  <p className="text-cream font-semibold">WebCraft Studio</p>
                  <p className="text-cream/40 text-sm">Cape Town, South Africa</p>
                </div>
              </div>

              {/* Team avatars */}
              <div className="flex gap-4 mb-6">
                {[
                  { init: 'AT', color: 'bg-amber', name: 'Alex T.', role: 'Lead Dev' },
                  { init: 'SR', color: 'bg-blue-400', name: 'Sam R.', role: 'Designer' },
                  { init: 'ML', color: 'bg-emerald-400', name: 'Maya L.', role: 'SEO Lead' },
                ].map((m) => (
                  <div key={m.init} className="flex-1 bg-ink rounded-2xl p-4 text-center border border-white/5">
                    <div className={`w-10 h-10 ${m.color} rounded-full mx-auto mb-2 flex items-center justify-center text-ink font-bold text-sm`}>
                      {m.init}
                    </div>
                    <p className="text-cream text-xs font-medium">{m.name}</p>
                    <p className="text-cream/30 text-xs">{m.role}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/5 pt-6 grid grid-cols-3 gap-4 text-center">
                {[['5+', 'Years'], ['150+', 'Projects'], ['98%', 'Satisfied']].map(([v, l]) => (
                  <div key={l}>
                    <p className="font-display text-2xl text-amber">{v}</p>
                    <p className="text-cream/30 text-xs">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 bg-ink-muted border border-amber/20 rounded-2xl p-4 shadow-xl">
              <p className="text-amber font-bold text-sm">🏆 Top Agency 2024</p>
              <p className="text-cream/40 text-xs">Clutch.co Award Winner</p>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="order-1 lg:order-2">
          <p className="text-amber text-sm font-semibold tracking-widest uppercase mb-3">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            Built by People Who <span className="italic text-amber">Love the Web</span>
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed mb-6">
            WebCraft Studio is a boutique digital agency based in Cape Town, South Africa. We specialize in building websites that don't just look good — they work hard for your business.
          </p>
          <p className="text-cream/50 leading-relaxed mb-10">
            Founded in 2019, we've helped over 150 businesses across industries launch and grow their digital presence. Our small, dedicated team means you always deal with senior people who care about your results.
          </p>

          <div className="space-y-4 mb-10">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 items-start">
                <span className="text-amber text-xl mt-1 shrink-0">{v.icon}</span>
                <div>
                  <p className="text-cream font-semibold mb-1">{v.title}</p>
                  <p className="text-cream/50 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary">
            Work With Us
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
