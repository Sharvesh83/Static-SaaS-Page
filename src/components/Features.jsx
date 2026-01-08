import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Shield, Zap, Globe, Users, Layers } from 'lucide-react';

const features = [
    {
        icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
        title: "Advanced Analytics",
        description: "Get detailed insights into your performance with our real-time analytics dashboard."
    },
    {
        icon: <Shield className="w-6 h-6 text-purple-400" />,
        title: "Bank-Grade Security",
        description: "Your data is protected by enterprise-level encryption and security protocols."
    },
    {
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        title: "Lightning Fast",
        description: "Experience zero latency with our globally distributed edge network."
    },
    {
        icon: <Globe className="w-6 h-6 text-blue-400" />,
        title: "Global Scale",
        description: "Deploy and scale your application to millions of users worldwide in seconds."
    },
    {
        icon: <Users className="w-6 h-6 text-green-400" />,
        title: "Team Collaboration",
        description: "Built-in tools to help your team work together seamlessly from anywhere."
    },
    {
        icon: <Layers className="w-6 h-6 text-pink-400" />,
        title: "Seamless Integration",
        description: "Connect with your favorite tools through our extensive API and plugin ecosystem."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Everything you need to <span className="gradient-text">Success</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Our platform provides a comprehensive suite of tools designed to help you build, launch, and scale your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-default"
                        >
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
