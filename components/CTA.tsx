"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Sparkles, MessageSquare, TrendingUp } from "lucide-react";

const benefits = [
  "No credit card required",
  "Setup in under 10 minutes",
  "Free 14-day trial",
  "Cancel anytime",
];

const highlights = [
  { icon: MessageSquare, label: "Omnichannel", color: "text-violet-400", bg: "bg-violet-500/10" },
  { icon: TrendingUp, label: "Lead Gen", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Sparkles, label: "AI-Powered", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "" });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#080810]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px shimmer opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gradient-border text-sm font-medium text-violet-300 mb-6">
              <Zap className="w-3.5 h-3.5 text-violet-400" />
              Get Started Today
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Ready to turn
              <br />
              <span className="gradient-text">conversations</span>
              <br />
              into customers?
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-md">
              Join hundreds of businesses already using Nova to engage customers, generate leads,
              and close deals — every single day.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="pt-8 border-t border-white/5 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["#7c3aed", "#2563eb", "#06b6d4", "#10b981", "#ec4899"].map((color) => (
                  <div
                    key={color}
                    className="w-8 h-8 rounded-full border-2 border-[#0a0a0f]"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">500+</span> businesses trust Nova
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-3xl overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-950/30">

              {/* Card header strip */}
              <div className="relative px-8 py-6 bg-gradient-to-r from-violet-900/60 via-blue-900/40 to-violet-900/60 border-b border-violet-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-blue-600/10" />
                <div className="relative flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-0.5">Start your free trial</h3>
                    <p className="text-sm text-violet-300/80">No credit card needed · Live in minutes</p>
                  </div>
                  <div className="flex gap-2">
                    {highlights.map(({ icon: Icon, label, color, bg }) => (
                      <div key={label} className={`flex flex-col items-center gap-1 px-2.5 py-2 rounded-xl ${bg}`}>
                        <Icon className={`w-4 h-4 ${color}`} />
                        <span className="text-[10px] text-gray-400 font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="px-8 py-8 bg-[#0f0f1a]">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h3>
                    <p className="text-gray-400 text-sm">
                      We&apos;ll reach out to{" "}
                      <span className="text-violet-300">{form.email}</span> within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="cta-name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        id="cta-name"
                        type="text"
                        placeholder="e.g. Sarah Johnson"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/70 focus:bg-white/[0.06] focus:ring-2 focus:ring-violet-500/10 transition-all duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="cta-email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Work Email
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/70 focus:bg-white/[0.06] focus:ring-2 focus:ring-violet-500/10 transition-all duration-200"
                      />
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="cta-company" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Company <span className="text-gray-600 normal-case font-normal">(optional)</span>
                      </label>
                      <input
                        id="cta-company"
                        type="text"
                        placeholder="Your company name"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/70 focus:bg-white/[0.06] focus:ring-2 focus:ring-violet-500/10 transition-all duration-200"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full py-4 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600" />
                      <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="absolute inset-0 blur-md bg-gradient-to-r from-violet-600/50 to-blue-600/50 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                      <span className="relative flex items-center justify-center gap-2">
                        Get Started Free
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>

                    <p className="text-xs text-center text-gray-600 pt-1">
                      By signing up you agree to our{" "}
                      <a href="#contact" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
                        Terms
                      </a>{" "}
                      and{" "}
                      <a href="#contact" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
