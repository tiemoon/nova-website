"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageSquare,
  HeadphonesIcon,
  TrendingUp,
  UserCheck,
  ShoppingCart,
  Bell,
  Repeat2,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Omnichannel Conversations",
    description:
      "Engages customers on Messenger, Facebook comments, Instagram DMs, web chat, and more — from a single intelligent engine.",
    gradient: "from-violet-500/20 to-purple-500/10",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15",
    border: "border-violet-500/20 hover:border-violet-500/50",
    glow: "group-hover:shadow-violet-500/20",
  },
  {
    icon: HeadphonesIcon,
    title: "Smart Customer Support",
    description:
      "Resolves queries instantly, creates support tickets automatically, and escalates complex issues to the right human agent.",
    gradient: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15",
    border: "border-blue-500/20 hover:border-blue-500/50",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation & Scoring",
    description:
      "Identifies high-intent prospects, qualifies them through conversation, and scores leads before handing them to your sales team.",
    gradient: "from-cyan-500/20 to-teal-500/10",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    icon: ShoppingCart,
    title: "Product Recommendations",
    description:
      "Understands customer intent and presents the most relevant products, services, or offers — boosting conversion rates significantly.",
    gradient: "from-pink-500/20 to-rose-500/10",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/15",
    border: "border-pink-500/20 hover:border-pink-500/50",
    glow: "group-hover:shadow-pink-500/20",
  },
  {
    icon: UserCheck,
    title: "Customer Profiling",
    description:
      "Builds rich profiles from every interaction, learning preferences and purchase history to personalize future conversations.",
    gradient: "from-amber-500/20 to-orange-500/10",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15",
    border: "border-amber-500/20 hover:border-amber-500/50",
    glow: "group-hover:shadow-amber-500/20",
  },
  {
    icon: Repeat2,
    title: "Contextual Awareness",
    description:
      "Remembers conversation history across sessions, ensuring every interaction feels seamless, personal, and relevant.",
    gradient: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/15",
    border: "border-green-500/20 hover:border-green-500/50",
    glow: "group-hover:shadow-green-500/20",
  },
  {
    icon: Bell,
    title: "Proactive Outreach",
    description:
      "Sends timely follow-ups, appointment reminders, and promotional messages to keep customers engaged and informed.",
    gradient: "from-indigo-500/20 to-violet-500/10",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/15",
    border: "border-indigo-500/20 hover:border-indigo-500/50",
    glow: "group-hover:shadow-indigo-500/20",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description:
      "Communicates fluently in the customer's preferred language, breaking barriers and expanding your reach globally.",
    gradient: "from-teal-500/20 to-cyan-500/10",
    iconColor: "text-teal-400",
    iconBg: "bg-teal-500/15",
    border: "border-teal-500/20 hover:border-teal-500/50",
    glow: "group-hover:shadow-teal-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)",
          }}
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gradient-border text-sm font-medium text-violet-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Capabilities
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Everything your business needs
            <br />
            <span className="gradient-text">in one AI agent</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Nova combines customer support, sales, and lead generation into a single
            intelligent agent that works across all your digital channels simultaneously.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className={`group glass-card rounded-2xl p-6 cursor-default border transition-all duration-300 ${feature.border} hover:shadow-xl ${feature.glow}`}
              >
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                </div>

                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${feature.gradient} rounded-t-2xl opacity-60`}
                />

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-violet-200 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-violet-300 hover:text-white border border-violet-500/30 hover:border-violet-500 rounded-xl hover:bg-violet-500/10 transition-all duration-300"
          >
            See all capabilities →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
