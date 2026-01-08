import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/20 blur-[100px] rounded-full opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                        <span className="text-sm font-medium text-indigo-300">New Feature: AI Analytics</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Scale your business with <br />
                        <span className="gradient-text">Intelligent Tools</span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Streamline your workflow, analyze data in real-time, and drive growth with our all-in-one SaaS platform designed for modern teams.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] flex items-center justify-center gap-2">
                            Start Free Trial
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold backdrop-blur-sm transition-all flex items-center justify-center gap-2">
                            View Demo
                        </button>
                    </div>

                    {/* Social Proof / Stats */}
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-slate-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {/* Simple text logos for placeholder */}
                        <span className="text-xl font-bold">ACME Corp</span>
                        <span className="text-xl font-bold">GlobalTech</span>
                        <span className="text-xl font-bold">Nebula</span>
                        <span className="text-xl font-bold">Vertex</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
