"use client";

import { useEffect, useState } from "react";
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

function NovaFace() {
  return (
    <svg viewBox="0 0 200 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="skinGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fde8d0" />
          <stop offset="60%" stopColor="#f5c49a" />
          <stop offset="100%" stopColor="#e8a87c" />
        </radialGradient>
        <radialGradient id="skinShadow" cx="50%" cy="70%" r="60%">
          <stop offset="0%" stopColor="rgba(200,120,70,0.25)" />
          <stop offset="100%" stopColor="rgba(200,120,70,0)" />
        </radialGradient>
        <linearGradient id="hairGrad" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#160830" />
          <stop offset="40%" stopColor="#260c50" />
          <stop offset="100%" stopColor="#0a0418" />
        </linearGradient>
        <radialGradient id="irisLeft" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ddd6fe" />
          <stop offset="45%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#4c1d95" />
        </radialGradient>
        <radialGradient id="irisRight" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ddd6fe" />
          <stop offset="45%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#4c1d95" />
        </radialGradient>
        <filter id="eyeGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="lipGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#f9a8c9" />
          <stop offset="100%" stopColor="#e05c8a" />
        </radialGradient>
        <radialGradient id="blushGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(251,113,133,0.25)" />
          <stop offset="100%" stopColor="rgba(251,113,133,0)" />
        </radialGradient>
      </defs>

      {/* Hair — back layer */}
      <path
        d="M30 130 Q22 85 35 52 Q52 15 100 8 Q148 15 165 52 Q178 85 170 130 Q175 170 168 195 Q148 215 100 220 Q52 215 32 195 Q25 170 30 130Z"
        fill="url(#hairGrad)"
      />

      {/* Hair side volumes */}
      <path d="M30 130 Q20 100 28 70 Q24 90 28 115Z" fill="#0a0418" opacity="0.6" />
      <path d="M170 130 Q180 100 172 70 Q176 90 172 115Z" fill="#0a0418" opacity="0.6" />

      {/* Face oval */}
      <ellipse cx="100" cy="120" rx="58" ry="66" fill="url(#skinGrad)" />

      {/* Face shadow (depth) */}
      <ellipse cx="100" cy="125" rx="58" ry="66" fill="url(#skinShadow)" />

      {/* Forehead highlight */}
      <ellipse cx="100" cy="88" rx="28" ry="14" fill="rgba(255,240,225,0.25)" />

      {/* Neck */}
      <path d="M85 178 Q85 198 100 202 Q115 198 115 178 Q112 172 100 171 Q88 172 85 178Z" fill="url(#skinGrad)" />

      {/* Neck shadow */}
      <path d="M88 178 Q88 195 100 199 Q112 195 112 178" stroke="rgba(180,100,60,0.15)" strokeWidth="2" fill="none" />

      {/* Left eyebrow */}
      <path d="M60 92 Q71 84 83 88" stroke="#2d1040" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M60 92 Q71 84 83 88" stroke="#5b2d8a" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3" />

      {/* Right eyebrow */}
      <path d="M117 88 Q129 84 140 92" stroke="#2d1040" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M117 88 Q129 84 140 92" stroke="#5b2d8a" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3" />

      {/* Left eye — white */}
      <ellipse cx="73" cy="107" rx="14" ry="9" fill="white" />
      {/* Left iris */}
      <circle cx="73" cy="107" r="7.5" fill="url(#irisLeft)" filter="url(#eyeGlowFilter)" />
      {/* Left pupil */}
      <circle cx="73" cy="107" r="4" fill="#110620" />
      {/* Left eye shine */}
      <circle cx="75.5" cy="104.5" r="2.2" fill="white" opacity="0.95" />
      <circle cx="71.5" cy="108.5" r="1" fill="white" opacity="0.5" />
      {/* Left eye glow halo */}
      <ellipse cx="73" cy="107" rx="14" ry="9" fill="none" stroke="#a78bfa" strokeWidth="1.2" opacity="0.4" />
      {/* Left lashes top */}
      <path d="M59 107 Q61 100 66 97" stroke="#1a0830" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M61 104 Q63 98 67 96" stroke="#1a0830" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M64 102 Q65 96 70 95" stroke="#1a0830" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Right eye — white */}
      <ellipse cx="127" cy="107" rx="14" ry="9" fill="white" />
      {/* Right iris */}
      <circle cx="127" cy="107" r="7.5" fill="url(#irisRight)" filter="url(#eyeGlowFilter)" />
      {/* Right pupil */}
      <circle cx="127" cy="107" r="4" fill="#110620" />
      {/* Right eye shine */}
      <circle cx="129.5" cy="104.5" r="2.2" fill="white" opacity="0.95" />
      <circle cx="125.5" cy="108.5" r="1" fill="white" opacity="0.5" />
      {/* Right eye glow halo */}
      <ellipse cx="127" cy="107" rx="14" ry="9" fill="none" stroke="#a78bfa" strokeWidth="1.2" opacity="0.4" />
      {/* Right lashes top */}
      <path d="M141 107 Q139 100 134 97" stroke="#1a0830" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M139 104 Q137 98 133 96" stroke="#1a0830" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M136 102 Q135 96 130 95" stroke="#1a0830" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Nose (subtle) */}
      <path d="M97 122 Q94 131 96 136 Q100 139 104 136 Q106 131 103 122" stroke="#d08860" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.35" />
      <path d="M96 136 Q100 140 104 136" stroke="#d08860" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.45" />

      {/* Cheek blush */}
      <ellipse cx="62" cy="125" rx="14" ry="9" fill="url(#blushGrad)" />
      <ellipse cx="138" cy="125" rx="14" ry="9" fill="url(#blushGrad)" />

      {/* Upper lip */}
      <path d="M82 150 Q88 145 100 147 Q112 145 118 150" stroke="#d0567a" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Lower lip */}
      <path d="M82 150 Q89 160 100 159 Q111 160 118 150" fill="url(#lipGrad)" opacity="0.85" />
      <path d="M82 150 Q89 160 100 159 Q111 160 118 150" stroke="#d0567a" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Lip highlight */}
      <ellipse cx="100" cy="157" rx="8" ry="3" fill="rgba(255,200,220,0.3)" />

      {/* Hair — front layer over face edges */}
      <path d="M42 80 Q38 60 48 40 Q56 22 70 14 Q42 28 35 58 Q28 82 30 115Z" fill="url(#hairGrad)" opacity="0.85" />
      <path d="M158 80 Q162 60 152 40 Q144 22 130 14 Q158 28 165 58 Q172 82 170 115Z" fill="url(#hairGrad)" opacity="0.85" />

      {/* Hair — top center parting highlight */}
      <path d="M88 8 Q94 6 100 8 Q106 6 112 8" stroke="#3d1a6e" strokeWidth="2" fill="none" opacity="0.4" />

      {/* AI glow dot — forehead */}
      <circle cx="100" cy="70" r="2.5" fill="#a78bfa" opacity="0.6" filter="url(#softGlow)" />
      <circle cx="100" cy="70" r="1.2" fill="#ddd6fe" opacity="0.9" />
    </svg>
  );
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
      <div className="relative w-48 h-48 float-animation z-10">
        {/* Circular clip frame */}
        <div className="absolute inset-0 rounded-full overflow-hidden"
          style={{ boxShadow: "0 0 40px rgba(124,58,237,0.5), 0 0 80px rgba(124,58,237,0.15)" }}>
          {/* Background gradient inside circle */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a30] via-[#0f0820] to-[#0a0418]" />
          {/* Face SVG */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="w-full" style={{ marginBottom: "-8px" }}>
              <NovaFace />
            </div>
          </div>
        </div>
        {/* Outer rim */}
        <div className="absolute inset-0 rounded-full border-2 border-violet-500/50" />
        {/* Pulse rings */}
        {[1, 2].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-violet-400/30"
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
