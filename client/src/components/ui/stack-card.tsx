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
import { useIsMobile } from "../../hooks/useIsMobile"

export function ScrollTriggered() {
    const isMobile = useIsMobile();

    return (
        <div className="w-full" style={container}>
            {featuresData.map((feature, i) => (
                <Card i={i} {...feature} key={feature.title} isMobile={isMobile} />
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
    isMobile: boolean
}

function Card({ title, description, icon, color, i, isMobile }: CardProps) {
    const splashBg = `radial-gradient(circle at 50% 120%, ${color}10 0%, transparent 60%)`

    const mobileCardVariants: Variants = {
        offscreen: {
            y: 60,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.6,
            },
        },
    };

    return (
        <motion.div
            className={`card-container-${i} flex flex-col items-center justify-center relative overflow-hidden`}
            style={isMobile ? cardContainerMobile : cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: isMobile ? 0.3 : 0.8 }}
        >
            {!isMobile && <div style={{ ...splash, background: splashBg }} />}
            <motion.div 
                style={isMobile ? cardMobile : card} 
                variants={isMobile ? mobileCardVariants : cardVariants} 
                className="card flex flex-col px-6 py-8 md:px-8 md:py-10 text-center justify-center items-center group relative overflow-hidden"
                whileHover={isMobile ? {} : { y: 35, rotate: -6, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
                <div 
                    className="mb-4 md:mb-6 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 shadow-sm border"
                    style={{ backgroundColor: `${color}08`, color: color, borderColor: `${color}20` }}
                >
                    {icon}
                </div>

                <h3 className="text-lg md:text-[22px] font-bold mb-2 md:mb-3 text-slate-800 tracking-tight leading-tight z-10">{title}</h3>
                
                <p className="text-sm md:text-[15px] text-slate-500 leading-relaxed font-medium max-w-[240px] z-10">{description}</p>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ backgroundColor: color }}></div>
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
            bounce: 0.35,
            duration: 0.6,
        },
    },
}

const container: React.CSSProperties = {
    margin: "0 auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
    paddingInline: "8px",
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

const cardContainerMobile: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 8,
    marginBottom: 16,
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "24px",
    background: "#ffffff",
    boxShadow: "0 20px 40px -8px rgba(0, 0, 0, 0.15), 0 4px 10px -2px rgba(0, 0, 0, 0.05)",
    transformOrigin: "10% 60%",
    border: "1px solid #e2e8f0",
    cursor: "pointer",
}

const cardMobile: React.CSSProperties = {
    width: "100%",
    maxWidth: "320px",
    minHeight: "280px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    background: "#ffffff",
    boxShadow: "0 8px 24px -4px rgba(0, 0, 0, 0.12)",
    border: "1px solid #e2e8f0",
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
