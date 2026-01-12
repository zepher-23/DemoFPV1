import { motion } from 'framer-motion';
import { Camera, Home, Zap, Map } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Zap size={40} className="text-cyan-400" />,
            title: "Action Sports",
            desc: "High-speed chasing of cars, bikes, and boats. We keep up with the action where others can't.",
            price: "From $1,500/day"
        },
        {
            icon: <Home size={40} className="text-purple-500" />,
            title: "Real Estate",
            desc: "Seamless indoor-to-outdoor fly-throughs. Showcasing properties in a single continuous shot.",
            price: "From $800/listing"
        },
        {
            icon: <Camera size={40} className="text-yellow-400" />,
            title: "Commercial Cinema",
            desc: "Heavy-lift capabilities for cinema standard cameras (RED, BMPCC) for high-end productions.",
            price: "Custom Quote"
        },
        {
            icon: <Map size={40} className="text-green-400" />,
            title: "Events & Festivals",
            desc: "Capturing the energy of live events from unique aerial perspectives safely.",
            price: "From $1,200/event"
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 uppercase">Our Services</h1>
                    <p className="text-gray-400">
                        We provide diverse FPV solutions tailored to your production needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-neutral-900/50 border border-white/5 p-8 rounded-xl hover:bg-neutral-900 hover:border-cyan-500/30 transition-all group"
                        >
                            <div className="bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 font-orbitron">{service.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed border-b border-white/5 pb-6">
                                {service.desc}
                            </p>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                                {service.price}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
