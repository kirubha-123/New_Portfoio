import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "Codec Technologies",
        role: "Front End Developer (Intern)",
        period: "Oct 2025 - Nov 2025",
        desc: "Developed interactive and mobile-responsive web pages using HTML, CSS, and JavaScript frameworks. Collaborated with the team to implement frontend features and troubleshoot bugs."
    },
    {
        company: "Emglitz Technologies",
        role: "Front-End Web Developer (Intern)",
        period: "July 2024",
        desc: "Collaborated with team members to build responsive and user-friendly web interfaces using HTML, CSS, React, and JavaScript. Delivered effective web solutions in a real-world team environment."
    },
    {
        company: "Hindusthan Institute of Technology",
        role: "B.E. Computer Science",
        period: "2022 - 2026 (Batch)",
        desc: "Currently pursuing Bachelor of Engineering in Computer Science. Maintaining a strong academic record with a CGPA of 8.2%."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-primary opacity-10"></div>

            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Education & <span className="gradient-text">Experience</span></h2>
                    <p className="text-text-secondary max-w-lg mx-auto">
                        My academic journey and professional training in the software industry.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-8 relative">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md-flex-row gap-6 items-start ${idx % 2 === 0 ? '' : 'md-flex-row-reverse'}`}
                        >
                            <div className="w-full md-w-1/2 flex flex-col items-center md-items-end text-center md-text-right">
                                <div className={`p-8 glass-card w-full ${idx % 2 === 0 ? 'border-r-4 border-r-accent-color' : 'border-l-4 border-l-accent-secondary'}`}>
                                    <span className="text-accent-secondary font-bold text-sm uppercase tracking-widest mb-2 block">{exp.period}</span>
                                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                                    <h4 className="text-text-secondary font-medium mb-4">{exp.company}</h4>
                                    <p className="text-text-secondary leading-relaxed">
                                        {exp.desc}
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md-flex absolute left-1/2 top-0 bottom-0 w-0.5 bg-border-color transform -translate-x-1/2"></div>
                            <div className="hidden md-flex absolute left-1/2 w-4 h-4 rounded-full bg-gradient-primary transform -translate-x-1/2 -translate-y-1/2 z-10"
                                style={{ top: idx === 0 ? '20%' : idx === 1 ? '50%' : '80%' }}></div>
                            <div className="w-full md-w-1/2"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .md-items-end { align-items: flex-end; }
        .md-text-right { text-align: right; }
        .border-r-4 { border-right-width: 4px; }
        .border-l-4 { border-left-width: 4px; }
        .border-r-accent-color { border-right-color: var(--accent-color); }
        .border-l-accent-secondary { border-left-color: var(--accent-secondary); }
        @media (min-width: 768px) {
          .md-flex-row-reverse { flex-direction: row-reverse; }
        }
      `}</style>
        </section>
    );
};

export default Experience;
