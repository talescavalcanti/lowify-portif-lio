import { motion } from 'framer-motion';
import { ScrollTriggered } from './ui/stack-card';
import './Features.css';

const features = [
    { title: 'Checkouts infinitos', description: 'Crie quantas páginas de pagamento quiser sem limites.' },
    { title: 'Upsell', description: 'Aumente o ticket médio oferecendo produtos complementares.' },
    { title: 'Back Redirect', description: 'Recupere usuários que tentam sair da sua página.' },
    { title: 'Recuperação de vendas', description: 'Automações inteligentes para recuperar carrinhos.' },
    { title: 'Order Bump', description: 'Adicione produtos no checkout com apenas um clique.' },
    { title: 'Ofertas Flexíveis', description: 'Cursos, mentorias ou serviços com planos variados.' },
    { title: 'Área de Membros Gratuita', description: 'Hospede seus conteúdos sem custos adicionais.' },
    { title: 'Integrações e Webhooks', description: 'Conecte-se com as principais ferramentas do mercado.' },
    { title: 'Interface Intuitiva', description: 'Gerencie tudo de forma simples e ultra rápida.' },
];

const Features: React.FC = () => {
    return (
        <section className="features-section" id="features">
            <div className="container">
                <div className="features-header">
                    <h2 className="h2">Tudo que você pode precisar para <span className="text-gradient">acelerar suas vendas</span></h2>
                    <p className="p-normal">Uma grade detalhada de funcionalidades projetadas para escala.</p>
                </div>
                <div className="features-stack-container py-20 overflow-hidden">
                    <ScrollTriggered />
                </div>
            </div>
        </section>
    );
};

export default Features;
