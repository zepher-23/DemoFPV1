import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { List } from 'lucide-react';

const categories = ["All", "Automotive", "Cinematic", "Real Estate", "Freestyle"];

const projects = [
    { id: 1, title: "Drift Championship 2024", category: "Automotive", image: "/drift_championship.png" },
    { id: 2, title: "Mountain Ridge", category: "Cinematic", image: "/mountain_ridge.png" },
    { id: 3, title: "City Skyline Night", category: "Freestyle", image: "/city_skyline_night.png" },
    { id: 4, title: "Luxury Villa Tour", category: "Real Estate", image: "/luxury_villa.png" },
    { id: 5, title: "Desert Rally", category: "Automotive", image: "/desert_rally.png" },
    { id: 6, title: "Ocean Cliff Dive", category: "Cinematic", image: "/ocean_cliff_dive.png" },
];

const Portfolio = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

    return (
        <div className="pt-24 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-4 uppercase">Selected Works</h1>
                        <p className="text-gray-400">A curation of my best flights.</p>
                    </div>

                    <Link to="/flight-logs" className="mt-4 md:mt-0 px-6 py-3 border border-white/20 hover:border-cyan-400 text-sm font-bold uppercase tracking-widest text-white hover:text-cyan-400 transition-all flex items-center gap-2">
                        <List size={16} /> View Flight Logs
                    </Link>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all border ${filter === cat
                                ? 'bg-cyan-500 border-cyan-500 text-black'
                                : 'bg-transparent border-white/10 text-gray-500 hover:border-white hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative aspect-video bg-neutral-900 overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">{project.category}</span>
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No projects found in this category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
