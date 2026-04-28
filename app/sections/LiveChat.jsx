'use client'
import { useState } from 'react'

export default function LiveChat() {
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    if (!msg.trim()) return
    setSent(true)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {open && (
        <div className="bg-ink-muted border border-white/10 rounded-2xl shadow-2xl shadow-black/60 w-80 overflow-hidden">
          {/* Header */}
          <div className="bg-amber px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-ink/20 rounded-full flex items-center justify-center">
              <span className="text-ink text-sm">W</span>
            </div>
            <div>
              <p className="text-ink font-semibold text-sm">WebCraft Support</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full" />
                <p className="text-ink/60 text-xs">Online — replies in minutes</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-5">
            {!sent ? (
              <>
                <div className="bg-ink rounded-xl p-4 mb-4">
                  <p className="text-cream/80 text-sm leading-relaxed">
                    👋 Hi! How can we help you today? Ask us anything about our packages, process, or timeline.
                  </p>
                </div>

                <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Type your message..."
                  rows={3}
                  className="w-full bg-ink border border-white/10 rounded-xl px-4 py-3 text-cream text-sm placeholder-cream/20 focus:outline-none focus:border-amber/50 resize-none mb-3"
                />
                <button
                  onClick={handleSend}
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  Send Message
                </button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-amber text-2xl mb-3">✓</p>
                <p className="text-cream font-semibold mb-1">Message sent!</p>
                <p className="text-cream/40 text-sm">We'll reply within a few minutes.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-amber rounded-full shadow-lg shadow-amber/30 flex items-center justify-center hover:scale-110 transition-all duration-300 relative"
        aria-label="Live chat"
      >
        {open ? (
          <svg className="w-6 h-6 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        {/* Notification dot */}
        {!open && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-ink animate-pulse" />
        )}
      </button>
    </div>
  )
}
