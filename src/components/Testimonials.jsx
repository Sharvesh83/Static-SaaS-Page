import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "This platform has completely transformed how we handle our analytics. The insights are deeper and easier to understand.",
        author: "Sarah Johnson",
        role: "CTO at TechFlow",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
        quote: "The security features are top-notch. We feel completely safe scaling our enterprise operations on this infrastructure.",
        author: "Michael Chen",
        role: "VP of Engineering at DataCorp",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
        quote: "Customer support is incredible. They helped us integrate our custom stack in less than 24 hours.",
        author: "Emily Davis",
        role: "Product Manager at StartUp Inc",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Trusted by <span className="gradient-text">leaders</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        See what our customers have to say about their experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl relative"
                        >
                            <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6" />
                            <p className="text-slate-300 mb-6 italic leading-relaxed relative z-10">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.author}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/30"
                                />
                                <div>
                                    <h4 className="font-bold text-white">{item.author}</h4>
                                    <p className="text-sm text-indigo-400">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
