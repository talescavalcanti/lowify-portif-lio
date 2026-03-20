import { useRef } from 'react';
import { motion } from 'framer-motion';
import { CartoonButton } from './ui/cartoon-button';
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
                    <div className="hero-actions flex-wrap gap-4 py-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.9
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <CartoonButton
                                label="Quero meu acesso"
                                href="#trial"
                                color="bg-[#283eb9]"
                                hasHighlight={false}
                                className="!h-16 !px-8 !text-xl !font-black !w-full sm:!w-fit"
                                containerClassName="px-1 pb-2"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 1.1
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <CartoonButton
                                label="Ver Demonstração"
                                href="#demo"
                                color="bg-[#ffffff]"
                                hasHighlight={false}
                                className="!text-black !px-8 !h-16 !text-xl"
                                containerClassName="px-1 pb-2"
                            />
                        </motion.div>
                    </div>
                </div>

                <ContainerScroll>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            damping: 20,
                            delay: 0.8
                        }}
                    >
                        <img
                            src="/images/imagem-hero.webp"
                            alt="Lowify Dashboard"
                            className="hero-image rounded-2xl"
                            draggable={false}
                        />
                    </motion.div>
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
