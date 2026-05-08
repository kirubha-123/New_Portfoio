import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import localProjects from '../data/projects';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Projects = () => {
    const [projects, setProjects] = useState(localProjects);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/projects`);
                if (!response.ok) {
                    throw new Error('Failed to load remote projects');
                }
                const data = await response.json();
                if (Array.isArray(data) && data.length > 0) {
                    setProjects(data);
                }
            } catch (error) {
                setProjects(localProjects);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-20">
            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">My <span className="gradient-text">Projects</span></h2>
                    <p className="text-text-secondary max-w-lg mx-auto">
                        Practical applications and innovative solutions built during my academic and professional training.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md-grid-cols-2 xl-grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.01 }}
                            className="group relative overflow-hidden rounded-[1.5rem] border border-border-color bg-white/5 p-6 shadow-2xl shadow-black/10 backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                            <div className="relative z-10 flex h-full flex-col gap-6">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-color bg-black/20 text-accent-secondary">
                                        0{index + 1}
                                    </span>
                                    <Github size={18} className="text-accent-color" />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="rounded-full border border-border-color bg-black/20 px-3 py-1 text-xs font-semibold text-accent-secondary">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-2">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-accent-color transition-all hover:gap-4">
                                        Explore Project Code <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .bg-bg-color { background-color: var(--bg-color); }
        .text-accent-secondary { color: var(--accent-secondary); }
        .text-accent-color { color: var(--accent-color); }
        .font-semibold { font-weight: 600; }
        .transition-all { transition: all 0.3s ease; }
        .hover\:gap-4:hover { gap: 1rem; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) {
          .md-grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1280px) {
          .xl-grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
      `}</style>
        </section>
    );
};

export default Projects;
