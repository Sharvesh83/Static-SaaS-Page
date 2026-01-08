import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black/20 pt-16 pb-8 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white">
                                S
                            </div>
                            <span className="text-xl font-bold">SaaSify</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Building the future of digital products, one pixel at a time.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Product</h4>
                        <ul className="flex flex-col gap-2 text-sm text-slate-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Integration</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Enterprise</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="flex flex-col gap-2 text-sm text-slate-400">
                            <li className="hover:text-white cursor-pointer transition-colors">About</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Legal</h4>
                        <ul className="flex flex-col gap-2 text-sm text-slate-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Terms</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Security</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2024 SaaSify Inc. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Social icons placeholder */}
                        <div className="w-5 h-5 bg-slate-700/50 rounded-full" />
                        <div className="w-5 h-5 bg-slate-700/50 rounded-full" />
                        <div className="w-5 h-5 bg-slate-700/50 rounded-full" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
