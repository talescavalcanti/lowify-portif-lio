import React from 'react';
import { motion } from 'framer-motion';
import './WhatsAppRecovery.css';

const WhatsAppRecovery: React.FC = () => {
    return (
        <section className="whatsapp-section">
            <div className="container">
                <motion.div
                    className="whatsapp-card"
                    initial={{ opacity: 0, scale: 0.98, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 40, damping: 20 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="whatsapp-grid">
                        <div className="whatsapp-text">
                            <div className="whatsapp-badge">Automação Nativa</div>
                            <h2 className="h2">Recuperação de Vendas no <span className="whatsapp-gradient">WhatsApp</span></h2>
                            <p className="p-normal">
                                Recupere boletos e Pix não pagos direto no WhatsApp do seu cliente.
                                Nossa ferramenta nativa envia mensagens automáticas que convertem desistência em faturamento.
                            </p>
                            <a href="#whats" className="btn-primary">Ativar Recuperação</a>
                        </div>
                        <div className="whatsapp-image">
                            <img src="/images/desafio-1k-1.webp" alt="Recuperação WhatsApp" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatsAppRecovery;
