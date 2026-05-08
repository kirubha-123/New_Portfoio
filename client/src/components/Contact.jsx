import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.success) {
                alert('Thank you for reaching out, ' + formData.name + '! I will get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error connecting to server. Please try again later.');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20">
            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Contact <span className="gradient-text">Me</span></h2>
                    <p className="text-text-secondary max-w-lg mx-auto">
                        Feel free to reach out for collaborations or opportunities!
                    </p>
                </motion.div>

                <div className="flex flex-col lg-flex-row gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg-w-1/3 space-y-8"
                    >
                        <div className="glass-card p-8 flex items-center gap-6">
                            <div className="p-4 bg-accent-color opacity-10 rounded-2xl">
                                <Mail className="text-accent-color" />
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="font-bold">Email</h4>
                                <p className="text-text-secondary text-sm break-all">kirubhakirubha92@gmail.com</p>
                            </div>
                        </div>

                        <div className="glass-card p-8 flex items-center gap-6">
                            <div className="p-4 bg-accent-secondary opacity-10 rounded-2xl">
                                <MapPin className="text-accent-secondary" />
                            </div>
                            <div>
                                <h4 className="font-bold">Location</h4>
                                <p className="text-text-secondary text-sm">Perambalur, Tamil Nadu</p>
                            </div>
                        </div>

                        <div className="glass-card p-8 flex items-center gap-6">
                            <div className="p-4 bg-accent-color opacity-10 rounded-2xl">
                                <Phone className="text-accent-color" />
                            </div>
                            <div>
                                <h4 className="font-bold">Phone</h4>
                                <p className="text-text-secondary text-sm">+91 8148198241</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com/kirubha-123" target="_blank" rel="noreferrer" className="p-4 glass-card rounded-2xl text-accent-color hover:scale-110 transition-transform">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/kirubhakaran-c-0a485336b" target="_blank" rel="noreferrer" className="p-4 glass-card rounded-2xl text-accent-secondary hover:scale-110 transition-transform">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg-w-2/3"
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-10 space-y-6">
                            <div className="grid grid-cols-1 md-grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className="form-input"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Inquiry"
                                    className="form-input"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your message here..."
                                    className="form-input"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-primary flex items-center justify-center gap-2 w-full mt-4">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        @media (min-width: 1024px) {
          .lg-flex-row { flex-direction: row; }
          .lg-w-1\/3 { width: 33.333333%; }
          .lg-w-2\/3 { width: 66.666667%; }
        }
        .form-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1rem;
          color: white;
          outline: none;
          transition: all 0.3s ease;
        }
        .form-input:focus {
          border-color: var(--accent-color);
          background: rgba(255, 255, 255, 0.08);
        }
        .p-10 { padding: 2.5rem; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .space-y-8 > * + * { margin-top: 2rem; }
        .break-all { word-break: break-all; }
      `}</style>
        </section>
    );
};

export default Contact;
