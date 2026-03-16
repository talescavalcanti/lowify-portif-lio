import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const faqs = [
    {
        question: 'Quais são os custos da plataforma?',
        answer: 'A Lowify possui planos flexíveis que se adaptam ao tamanho do seu negócio. Não cobramos taxas ocultas e você só paga pelo que usa.'
    },
    {
        question: 'Qual o prazo de recebimento das vendas?',
        answer: 'Oferecemos antecipação automática para que você receba seu faturamento em D+1 ou de acordo com o plano escolhido.'
    },
    {
        question: 'Como funciona a área de membros?',
        answer: 'Nossa área de membros é 100% gratuita no plano Pro. Você pode hospedar vídeos, arquivos e interagir com seus alunos de forma nativa.'
    },
    {
        question: 'Vocês oferecem suporte para migração?',
        answer: 'Sim! Temos uma equipe dedicada para ajudar você a migrar seus produtos, alunos e checkouts de outras plataformas sem custo adicional.'
    },
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <motion.div
                    className="faq-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 40, damping: 20 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="h2">Perguntas <span className="text-gradient">Frequentes</span></h2>
                    <p className="p-normal">Tudo o que você precisa saber sobre a Lowify.</p>
                </motion.div>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="faq-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 50, damping: 25, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <button
                                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span>{faq.question}</span>
                                <span className="faq-icon">+</span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    >
                                        <div className="faq-answer-content">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
