"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!msg.trim()) return;
    setSent(true);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {/* 🧊 Pattern: Glassmorphism Lite Chat Window */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-2xl shadow-blue-900/10 w-85 overflow-hidden origin-bottom-right"
          >
            {/* Header: Primary System (Blue-600) */}
            <div className="bg-blue-600 px-6 py-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-black text-sm">W</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm tracking-tight">
                  WebCraft Support
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <p className="text-blue-100 text-xs font-medium">
                    Online now
                  </p>
                </div>
              </div>
            </div>

            {/* Body: Soft Elevation Surfaces */}
            <div className="p-6">
              {!sent ? (
                <>
                  <div className="bg-blue-50/50 rounded-2xl p-4 mb-5 border border-blue-100/50">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      👋 Hi! Need help with your next project? We typically
                      reply in under 5 minutes.
                    </p>
                  </div>

                  {/* Input styling: Neutral System */}
                  <textarea
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Tell us about your project..."
                    rows={3}
                    className="w-full bg-white/50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none mb-4"
                  />

                  {/* Button: Primary Blue System */}
                  <button
                    onClick={handleSend}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                  >
                    Start Conversation
                  </button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-900 font-black text-lg mb-1 tracking-tight">
                    Message Sent!
                  </p>
                  <p className="text-slate-500 text-sm">
                    One of our experts will be with you shortly.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ⚡ Toggle Button: Staggered Micro-Interaction style */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-16 h-16 bg-blue-600 rounded-[1.5rem] shadow-xl shadow-blue-600/30 flex items-center justify-center relative group"
        aria-label="Live chat"
      >
        {open ? (
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}

        {/* Notification Dot: Emerald glow */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-[#F8FAFC] group-hover:scale-110 transition-transform" />
        )}
      </motion.button>
    </div>
  );
}
