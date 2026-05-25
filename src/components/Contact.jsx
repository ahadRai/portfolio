import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
    return (
        <section className="section" id="contact">
            <div className="section-inner">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="number">05.</span> Contact
                </motion.h2>

                <div className="contact__grid">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="contact__info glass-card">
                        <h3>Get In Touch</h3>
                        <p>
                            I'm currently open to new opportunities. Whether you have a
                            question or just want to say hi, I'll do my best to get back to
                            you!
                        </p>
                        <div className="contact__details">
                            <a href="mailto:ahadraiyen@gmail.com">
                                <FaEnvelope /> ahadraiyen@gmail.com
                            </a>
                            <a href="tel:+8801771732599">
                                <FaPhone /> +880 1771-732-599
                            </a>
                            <a href="https://linkedin.com/in/ahadrai" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin /> linkedin.com/in/ahadrai
                            </a>
                            <a href="https://github.com/ahadRai" target="_blank" rel="noopener noreferrer">
                                <FaGithub /> github.com/ahadRai
                            </a>
                        </div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.footer
                    className="footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <p>
                        Designed &amp; Built by <span className="accent">Ahad Raiyen</span>
                    </p>
                    <p className="footer__sub">© {new Date().getFullYear()} All rights reserved.</p>
                </motion.footer>
            </div>
        </section>
    );
}
