import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Cpu,
    Globe2,
    Database,
    Smartphone,
    Settings
} from 'lucide-react';

const services = [
    {
        title: "Java Full Stack Development",
        description: "Developing robust end-to-end applications using Java, Spring Boot on the backend and React on the frontend.",
        icon: <Cpu size={32} className="text-accent-color" />
    },
    {
        title: "Frontend Engineering",
        description: "Creating highly interactive and responsive user interfaces with React.js, Next.js, and modern CSS frameworks.",
        icon: <Globe2 size={32} className="text-accent-secondary" />
    },
    {
        title: "REST API Development",
        description: "Architecting scalable and secure RESTful APIs to facilitate seamless communication between frontend and backend.",
        icon: <Settings size={32} className="text-accent-color" />
    },
    {
        title: "Database Solutions",
        description: "Designing and managing efficient data structures using MySQL, MongoDB, and Firebase for optimal performance.",
        icon: <Database size={32} className="text-accent-secondary" />
    },
    {
        title: "Web Integration",
        description: "Integrating third-party services and APIs into web applications to enhance functionality and user experience.",
        icon: <Code2 size={32} className="text-accent-color" />
    },
    {
        title: "Mobile-First Design",
        description: "Ensuring applications are fully optimized for mobile devices, providing a consistent experience across all platforms.",
        icon: <Smartphone size={32} className="text-accent-secondary" />
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20">
            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">What I <span className="gradient-text">Offer</span></h2>
                    <p className="text-text-secondary max-w-lg mx-auto">
                        Leveraging my expertise in Java and modern web technologies to deliver high-quality digital solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 hover:border-accent-color group"
                        >
                            <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-text-secondary leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .lg-grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
      `}</style>
        </section>
    );
};

export default Services;
