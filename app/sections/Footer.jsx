const footerLinks = {
  Services: ['Web Design', 'eCommerce', 'SEO', 'Maintenance', 'CRO'],
  Company: ['About Us', 'Portfolio', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber rounded-lg flex items-center justify-center">
                <span className="text-ink font-display text-lg font-bold">W</span>
              </div>
              <span className="font-display text-xl text-cream">
                Web<span className="text-amber">Craft</span>
              </span>
            </a>
            <p className="text-cream/40 text-sm leading-relaxed max-w-xs mb-6">
              Building websites that sell for ambitious South African businesses and beyond.
            </p>
            <div className="flex gap-3">
              {['𝕏', 'in', '▶', '📸'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-ink-muted border border-white/10 rounded-lg flex items-center justify-center text-cream/40 hover:text-amber hover:border-amber/30 transition-all text-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-cream font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-cream/40 text-sm hover:text-amber transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="card-dark rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <p className="text-cream font-semibold text-lg">Ready to launch your website?</p>
            <p className="text-cream/40 text-sm">Join 150+ businesses who chose WebCraft.</p>
          </div>
          <a href="#packages" className="btn-primary shrink-0">
            Get Started Today
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-cream/25 text-sm">© 2025 WebCraft Studio. All rights reserved.</p>
          <p className="text-cream/25 text-sm">Made with ♥ in Cape Town 🇿🇦</p>
        </div>
      </div>
    </footer>
  )
}
