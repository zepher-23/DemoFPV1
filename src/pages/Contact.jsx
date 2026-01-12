import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 min-h-screen bg-black text-white flex items-center">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h1 className="text-4xl md:text-7xl font-black font-orbitron mb-8 uppercase leading-none">
                            Let's <br /> <span className="text-cyan-400">Fly</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-12 max-w-md">
                            Ready to elevate your project? Send me the details and let's create something gravity-defying.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Location</h4>
                                <p className="text-2xl font-bold">Los Angeles, CA</p>
                                <p className="text-gray-400">Available Worldwide</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Direct</h4>
                                <p className="text-2xl font-bold text-cyan-400">hello@aerovision.com</p>
                            </div>

                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-lg transition-colors uppercase tracking-wider"
                            >
                                <MessageCircle size={20} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-neutral-900/50 p-8 md:p-10 rounded-2xl border border-white/5"
                    >
                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Name</label>
                                    <input type="text" className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email</label>
                                    <input type="email" className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Project Type</label>
                                <select className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors">
                                    <option>Commercial Shoot</option>
                                    <option>Real Estate</option>
                                    <option>Event Coverage</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors" placeholder="Tell me about your vision..."></textarea>
                            </div>

                            <button className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2 group">
                                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
