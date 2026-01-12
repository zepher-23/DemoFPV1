import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Plane } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Services', path: '/services' },
        { name: 'Locations', path: '/locations' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent',
                scrolled
                    ? 'bg-black/80 backdrop-blur-md border-white/10 py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold flex items-center gap-2 text-white group">
                    <Plane className="w-8 h-8 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
                    <span className="tracking-tighter uppercase font-orbitron">AERO<span className="text-cyan-400">VISION</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                cn(
                                    'text-sm font-medium uppercase tracking-widest hover:text-cyan-400 transition-colors relative group',
                                    isActive ? 'text-cyan-400' : 'text-gray-300'
                                )
                            }
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
                        </NavLink>
                    ))}
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-bold text-sm uppercase tracking-wide rounded-sm transition-all transform hover:scale-105"
                    >
                        Book Flight
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu className="w-8 h-8" />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {createPortal(
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            <button
                                className="absolute top-6 right-6 text-white/50 hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X className="w-10 h-10" />
                            </button>

                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-4xl font-bold text-white hover:text-cyan-400 uppercase tracking-tighter"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </nav>
    );
};

export default Navbar;
