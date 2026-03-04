import React from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Layout,
    Database,
    Terminal,
    Settings,
    Cpu,
    Layers
} from 'lucide-react';

const skillCategories = [
    {
        title: "Programming Languages",
        icon: <Code className="text-accent-color" size={24} />,
        skills: ["Java (Core, OOP, Collections)", "JavaScript", "Python (Basic)"]
    },
    {
        title: "Frontend & Design",
        icon: <Layout className="text-accent-secondary" size={24} />,
        skills: ["HTML5", "CSS3", "React.js", "Next.js", "ES6+"]
    },
    {
        title: "Backend & Server",
        icon: <Cpu className="text-accent-color" size={24} />,
        skills: ["Spring Boot", "REST API Development", "Node.js", "Express.js"]
    },
    {
        title: "Data & Persistence",
        icon: <Database className="text-accent-secondary" size={24} />,
        skills: ["MySQL", "MongoDB", "Firebase"]
    },
    {
        title: "Tools & Workflow",
        icon: <Terminal className="text-accent-color" size={24} />,
        skills: ["Git", "GitHub", "GitLab", "VS Code", "IntelliJ IDEA"]
    },
    {
        title: "Platforms",
        icon: <Layers className="text-accent-secondary" size={24} />,
        skills: ["Netlify", "Vercel"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-surface-color">
            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Technical <span className="gradient-text">Skills</span></h2>
                    <p className="text-text-secondary max-w-lg mx-auto">
                        Comprehensive skill set derived from academic excellence and hands-on internship experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-white opacity-5 rounded-lg">
                                    {category.icon}
                                </div>
                                <h3 className="font-bold text-lg">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="skill-tag"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .bg-surface-color { background-color: var(--surface-color); }
        .grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
        @media (min-width: 768px) {
          .md-grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .lg-grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        }
        .skill-tag {
          padding: 0.4rem 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .skill-tag:hover {
          background: rgba(139, 92, 246, 0.1);
          border-color: var(--accent-color);
          color: white;
        }
        .mb-16 { margin-bottom: 4rem; }
      `}</style>
        </section>
    );
};

export default Skills;
