import { ScrollTriggered } from './ui/stack-card';

const Features: React.FC = () => {
    return (
        <section className="py-[100px] relative overflow-hidden" id="features">
            {/* Soft background glow for the section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 flex flex-col items-center text-center">
                <div className="features-header mb-12 flex flex-col items-center text-center space-y-4 mx-auto max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 text-center">
                        Tudo que você pode precisar para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">acelerar suas vendas</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl text-center">
                        Uma grade detalhada de funcionalidades projetadas para escala, conversão e retenção máxima.
                    </p>
                </div>
                
                <div className="features-stack-container py-20 overflow-hidden w-full z-10 relative flex justify-center">
                    <ScrollTriggered />
                </div>
            </div>
        </section>
    );
};

export default Features;
