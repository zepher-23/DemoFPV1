import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image / Video Placeholder */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                    <img
                        src="/hero.png"
                        alt="Drone Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-cyan-400 font-bold tracking-[0.2em] font-orbitron mb-4 text-sm md:text-base">CINEMATIC FPV</h2>
                        <h1 className="text-4xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase font-orbitron">
                            Beyond <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Gravity</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            Capturing the impossible. High-speed, precision aerial cinematography for film, commercials, and events.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link
                                to="/portfolio"
                                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold uppercase tracking-wide rounded-sm transition-all transform hover:scale-105 flex items-center gap-2"
                            >
                                View Works <ArrowRight size={20} />
                            </Link>
                            <button
                                className="px-8 py-4 border border-white/20 hover:border-cyan-400 hover:text-cyan-400 text-white font-bold uppercase tracking-wide rounded-sm transition-all backdrop-blur-sm flex items-center gap-2 group"
                            >
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-400/20">
                                    <Play size={14} className="ml-1" fill="currentColor" />
                                </div>
                                Showreel
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Portfolio Preview */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-2">Featured Swaps</h2>
                            <div className="h-1 w-20 bg-cyan-500"></div>
                        </div>
                        <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-white transition-colors uppercase font-bold text-sm tracking-widest">
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="group relative overflow-hidden rounded-lg aspect-video bg-neutral-900 cursor-pointer">
                                <div className="absolute inset-0 bg-neutral-800 animate-pulse group-hover:animate-none transition-all">
                                    {/* Placeholder content would go here */}
                                    <img
                                        src={`https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                                        className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                                        alt="Portfolio Item"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2 block">Automotive</span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Drift Event 2025</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors uppercase font-bold text-sm tracking-widest">
                            View All Works <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Ticker / Clients */}
            <section className="py-12 border-y border-white/5 bg-neutral-900/50">
                <div className="container mx-auto px-6">
                    <p className="text-center text-gray-500 uppercase tracking-widest text-sm mb-8">Trusted by industry leaders</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        <h3 className="text-2xl font-bold font-orbitron">RED BULL</h3>
                        <h3 className="text-2xl font-bold font-orbitron">PORSCHE</h3>
                        <h3 className="text-2xl font-bold font-orbitron">GOPRO</h3>
                        <h3 className="text-2xl font-bold font-orbitron">MONSTER</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
