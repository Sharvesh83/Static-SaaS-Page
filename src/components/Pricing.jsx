import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const pricingPlans = [
    {
        name: "Starter",
        price: "0",
        description: "Perfect for trying out our platform",
        features: [
            "Up to 5 Projects",
            "Basic Analytics",
            "Community Support",
            "1GB Storage"
        ]
    },
    {
        name: "Pro",
        price: "29",
        description: "For growing teams and businesses",
        popular: true,
        features: [
            "Unlimited Projects",
            "Advanced Analytics",
            "Priority Support",
            "10GB Storage",
            "Custom Domain",
            "API Access"
        ]
    },
    {
        name: "Enterprise",
        price: "99",
        description: "For large scale organizations",
        features: [
            "Unlimited Everything",
            "Dedicated Support",
            "SSO & Audit Logs",
            "Unlimited Storage",
            "SLA Guarantee",
            "Custom Contracts"
        ]
    }
];

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="py-24 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Simple, transparent <span className="gradient-text">Pricing</span>
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Choose the specific plan that fits your needs. Always flexible.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-14 h-8 rounded-full bg-white/10 p-1 relative transition-colors hover:bg-white/20"
                        >
                            <div className={`w-6 h-6 rounded-full bg-indigo-500 shadow-lg transition-all ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
                        </button>
                        <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-slate-400'}`}>Yearly <span className="text-indigo-400 text-xs ml-1 font-bold">SAVE 20%</span></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border ${plan.popular
                                    ? 'bg-white/10 border-indigo-500/50 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]'
                                    : 'bg-white/5 border-white/10 hover:bg-white/10 transition-colors'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-bold">$</span>
                                <span className="text-5xl font-bold">{isYearly ? (parseInt(plan.price) * 12 * 0.8 / 12).toFixed(0) : plan.price}</span>
                                <span className="text-slate-400">/mo</span>
                            </div>

                            <ul className="flex flex-col gap-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                        <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-semibold transition-all ${plan.popular
                                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-500/25'
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                                }`}>
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
