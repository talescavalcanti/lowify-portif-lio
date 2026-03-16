import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import './Hero.css';

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="hero" ref={containerRef}>
            <div className="container hero-content">
                <div className="hero-text">
                    {/* Badge — first to appear */}
                    <motion.span
                        className="badge"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                    >
                        Plataforma de Vendas #1
                    </motion.span>

                    {/* Headline — enters slightly after */}
                    <motion.h1
                        className="h1"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 90, damping: 25, delay: 0.4 }}
                    >
                        Nunca foi tão simples vender <span className="text-gradient">LowTicket</span>
                    </motion.h1>

                    {/* Subtitle — cascades in */}
                    <motion.p
                        className="p-large"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 25, delay: 0.6 }}
                    >
                        Checkout instantâneo, upsell one Click e recuperação automática no WhatsApp.
                    </motion.p>

                    {/* Buttons — last to land */}
                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 70, damping: 25, delay: 0.8 }}
                    >
                        <a href="#trial" className="btn-hero-primary">
                            <span>Comece Agora</span>
                        </a>
                        <a href="#demo" className="btn-hero-secondary">Ver Demonstração</a>
                    </motion.div>
                </div>

                <ContainerScroll titleComponent={<></>}>
                    <img
                        src="/images/imagem hero.webp"
                        alt="Lowify Dashboard"
                        className="hero-image rounded-2xl"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>

            <div className="hero-background">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>
        </section>
    );
};

export default Hero;
