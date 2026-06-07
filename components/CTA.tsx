"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#080810]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-3 leading-tight">
            Start your <span className="gradient-text">free trial</span>
          </h2>
          <p className="text-gray-400 mb-10">
            No credit card required. Up and running in minutes.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-8 border border-violet-500/20"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-green-400" />
              </div>
              <p className="text-lg font-semibold text-white">You&apos;re on the list!</p>
              <p className="text-sm text-gray-400">
                We&apos;ll reach out to <span className="text-violet-300">{form.email}</span> within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                id="cta-name"
                type="text"
                placeholder="Your full name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10 transition-all duration-200"
              />
              <input
                id="cta-email"
                type="email"
                placeholder="Work email address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10 transition-all duration-200"
              />
              <button
                type="submit"
                className="group relative w-full py-3.5 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600" />
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <p className="text-xs text-gray-600">
                By signing up you agree to our{" "}
                <a href="#contact" className="text-violet-400 hover:text-violet-300">Terms</a>{" "}
                and{" "}
                <a href="#contact" className="text-violet-400 hover:text-violet-300">Privacy Policy</a>
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
