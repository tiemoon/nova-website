"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Shield } from "lucide-react";

const typingPhrases = [
  "Lead Generation Representative",
  "Customer Engagement Engine",
  "24/7 Digital Sales Assistant",
  "Intelligent Support Agent",
];

function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingPhrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  return <span className="gradient-text typing-cursor">{displayed}</span>;
}


function NovaAvatar() {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {/* Outer glow rings */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-violet-500/10"
          style={{
            width: `${140 + i * 90}px`,
            height: `${140 + i * 90}px`,
            animation: `spin-slow ${10 + i * 5}s linear infinite ${i % 2 === 0 ? "reverse" : ""}`,
          }}
        >
          <div
            className="absolute w-2 h-2 rounded-full bg-violet-500"
            style={{
              top: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: "0 0 10px 3px rgba(124,58,237,0.6)",
            }}
          />
        </div>
      ))}

      {/* Middle ring with data points */}
      <div
        className="absolute w-80 h-80 rounded-full border border-blue-500/20"
        style={{ animation: "spin-slow 25s linear infinite reverse" }}
      >
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <div
            key={deg}
            className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${deg}deg) translateX(155px) translateY(-50%)`,
              boxShadow: "0 0 8px 2px rgba(37,99,235,0.5)",
            }}
          />
        ))}
      </div>

      {/* Nova face — center */}
      <div className="relative w-56 h-56 float-animation z-10">
        {/* Circular photo frame */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{ boxShadow: "0 0 50px rgba(124,58,237,0.55), 0 0 100px rgba(124,58,237,0.18)" }}
        >
          <Image
            src="/nova.png"
            alt="Nova — AI Representative"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Subtle violet tint overlay for brand cohesion */}
          <div className="absolute inset-0 bg-violet-900/10 mix-blend-multiply" />
        </div>
        {/* Outer rim */}
        <div className="absolute inset-0 rounded-full border-2 border-violet-500/60" />
        {/* Pulse rings */}
        {[1, 2].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-violet-400/25"
            style={{
              animation: `pulse-ring ${1.5 + i * 0.8}s cubic-bezier(0.215, 0.61, 0.355, 1) infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15"
        style={{ animation: "spin-slow 30s linear infinite" }}
      >
        {[0, 45, 90, 135].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 250, cy = 250;
          const r = 200;
          return (
            <line
              key={angle}
              x1={cx}
              y1={cy}
              x2={cx + Math.cos(rad) * r}
              y2={cy + Math.sin(rad) * r}
              stroke="url(#lineGradNova)"
              strokeWidth="1"
            />
          );
        })}
        <defs>
          <linearGradient id="lineGradNova" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="1" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating stat pills */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute -left-10 top-1/4 glass-card rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl"
      >
        <div className="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center">
          <Shield className="w-4 h-4 text-green-400" />
        </div>
        <div>
          <p className="text-xs text-gray-400">Leads Captured</p>
          <p className="text-sm font-bold text-white">+12,847</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute -right-10 bottom-1/3 glass-card rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl"
      >
        <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-violet-400" />
        </div>
        <div>
          <p className="text-xs text-gray-400">Response Time</p>
          <p className="text-sm font-bold text-white">0.3s avg</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div
          className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full orb-animate"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
            animation: "float-orb 18s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            animation: "float-orb 12s ease-in-out infinite",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full gradient-border text-sm font-medium text-violet-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              AI-Powered Digital Engagement
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white">
                Meet <span className="gradient-text">Nova</span>
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white">
                Your AI
              </h1>
              <div className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight text-gray-300 min-h-[3rem] flex items-center">
                <TypingText />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
            >
              Nova instantly responds to customers across Messenger, Facebook, and every digital
              touchpoint — qualifying leads, handling support, and turning conversations into
              conversions,{" "}
              <span className="text-white font-medium">24/7 without breaks.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8"
            >
              {[
                { value: "98%", label: "Response Rate" },
                { value: "0.3s", label: "Avg Response" },
                { value: "10x", label: "Lead Conversion" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-black gradient-text">{stat.value}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 animate-gradient-x" />
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 blur-md opacity-50 group-hover:opacity-70 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-gray-300 hover:text-white rounded-2xl border border-gray-700 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300"
              >
                <Play className="w-4 h-4 fill-current" />
                See How It Works
              </a>
            </motion.div>
          </div>

          {/* Right — Nova Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <NovaAvatar />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-violet-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
