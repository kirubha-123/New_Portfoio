import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-border-color">
            <div className="container px-6 flex flex-col items-center">
                <div className="text-2xl font-bold gradient-text mb-6">KIRUBHAKARAN C.</div>

                <div className="flex gap-6 mb-8">
                    {[
                        { icon: <Github size={20} />, href: "https://github.com/kirubha-123" },
                        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/kirubhakaran-c-0a485336b" },
                        { icon: <Twitter size={20} />, href: "#" }
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 glass-card rounded-full hover:border-accent-color transition-all"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                <p className="text-text-secondary text-sm flex items-center gap-2">
                    Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Kirubhakaran © 2026
                </p>
            </div>

            <style jsx>{`
        .text-red-500 { color: #ef4444; }
        .fill-red-500 { fill: #ef4444; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
      `}</style>
        </footer>
    );
};

export default Footer;
