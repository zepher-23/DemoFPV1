import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 border-t border-white/5 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">
                            Aero<span className="text-cyan-400">Vision</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Pushing the boundaries of aerial cinematography. We specialize in high-speed, precision FPV flight for commercials, real estate, and action sports.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-black transition-colors text-white">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-black transition-colors text-white">
                                <Youtube size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-black transition-colors text-white">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-cyan-400" />
                                <span>hello@aerovision.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={16} className="text-cyan-400" />
                                <span>Los Angeles, CA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
                    &copy; {new Date().getFullYear()} AeroVision FPV. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
