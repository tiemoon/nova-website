"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Building2,
  ShoppingBag,
  Radio,
  Stethoscope,
  Landmark,
  Plane,
  GraduationCap,
  Utensils,
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    name: "Banking & Finance",
    description:
      "Answer account queries, guide loan applications, explain products, and qualify leads for financial advisors — compliantly and 24/7.",
    useCases: ["Loan inquiries", "Account info", "Card services", "Investment queries"],
    color: "#7c3aed",
    bg: "from-violet-500/15 to-purple-500/5",
  },
  {
    icon: ShoppingBag,
    name: "E-Commerce",
    description:
      "Assist shoppers with product discovery, order tracking, returns, and personalized recommendations that drive repeat purchases.",
    useCases: ["Order tracking", "Product search", "Return requests", "Upselling"],
    color: "#2563eb",
    bg: "from-blue-500/15 to-indigo-500/5",
  },
  {
    icon: Radio,
    name: "Telecom",
    description:
      "Handle plan upgrades, billing questions, tech support, and churn prevention with context-aware conversations at scale.",
    useCases: ["Plan upgrades", "Billing support", "Tech troubleshooting", "Retention"],
    color: "#06b6d4",
    bg: "from-cyan-500/15 to-teal-500/5",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    description:
      "Book appointments, answer health queries, provide medication reminders, and triage patient concerns with care and accuracy.",
    useCases: ["Appointment booking", "Health FAQs", "Reminders", "Triage"],
    color: "#10b981",
    bg: "from-emerald-500/15 to-green-500/5",
  },
  {
    icon: Building2,
    name: "Real Estate",
    description:
      "Qualify property buyers, schedule viewings, answer listing questions, and nurture prospects through the sales funnel.",
    useCases: ["Property search", "Viewing booking", "Price inquiries", "Lead capture"],
    color: "#f59e0b",
    bg: "from-amber-500/15 to-yellow-500/5",
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    description:
      "Handle bookings, itinerary queries, cancellations, and upsell travel add-ons through natural, personalized conversations.",
    useCases: ["Booking assistance", "Itinerary info", "Cancellations", "Upselling"],
    color: "#ec4899",
    bg: "from-pink-500/15 to-rose-500/5",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description:
      "Answer admission queries, guide course enrollment, provide scholarship information, and engage prospective students.",
    useCases: ["Admissions", "Course info", "Scholarships", "Student support"],
    color: "#8b5cf6",
    bg: "from-purple-500/15 to-violet-500/5",
  },
  {
    icon: Utensils,
    name: "Restaurants & Food",
    description:
      "Take reservations, answer menu questions, handle delivery queries, and collect post-visit feedback automatically.",
    useCases: ["Reservations", "Menu queries", "Delivery status", "Feedback"],
    color: "#f97316",
    bg: "from-orange-500/15 to-amber-500/5",
  },
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section id="industries" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute left-0 top-1/3 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }}
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gradient-border text-sm font-medium text-pink-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            Industries
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Built for every
            <br />
            <span className="gradient-text-pink">customer-facing business</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Nova adapts to your industry&apos;s specific needs, compliance requirements, and
            customer journey — with no complex setup required.
          </p>
        </motion.div>

        {/* Interactive industry selector */}
        <div ref={ref} className="grid lg:grid-cols-5 gap-6">
          {/* Industry list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-2"
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <button
                  key={industry.name}
                  onClick={() => setActive(index)}
                  className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 border ${
                    active === index
                      ? "glass-card border-violet-500/40 shadow-lg"
                      : "border-transparent hover:bg-white/3 hover:border-white/5"
                  }`}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background:
                        active === index
                          ? `${industry.color}25`
                          : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <Icon
                      className="w-4 h-4 transition-colors duration-300"
                      style={{ color: active === index ? industry.color : "#6b7280" }}
                    />
                  </div>
                  <span
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      active === index ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {industry.name}
                  </span>
                  {active === index && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-400" />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Detail panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`glass-card rounded-3xl p-8 border border-violet-500/20 h-full bg-gradient-to-br ${industries[active].bg}`}
            >
              {/* Industry header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `${industries[active].color}20` }}
                >
                  {(() => {
                    const Icon = industries[active].icon;
                    return (
                      <Icon
                        className="w-7 h-7"
                        style={{ color: industries[active].color }}
                      />
                    );
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{industries[active].name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Industry Solution</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 text-base">
                {industries[active].description}
              </p>

              {/* Use cases */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Key Use Cases
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {industries[active].useCases.map((uc) => (
                    <div
                      key={uc}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-gray-300"
                      style={{ background: `${industries[active].color}10` }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: industries[active].color }}
                      />
                      {uc}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:opacity-80"
                  style={{ color: industries[active].color }}
                >
                  Get a demo for {industries[active].name} →
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
