import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Globe } from 'lucide-react';
import profileImg from '../assets/images/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-color opacity-10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-secondary opacity-10 rounded-full blur-[120px] animate-pulse"></div>

            <div className="container flex flex-col md-flex-row items-center justify-between gap-8 px-6">
                <div className="w-full md-w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accent-secondary font-bold text-sm tracking-widest uppercase mb-4 block">
                            Java Full Stack Web Developer
                        </span>
                        <h1 className="text-4xl md-text-6xl font-bold mb-6 leading-tight">
                            Hi, I'm <br />
                            <span className="gradient-text">Kirubhakaran C.</span>
                        </h1>
                        <p className="text-text-secondary text-lg mb-8 max-w-lg">
                            I am dedicated to an education in Computer Science Engineering. I am committed to continuous learning and am eager to apply my technical skills to create innovative solutions in a dynamic development environment.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#projects" className="btn-primary flex items-center gap-2">
                                View My Work <ArrowRight size={18} />
                            </a>
                            <a href="#contact" className="btn-secondary flex items-center gap-2 px-8 py-3 rounded-full border border-border-color hover:border-accent-color transition-all">
                                Contact Me
                            </a>
                            <a
                                href="/resume.jpg"
                                download="Kirubhakaran_Resume.jpg"
                                className="flex items-center gap-2 px-8 py-3 rounded-full bg-white opacity-5 hover:opacity-10 transition-all border border-border-color"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>

                    <div className="flex flex-wrap gap-8 mt-12">
                        {[
                            { icon: <Code size={24} />, label: 'Java Full Stack' },
                            { icon: <Database size={24} />, label: 'Spring Boot' },
                            { icon: <Globe size={24} />, label: 'React.js' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 + (i * 0.1) }}
                                className="flex items-center gap-2 text-text-secondary"
                            >
                                <div className="text-accent-color">{item.icon}</div>
                                <span className="text-sm font-medium">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="w-full md-w-1/2 flex justify-center mt-12 md-mt-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-20 animate-pulse"></div>
                        <div className="glass-card p-2 relative z-10 rounded-full overflow-hidden border-2 border-accent-color shadow-2xl">
                            <img
                                src={profileImg}
                                alt="Kirubhakaran C."
                                className="profile-avatar object-cover rounded-full"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
        .bg-accent-color { background-color: var(--accent-color); }
        .bg-accent-secondary { background-color: var(--accent-secondary); }
        .text-accent-secondary { color: var(--accent-secondary); }
        .text-accent-color { color: var(--accent-color); }
        .profile-avatar {
          width: 350px;
          height: 350px;
        }
        .text-4xl { font-size: 2.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mt-12 { margin-top: 3rem; }
        @media (min-width: 768px) {
          .profile-avatar {
            width: 500px;
            height: 500px;
          }
          .md-text-6xl { font-size: 3.75rem; }
          .md-w-1/2 { width: 50%; }
          .md-flex-row { flex-direction: row; }
          .md-mt-0 { margin-top: 0; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
