import { motion } from 'framer-motion';
import CircularGallery from './CircularGallery';
import './Awards.css';

const awardItems = [
    { image: '/images/pulseira10k.png', text: 'Pulseira 10K — R$ 10.000' },
    { image: '/images/pplaca100k.png', text: 'Placa 100K — R$ 100.000' },
    { image: '/images/Design-sem-nome-1.webp', text: 'Placa 250K — R$ 250.000' },
    { image: '/images/a-1-1.webp', text: 'Placa 500K — R$ 500.000' },
    { image: '/images/pplaca1m.png', text: 'Placa 1M — R$ 1.000.000' },
];

const Awards: React.FC = () => {
    return (
        <section className="awards-section" id="awards">
            <div className="container">
                <motion.div
                    className="awards-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 40, damping: 20 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="h2">Premiações por <span className="text-gradient">Conquistas</span></h2>
                    <p className="p-normal">Seu faturamento é recompensado. Receba recompensas físicas exclusivas ao bater suas metas.</p>
                </motion.div>
            </div>
            <motion.div
                className="awards-gallery-wrap"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 30, damping: 20, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <CircularGallery
                    items={awardItems}
                    bend={1}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollSpeed={2}
                    scrollEase={0.05}
                />
            </motion.div>
        </section>
    );
};

export default Awards;
