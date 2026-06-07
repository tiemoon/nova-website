"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Mail, Building2, User } from "lucide-react";

const benefits = [
  "No credit card required",
  "Setup in under 10 minutes",
  "Free 14-day trial",
  "Cancel anytime",
];

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#080810]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        {/* Shimmer line */}
        <div className="absolute top-0 left-0 right-0 h-px shimmer opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
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

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["#7c3aed", "#2563eb", "#06b6d4", "#10b981", "#ec4899"].map((color, i) => (
                  <div
                    key={i}
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
            <div className="glass-card rounded-3xl p-8 border border-violet-500/20 shadow-2xl shadow-violet-950/30">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h3>
                  <p className="text-gray-400 text-sm">
                    We&apos;ll reach out to {form.email} within 24 hours to set up your demo.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Start your free trial</h3>
                    <p className="text-sm text-gray-500">No credit card needed. Up and running in minutes.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Your full name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/60 focus:bg-white/7 transition-all duration-200"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="email"
                        placeholder="Work email address"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/60 focus:bg-white/7 transition-all duration-200"
                      />
                    </div>

                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Company name"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/60 focus:bg-white/7 transition-all duration-200"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full py-4 rounded-xl text-sm font-semibold text-white overflow-hidden mt-2 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600" />
                      <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative flex items-center justify-center gap-2">
                        Get Started Free
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>

                    <p className="text-xs text-center text-gray-600 mt-3">
                      By signing up, you agree to our{" "}
                      <a href="#" className="text-violet-400 hover:text-violet-300">Terms</a>{" "}
                      and{" "}
                      <a href="#" className="text-violet-400 hover:text-violet-300">Privacy Policy</a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
