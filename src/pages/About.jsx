import { motion } from 'framer-motion';
import pilotImg from '../assets/images/pilot_portrait.png?w=400;800&format=webp&as=srcset';
import pilotImgFallback from '../assets/images/pilot_portrait.png?w=800&format=jpg';

const About = () => {
    return (
        <div className="pt-24 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-8 uppercase">The Pilot</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                        <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                            <img
                                src={pilotImgFallback}
                                srcSet={pilotImg}
                                sizes="(max-width: 768px) 100vw, 400px"
                                alt="Pilot Portrait"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-cyan-400 mb-4 uppercase tracking-widest">Alex 'Gravity' H.</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                With over 8 years of flight experience, I bridge the gap between technical piloting skills and cinematic storytelling. Starting from competitive drone racing, I transitioned into high-end cinematography, bringing the precision of a racer to the smooth flow required for film.
                            </p>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Whether it's chasing a drift car at 100mph or navigating tight indoor spaces for a real estate tour, I deliver shots that traditional cameras simply can't achieve.
                            </p>
                            <div className="flex gap-4 mt-8">
                                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10 w-1/3">
                                    <span className="block text-3xl font-bold text-white mb-1">5k+</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">Hours Flown</span>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10 w-1/3">
                                    <span className="block text-3xl font-bold text-white mb-1">200+</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">Projects</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gear Section */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold font-orbitron mb-8 uppercase text-center">My Hangar</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { name: "Cinewhoop 3.5\"", use: "Indoors / People", desc: "Safe, ducted, smooth." },
                                { name: "5\" Freestyle", use: "High Speed / Action", desc: "100mph+ chasing capable." },
                                { name: "Heavy Lifter X8", use: "Cinema Camera", desc: "Carries RED Komodo / BMPCC." }
                            ].map((gear, i) => (
                                <div key={i} className="bg-neutral-900 border border-white/10 p-6 rounded-lg hover:border-cyan-400/50 transition-colors">
                                    <h3 className="text-xl font-bold text-white mb-2">{gear.name}</h3>
                                    <span className="inline-block px-2 py-1 bg-cyan-900/30 text-cyan-400 text-xs font-bold rounded mb-4">{gear.use}</span>
                                    <p className="text-gray-400 text-sm">{gear.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
