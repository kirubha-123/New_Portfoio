import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import localProjects from '../data/projects';

const Projects = () => {
    const [projects, setProjects] = useState(localProjects);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects');
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

                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md-flex-row gap-8 items-center ${index % 2 !== 0 ? 'md-flex-row-reverse' : ''}`}
                        >
                                <div className="w-full space-y-6">
                                <h3 className="text-3xl font-bold">{project.title}</h3>
                                <p className="text-text-secondary text-lg leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-white opacity-5 border border-border-color rounded-lg text-xs font-semibold text-accent-secondary">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-accent-color font-bold hover:gap-4 transition-all">
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
      `}</style>
        </section>
    );
};

export default Projects;
