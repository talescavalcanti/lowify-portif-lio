import React from 'react';
import { motion } from 'framer-motion';
import './Showcase.css';

const Showcase: React.FC = () => {
    return (
        <div className="showcase-sections" id="showcase">
            {/* Members Area Showcase */}
            <section className="showcase-item members-area">
                <div className="container showcase-grid">
                    <motion.div
                        className="showcase-text"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 40, damping: 20, mass: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="h2">Área de Membros <span className="text-gradient">Premium</span></h2>
                        <p className="p-normal">
                            Entregue seus conteúdos com a melhor experiência. Interface personalizada,
                            carregamento instantâneo e total controle sobre seus alunos.
                        </p>
                        <ul className="showcase-list">
                            <li>Design Cinematográfico</li>
                            <li>Aulas ilimitadas</li>
                            <li>Gestão de alunos integrada</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="showcase-image"
                        initial={{ opacity: 0, y: 80, rotate: 2 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 30, damping: 25, mass: 1.2, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <img src="/images/members-area-new-D0bKcp8i.webp" alt="Área de Membros" />
                    </motion.div>
                </div>
            </section>

            {/* Mobile App Showcase */}
            <section className="showcase-item mobile-app">
                <div className="container showcase-grid reverse">
                    <motion.div
                        className="showcase-text"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 40, damping: 20 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="h2">Sua Loja no <span className="text-gradient">Bolso</span></h2>
                        <p className="p-normal">
                            Tenha controle total do seu negócio de qualquer lugar. Nosso app mobile
                            está disponível em todas as plataformas para você nunca perder uma venda.
                        </p>
                        <div className="store-icons">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="store-badge" />
                            <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276550400&h=7e5b682b2a875240983699c0d95d58a9" alt="App Store" className="store-badge" />
                        </div>
                    </motion.div>
                    <motion.div
                        className="showcase-image"
                        initial={{ opacity: 0, y: 80, rotate: -2 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 30, damping: 25, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <img src="/images/app-mockup--8Zz-3V7.webp" alt="Mobile App" className="mobile-mockup" />
                    </motion.div>
                </div>
            </section>

            {/* Instant Checkout Showcase */}
            <section className="showcase-item checkout">
                <div className="container showcase-grid">
                    <motion.div
                        className="showcase-text"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 40, damping: 20 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="performance-badge">Nota 100% GTMetrix</div>
                        <h2 className="h2">Checkout <span className="text-gradient">Instantâneo</span></h2>
                        <p className="p-normal">
                            O checkout mais rápido do Brasil. Otimizado para conversão máxima no mobile
                            com interface totalmente personalizável para sua marca.
                        </p>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <h3>+35%</h3>
                                <p>Conversão</p>
                            </div>
                            <div className="stat-card">
                                <h3>0.4s</h3>
                                <p>Load Time</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="showcase-image"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 20, damping: 20, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <img src="/images/checkout-new-CKfoaoJ6.webp" alt="Checkout Instantâneo" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Showcase;
