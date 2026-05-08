import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
            <div className="container flex justify-between items-center px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold gradient-text cursor-pointer"
                >
                    KIRUBHAKARAN C.
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md-flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            whileHover={{ scale: 1.1 }}
                            className="text-sm font-medium text-text-secondary hover-text-white transition-colors"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <div className="flex items-center space-x-4 ml-4">
                        <a href="https://github.com/kirubha-123" target="_blank" rel="noreferrer">
                            <Github size={20} className="text-text-secondary hover-text-white cursor-pointer transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/kirubhakaran-c-0a485336b" target="_blank" rel="noreferrer">
                            <Linkedin size={20} className="text-text-secondary hover-text-white cursor-pointer transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md-hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md-hidden bg-bg-color overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 px-6 py-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-text-secondary hover-text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
        .glass-nav {
          background: rgba(3, 7, 18, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
