import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-indigo-500/30">
            <Navbar />
            <Hero />
            <Features />
            <Testimonials />
            <Pricing />
            <Footer />
        </div>
    );
}

export default App;
