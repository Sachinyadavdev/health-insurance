"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Check } from "lucide-react";

export default function PlansPage() {
  const plans = [
    {
      name: "Basic Shield",
      description: "Essential health coverage for individuals.",
      premium: 49,
      coverage: 100000,
      features: [
        "Inpatient Hospitalization",
        "Pre & Post Hospitalization",
        "Day Care Procedures",
        "Ambulance Cover",
      ]
    },
    {
      name: "Family Plus",
      description: "Comprehensive coverage for your entire family.",
      premium: 129,
      coverage: 500000,
      popular: true,
      features: [
        "Everything in Basic Shield",
        "Maternity Cover",
        "Free Annual Health Checkup",
        "No Copayment",
        "Global Coverage",
      ]
    },
    {
      name: "Senior Care",
      description: "Specialized health protection for seniors.",
      premium: 199,
      coverage: 1000000,
      features: [
        "Pre-existing Diseases Covered",
        "OPD Expenses",
        "Alternative Treatments (AYUSH)",
        "Home Healthcare",
      ]
    }
  ];

  return (
    <div className="py-16 min-h-[calc(100vh-80px)]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">
          Choose the <span className="text-emerald-600">Perfect Plan</span>
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          Transparent pricing, comprehensive coverage. Protect your health and wealth with our tailored insurance plans.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex flex-col p-8 rounded-3xl bg-white dark:bg-neutral-900 border ${
              plan.popular 
                ? 'border-emerald-500 shadow-2xl shadow-emerald-500/20' 
                : 'border-neutral-200 dark:border-neutral-800'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold tracking-wide uppercase">
                Most Popular
              </div>
            )}
            
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-xl ${plan.popular ? 'bg-emerald-500 text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300'}`}>
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold">{plan.name}</h2>
            </div>
            
            <p className="text-neutral-500 text-sm mb-6 h-10">{plan.description}</p>
            
            <div className="mb-6 pb-6 border-b border-neutral-100 dark:border-neutral-800">
              <span className="text-4xl font-extrabold">${plan.premium}</span>
              <span className="text-neutral-500">/month</span>
              <div className="text-sm text-emerald-600 font-medium mt-2">
                Up to ${plan.coverage.toLocaleString()} Coverage
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-full font-bold transition-all ${
              plan.popular
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-emerald-500/25'
                : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white'
            }`}>
              Buy Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
