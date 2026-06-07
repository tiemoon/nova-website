"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  Brain,
  Sparkles,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Customer Reaches Out",
    description:
      "A visitor sends a message on Facebook, Messenger, your website chat, or any connected channel. Nova detects the intent immediately.",
    color: "violet",
    detail: "Messenger · Facebook · Web Chat · WhatsApp",
  },
  {
    number: "02",
    icon: Brain,
    title: "Nova Understands & Analyzes",
    description:
      "Nova's AI engine processes the message, identifies intent, checks customer history, and selects the best response strategy in milliseconds.",
    color: "blue",
    detail: "NLP · Context Memory · Intent Classification",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Intelligent Response Delivered",
    description:
      "Nova replies with accurate, personalized information — answering questions, recommending products, or creating a support ticket automatically.",
    color: "cyan",
    detail: "Recommendations · Support · Lead Scoring",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Lead Captured & Handed Off",
    description:
      "Qualified leads are captured with full context and routed to your CRM or sales team. Support tickets are logged. Conversions are tracked.",
    color: "green",
    detail: "CRM Integration · Ticket System · Analytics",
  },
];

const colorMap: Record<string, { ring: string; icon: string; bg: string; line: string; badge: string }> = {
  violet: {
    ring: "border-violet-500/40",
    icon: "text-violet-400",
    bg: "bg-violet-500/10",
    line: "from-violet-500/50",
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  },
  blue: {
    ring: "border-blue-500/40",
    icon: "text-blue-400",
    bg: "bg-blue-500/10",
    line: "from-blue-500/50",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  cyan: {
    ring: "border-cyan-500/40",
    icon: "text-cyan-400",
    bg: "bg-cyan-500/10",
    line: "from-cyan-500/50",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  },
  green: {
    ring: "border-green-500/40",
    icon: "text-green-400",
    bg: "bg-green-500/10",
    line: "from-green-500/50",
    badge: "bg-green-500/15 text-green-300 border-green-500/30",
  },
};

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1f] to-[#0a0a0f]">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gradient-border text-sm font-medium text-cyan-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            How Nova Works
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            From first message
            <br />
            <span className="gradient-text">to closed deal</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Nova operates as a seamless pipeline — from initial contact to qualified lead — entirely
            automated and always optimizing.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-blue-500/30 to-transparent hidden sm:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colors = colorMap[step.color];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  className={`relative flex items-start gap-6 sm:gap-0 lg:mb-14 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 ${
                      isEven ? "sm:pr-14 sm:text-right" : "sm:pl-14 sm:text-left"
                    }`}
                  >
                    <div
                      className={`glass-card rounded-2xl p-6 border ${colors.ring} hover:shadow-xl transition-all duration-300 inline-block text-left`}
                      style={{ width: "100%" }}
                    >
                      {/* Mobile icon */}
                      <div className="flex items-center gap-3 mb-3 sm:hidden">
                        <div className={`w-9 h-9 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-4 h-4 ${colors.icon}`} />
                        </div>
                        <span className="text-2xl font-black text-gray-700">{step.number}</span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-3">{step.description}</p>
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${colors.badge}`}
                      >
                        {step.detail}
                      </span>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-full glass-card border-2 items-center justify-center relative z-10 mt-4"
                    style={{ borderColor: `rgba(124,58,237,0.4)` }}>
                    <div className={`w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${colors.icon}`} />
                    </div>
                  </div>

                  {/* Empty spacer */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              );
            })}
          </div>

          {/* Down arrows between steps for mobile */}
          <div className="sm:hidden space-y-4 -mt-2">
            {[...Array(steps.length - 1)].map((_, i) => (
              <div key={i} className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-violet-500/50" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 glass-card rounded-2xl px-6 py-4 border border-violet-500/20">
            <div className="flex -space-x-1">
              {["violet", "blue", "cyan"].map((c) => (
                <div
                  key={c}
                  className={`w-2.5 h-2.5 rounded-full ${
                    c === "violet" ? "bg-violet-500" : c === "blue" ? "bg-blue-500" : "bg-cyan-500"
                  } border border-[#0a0a0f]`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">
              Average time from first message to qualified lead:{" "}
              <span className="text-white font-semibold">under 3 minutes</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
