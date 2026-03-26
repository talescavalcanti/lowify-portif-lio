# Lowify - Landing Page

> **AVISO IMPORTANTE**: Este projeto é exclusivamente um projeto de portfólio. A Lowify real **NÃO utiliza** esta página em produção. Este trabalho foi desenvolvido para demonstrar habilidades em desenvolvimento frontend, design de interfaces e animações avançadas.

---

## Sumario

1. [Visao Geral do Projeto](#visao-geral-do-projeto)
2. [Stack Tecnologica](#stack-tecnologica)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Estrutura da Pagina](#estrutura-da-pagina)
5. [Design System](#design-system)
6. [Como Executar](#como-executar)
7. [Scripts Disponiveis](#scripts-disponiveis)

---

## Visao Geral do Projeto

Este projeto consiste em uma landing page institucional para a plataforma Lowify, uma plataforma de vendas especializada em produtos de baixo ticket (LowTicket). O site apresenta as principais funcionalidades da plataforma, incluindo checkout instantaneo, area de membros premium, aplicativo mobile e sistema de premiacao por conquistas.

O projeto foi desenvolvido como demonstração de habilidades tecnicas em desenvolvimento frontend moderno, com foco em animacoes avancadas, experiencias interativas e design visual impactante.

**Status**: Projeto de portfolio (nao utilizado em producao pela Lowify real)

---

## Stack Tecnologica

### Frontend (Client)

| Tecnologia | Versao | Finalidade |
|------------|--------|------------|
| React | 18.2.0 | Framework principal |
| TypeScript | 5.2.2 | Tipagem estatica |
| Vite | 5.0.0 | Build tool e dev server |
| Tailwind CSS | 4.2.1 | Framework de CSS |
| Framer Motion | 10.16.16 | Animações React |
| GSAP | 3.12.2 | Animações avancadas e ScrollTrigger |
| Lenis | 1.3.18 | Smooth scrolling |
| OGL | 1.0.11 | WebGL para graficos 3D |
| Lucide React | 0.294.0 | Icones |

### Backend (Server)

| Tecnologia | Versao | Finalidade |
|------------|--------|------------|
| Express | 4.18.2 | Framework web |
| TypeScript | 5.3.3 | Tipagem estatica |
| Cors | 2.8.5 | Cross-origin resource sharing |
| Dotenv | 16.3.1 | Variaveis de ambiente |
| TSX | 4.6.2 | Execução de TypeScript |

### Infraestrutura

- **Package Manager**: npm com workspaces (monorepo)
- **Deploy**: Vercel
- **Node.js**: Versao LTS recomendada

---

## Estrutura do Projeto

O projeto utiliza uma estrutura de monorepo com workspaces npm:

```
projeto-lowify/
├── package.json          # Configuracao raiz do workspace
├── vercel.json          # Configuracao de deploy Vercel
├── README.md            # Este arquivo
│
├── client/              # Aplicacao Frontend (React + Vite)
│   ├── package.json
│   ├── vite.config.ts   # Configuracao do Vite
│   ├── tsconfig.json    # Configuracao TypeScript
│   ├── index.html       # Entry point HTML
│   ├── public/         # Arquivos estaticos
│   │   └── images/     # Imagens do projeto
│   └── src/
│       ├── main.tsx            # Entry point React
│       ├── App.tsx             # Componente principal
│       ├── App.css             # Estilos globais
│       ├── index.css           # Estilos Tailwind
│       ├── theme.css           # Variaveis de tema
│       ├── components/        # Componentes React
│       │   ├── Navbar.tsx           # Navegacao principal
│       │   ├── Hero.tsx             # Secao hero principal
│       │   ├── Showcase.tsx         # Secoes de beneficios
│       │   ├── Features.tsx        # Grade de funcionalidades
│       │   ├── WhatsAppRecovery.tsx # Secao de recuperacao WA
│       │   ├── Awards.tsx           # Galeria de premiacao
│       │   ├── FAQ.tsx              # Perguntas frequentes
│       │   ├── Footer.tsx           # Rodape
│       │   ├── CircularGallery.tsx  # Galeria 3D WebGL
│       │   └── ui/                  # Componentes de UI
│       │       ├── cartoon-button.tsx
│       │       ├── container-scroll-animation.tsx
│       │       ├── smooth-scroll.tsx
│       │       └── stack-card.tsx
│       └── hooks/             # Custom React hooks
│           └── useIsMobile.ts
│
└── server/             # Aplicacao Backend (Express)
    ├── package.json
    ├── tsconfig.json
    └── src/
        └── index.ts    # Servidor Express basico
```

---

## Estrutura da Pagina

A landing page e composta por secoes sequenciais que guiam o usuario atraves da proposta de valor da plataforma:

### 1. Navbar

Navegacao principal com efeito glassmorphism. O menu apresenta formato de pilula que se compacta ao rolar a pagina, mantendo as informacoes de navegacao sempre acessiveis sem obstruir o conteudo. Inclui animacao de entrada sofisticada e versao mobile com drawer.

### 2. Hero

Secao principal com titulo chamativo, subtitulo explicativo e chamada para acao dupla. O dashboard da plataforma e exibido com efeito de container scroll que cria inclinacao 3D durante a rolagem, proporcionando sensacao cinematica e imersiva.

### 3. Showcase

Conjunto de tres secoes alternadas que destacam funcionalidades principais:

- **Area de Membros Premium**: Apresenta a interface cinematica da area de membros com design personalizado e carregamento instantaneo.
- **Mobile App**: Demonstra o aplicativo movel com mockups para iOS e Android, incluindo badges das lojas.
- **Checkout Instantaneo**: Exibe o checkout otimizado com estatisticas de performance (Nota 100% GTMetrix, +35% conversao, 0.4s load time).

### 4. Features

Secao de funcionalidades com efeito visual de pilha de cards. Os cards aparecem com rotacoes organicas e fisica de mola, criando narrativa de colecao de ferramentas. Fundo com glow azul suave para profundidade visual.

### 5. WhatsApp Recovery

Secao dedicada ao sistema de recuperacao automatica de vendas pelo WhatsApp, destacando o recurso de recuperacaoone-click.

### 6. Awards

Galeria 3D WebGL em formato circular que exibe as placas de premiacao (10K, 100K, 250K, 500K, 1M). As imagens se dobram e distorcem durante o movimento, criando efeito de exclusividade e prestigio.

### 7. FAQ

Secao de perguntas frequentes com accordion animado. As respostas se expandem suavemente com fisica de mola.

### 8. Footer

Rodape com informacoes institucionais, links de navegacao e elementos de design consistentes com o restante da pagina.

---

## Design System

### Cores

| Nome | Hex | Uso |
|------|-----|-----|
| Brand Blue | #283eb9 | Cor primaria, botoes, acentos |
| White | #ffffff | Texto principal, fundos |
| Gray | tons de cinza | Textos secundarios, bordas |

### Tipografia

- **Familia Principal**: Urbanist (sans-serif geometrica)
- **Caracteristicas**: Proporcoes modernas, legibilidade elevada, minimalismo premium

### Estilos Visuais

- **Glassmorphism**: Navbar com efeito de vidro fosco (backdrop-filter)
- **Neo-Brutalism Adaptado**: Botoes com bordas pretas solidas e sombras deslocadas
- **Spring Physics**: Animações com fisica de mola para naturalidade
- **Smooth Scroll**: Rolagem suave com Lenis

---

## Como Executar

### Prerequisites

- Node.js (versao LTS recomendada)
- npm

### Instalacao

```bash
# Instalacao de todas as dependências (raiz + client + server)
npm install
```

### Desenvolvimento

```bash
# Executar apenas o frontend
npm run dev

# Executar apenas o servidor backend
npm run dev:server

# Executar ambos (frontend + backend)
npm run dev
```

O frontend estara disponivel em: `http://localhost:5173`
O backend estara disponivel em: `http://localhost:3001`

### Build

```bash
# Build do frontend para producao
npm run build
```

O build sera gerado em `client/dist/`, configurado para deploy automatico na Vercel.

---

## Scripts Disponiveis

| Script | Descricao |
|--------|-----------|
| `npm run dev` | Inicia o frontend em modo desenvolvimento |
| `npm run dev:server` | Inicia o servidor backend em modo desenvolvimento |
| `npm run build` | Build do frontend para producao |

---

## Consideracoes Finais

Este projeto demonstra proficiência em:

- React e TypeScript
- Animacoes avanzadas com Framer Motion e GSAP
- WebGL com OGL
- Design de interfaces modernas (glassmorphism, neo-brutalism)
- Smooth scrolling
- Tailwind CSS
- Estrutura de monorepo

**Nota**: Esta landing page foi desenvolvida exclusivamente para fins de portfólio e não possui integração com sistemas reais da Lowify.
