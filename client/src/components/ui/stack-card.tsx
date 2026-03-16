import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import { 
    Infinity, 
    ArrowUpCircle, 
    Undo2, 
    Zap, 
    PlusCircle, 
    Layers, 
    Users, 
    Webhook, 
    MousePointer2 
} from "lucide-react"

export function ScrollTriggered() {
    return (
        <div className="w-full" style={container}>
            {featuresData.map((feature, i) => (
                <Card i={i} {...feature} key={feature.title} />
            ))}
        </div>
    )
}

interface CardProps {
    title: string
    description: string
    icon: React.ReactNode
    color: string
    i: number
}

function Card({ title, description, icon, color, i }: CardProps) {
    const splashBg = `radial-gradient(circle at 50% 120%, ${color}22 0%, #000000 70%)`

    return (
        <motion.div
            className={`card-container-${i} flex flex-col items-center justify-center relative overflow-hidden`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background: splashBg }} />
            <motion.div 
                style={card} 
                variants={cardVariants} 
                className="card flex flex-col p-12 text-center justify-center items-center group relative overflow-hidden"
                whileHover={{ y: 35, rotate: -6, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
                {/* Shine effect overlay */}
                <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] bg-gradient-to-br from-white/20 via-transparent to-transparent rotate-45 pointer-events-none group-hover:top-[100%] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />
                
                <div 
                    className="mb-8 p-5 rounded-3xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 shadow-lg"
                    style={{ backgroundColor: `${color}10`, color: color }}
                >
                    {icon}
                </div>
                <h3 className="text-2xl font-extrabold mb-4 text-slate-900 tracking-tight leading-tight">{title}</h3>
                <p className="text-base text-slate-500 leading-relaxed font-semibold max-w-[240px]">{description}</p>
                
                {/* Inner Glow Border */}
                <div className="absolute inset-0 rounded-[32px] border border-white/60 pointer-events-none" />
            </motion.div>
        </motion.div>
    )
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`


const container: React.CSSProperties = {
    margin: "0 auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
}

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -80,
}

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
    width: 320,
    height: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "32px",
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)",
    backdropFilter: "blur(24px) saturate(180%)",
    WebkitBackdropFilter: "blur(24px) saturate(180%)",
    boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 20px 40px -4px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.3)",
    transformOrigin: "10% 60%",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
}


const featuresData: { title: string, description: string, icon: React.ReactNode, color: string }[] = [
    { 
        title: 'Checkouts infinitos', 
        description: 'Crie quantas páginas de pagamento quiser sem limites operacionais.', 
        icon: <Infinity size={36} strokeWidth={2.5} />,
        color: '#2563eb' 
    },
    { 
        title: 'Upsell One-Click', 
        description: 'Aumente o ticket médio oferecendo produtos complementares pós-venda.', 
        icon: <ArrowUpCircle size={36} strokeWidth={2.5} />,
        color: '#7c3aed'
    },
    { 
        title: 'Back Redirect', 
        description: 'Recupere usuários que tentam sair da sua página com ofertas irresistíveis.', 
        icon: <Undo2 size={36} strokeWidth={2.5} />,
        color: '#db2777'
    },
    { 
        title: 'Recuperação Ativa', 
        description: 'Automações inteligentes via WhatsApp para converter boletos e Pix.', 
        icon: <Zap size={36} strokeWidth={2.5} />,
        color: '#f59e0b'
    },
    { 
        title: 'Order Bump', 
        description: 'Adicione produtos no carrinho com apenas um clique antes do checkout.', 
        icon: <PlusCircle size={36} strokeWidth={2.5} />,
        color: '#10b981'
    },
    { 
        title: 'Ofertas Flexíveis', 
        description: 'Venda cursos, mentorias ou serviços com planos e recorrências variadas.', 
        icon: <Layers size={36} strokeWidth={2.5} />,
        color: '#06b6d4'
    },
    { 
        title: 'Área de Membros', 
        description: 'Hospede seus conteúdos em uma interface premium sem custos extras.', 
        icon: <Users size={36} strokeWidth={2.5} />,
        color: '#6366f1'
    },
    { 
        title: 'Integrações Pro', 
        description: 'Conecte-se com as principais ferramentas do mercado via Webhooks.', 
        icon: <Webhook size={36} strokeWidth={2.5} />,
        color: '#f43f5e'
    },
    { 
        title: 'Interface Ultra', 
        description: 'Gerencie seu ecossistema com uma dashboard intuitiva e ultra rápida.', 
        icon: <MousePointer2 size={36} strokeWidth={2.5} />,
        color: '#14b8a6'
    },
];
