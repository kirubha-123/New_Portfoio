import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-surface-color">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-text-secondary leading-relaxed text-lg">
            I am Kirubhakaran, a Computer Science Engineering graduate focused on
            building responsive, scalable, and user-friendly web applications. I
            enjoy solving practical problems with modern JavaScript and Java
            technologies, and continuously improving the performance, design,
            and maintainability of every product I build.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-surface-color { background-color: var(--surface-color); }
      `}</style>
    </section>
  );
};

export default About;
