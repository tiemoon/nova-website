"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { TrendingUp, Clock, Users, Star } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 340,
    suffix: "%",
    label: "Increase in Lead Conversion",
    description: "Businesses see on average a 3.4x improvement",
    color: "violet",
  },
  {
    icon: Clock,
    value: 0.3,
    suffix: "s",
    label: "Average Response Time",
    description: "Customers get answers instantly, every time",
    color: "blue",
  },
  {
    icon: Users,
    value: 98,
    suffix: "%",
    label: "Customer Satisfaction",
    description: "CSAT scores consistently above industry average",
    color: "cyan",
  },
  {
    icon: Star,
    value: 10,
    suffix: "x",
    label: "ROI on Support Costs",
    description: "Reduce support team workload by 90%",
    color: "pink",
  },
];

const colorMap: Record<string, { icon: string; bg: string; glow: string }> = {
  violet: { icon: "text-violet-400", bg: "bg-violet-500/10", glow: "shadow-violet-500/20" },
  blue: { icon: "text-blue-400", bg: "bg-blue-500/10", glow: "shadow-blue-500/20" },
  cyan: { icon: "text-cyan-400", bg: "bg-cyan-500/10", glow: "shadow-cyan-500/20" },
  pink: { icon: "text-pink-400", bg: "bg-pink-500/10", glow: "shadow-pink-500/20" },
};

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent =
          value < 1 ? v.toFixed(1) + suffix : Math.round(v) + suffix;
      }
    });
    return unsubscribe;
  }, [motionValue, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const testimonials = [
  {
    quote:
      "Nova transformed how we handle customer inquiries. Our lead conversion rate jumped by 280% in the first month alone. It's like having 50 extra sales reps working around the clock.",
    author: "Sarah Chen",
    role: "VP of Digital Sales",
    company: "PacificBank",
    avatar: "SC",
    rating: 5,
    color: "#7c3aed",
  },
  {
    quote:
      "We went from a 4-hour average response time to under a minute. Our customers are happier, our support team is less overwhelmed, and we're closing more deals than ever.",
    author: "Marcus Rivera",
    role: "Head of E-Commerce",
    company: "StyleForward",
    avatar: "MR",
    rating: 5,
    color: "#2563eb",
  },
  {
    quote:
      "The intelligence behind Nova is impressive. It doesn't just answer questions — it understands context, remembers previous conversations, and recommends the right plans proactively.",
    author: "Priya Nair",
    role: "Chief Customer Officer",
    company: "Nexatel",
    avatar: "PN",
    rating: 5,
    color: "#06b6d4",
  },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d20] to-[#0a0a0f]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 100% 50% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Numbers that <span className="gradient-text">speak volumes</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Real results from businesses already using Nova to power their customer conversations.
            </p>
          </motion.div>

          <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const colors = colorMap[stat.color];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass-card rounded-2xl p-6 border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl ${colors.glow}`}
                >
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <div className="text-4xl font-black text-white mb-1">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm font-semibold text-gray-300 mb-1">{stat.label}</p>
                  <p className="text-xs text-gray-600">{stat.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0f]">
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gradient-border text-sm font-medium text-yellow-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              Customer Stories
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
              Loved by teams
              <br />
              <span className="gradient-text">across industries</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="glass-card rounded-2xl p-7 border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array(t.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">{t.quote}</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.author}</p>
                    <p className="text-xs text-gray-500">{t.role} · {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
