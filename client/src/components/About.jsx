import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container px-6">
                <div className="flex flex-col md-flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md-w-1/2"
                    >
                        <h2 className="text-4xl font-bold mb-6">About <span className="gradient-text">Me</span></h2>
                        <div className="space-y-4">
                            <p className="text-text-secondary text-lg">
                                I am dedicated to an education in Computer Science Engineering at Hindusthan Institute of Technology (2022-2026).
                            </p>
                            <p className="text-text-secondary">
                                I am committed to continuous learning and am eager to apply my technical skills to create innovative solutions in a dynamic development environment. My focus is on building high-quality Java Full Stack applications.
                            </p>
                            <p className="border-l-4 border-accent-secondary pl-4 italic text-text-secondary">
                                "Innovative solutions in a dynamic development environment."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md-w-1/2 glass-card p-8"
                    >
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { label: "CGPA", value: "8.3" },
                                { label: "HSC", value: "80.3%" },
                                { label: "SSLC", value: "60.6%" },
                                { label: "Projects", value: "2+" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <h4 className="text-accent-secondary font-bold text-3xl mb-1">{stat.value}</h4>
                                    <p className="text-text-secondary text-sm uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-border-color grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold mb-4">Certifications</h4>
                                <ul className="space-y-2 text-text-secondary text-sm">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-accent-color rounded-full"></div> Machine Learning Foundation
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-accent-color rounded-full"></div> Automation Developer (UiPath)
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4">Languages</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["English (Fluent)", "Tamil (Native)"].map((lang, i) => (
                                        <span key={i} className="px-3 py-1 bg-white opacity-5 border border-border-color rounded-lg text-xs font-semibold">
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        .grid { display: grid; }
        .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        .space-y-4 > * + * { margin-top: 1.5rem; }
        .space-y-2 > * + * { margin-top: 0.5rem; }
        .text-3xl { font-size: 1.875rem; }
        .border-t { border-top: 1px solid var(--border-color); }
        .border-l-4 { border-left: 4px solid var(--accent-secondary); }
        .pl-4 { padding-left: 1rem; }
        .pt-8 { padding-top: 2rem; }
        .bg-accent-color { background-color: var(--accent-color); }
        .text-accent-secondary { color: var(--accent-secondary); }
      `}</style>
        </section>
    );
};

export default About;
