export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  gallery?: string[];
  height: "tall" | "medium" | "short";
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  description: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ocalhambeque",
    title: "O Calhambeque Hot-dog",
    category: "Landing Page",
    image: "/images/ocalhambequeporfolio.png",
    gallery: ["/images/ocalhambequeporfolio.png", "/images/ocalhambequeporfolio2.png"],
    height: "tall",
    featured: true,
    description:
      "Plataforma de e-commerce completa com arquitetura moderna, otimizada para conversão e performance.",
    problem:
      "O cliente precisava de uma loja online que suportasse alto volume de tráfego e oferecesse uma experiência fluida, mas a plataforma antiga era lenta e difícil de gerenciar.",
    solution:
      "Desenvolvemos uma plataforma de e-commerce do zero com Next.js, melhorando o SEO e a velocidade de carregamento, além de integrar uma landing page segura e um painel administrativo intuitivo.",
    result:
      "Aumento de 180% na taxa de conversão de clientes e redução de 60% no tempo de carregamento das páginas.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: "andreia-atelier",
    title: "Andreia Atelier",
    category: "Visual Identity & Website",
    image: "/images/work-2.svg",
    gallery: ["/images/work-2.svg"],
    height: "medium",
    featured: true,
    description:
      "Identidade digital completa para laboratório de inovação, unindo branding e tecnologia.",
    problem:
      "A startup precisava de uma presença digital que transmitisse credibilidade e inovação para atrair investidores e parceiros estratégicos.",
    solution:
      "Criamos uma identidade visual completa, landing page interativa com animações e um sistema de agendamento integrado.",
    result:
      "3x mais leads qualificados no primeiro mês e reconhecimento do projeto em premiações de design.",
    technologies: ["React", "Framer Motion", "Figma", "Node.js"],
  },
  {
    id: "gestao-smart",
    title: "Gestão Smart",
    category: "Sistema Web",
    image: "/images/work-3.png",
    gallery: ["/images/work-3.png"],
    height: "short",
    description:
      "Sistema de gestão empresarial com dashboard inteligente e automações de processos.",
    problem:
      "Empresa gerenciava estoque, vendas e financeiro em planilhas separadas, causando erros e retrabalho constante.",
    solution:
      "Desenvolvemos um sistema web completo com dashboard em tempo real, controle de estoque automatizado e relatórios financeiros integrados.",
    result:
      "Automação total do processo operacional e ganho de 40% em produtividade da equipe.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "yuna-method",
    title: "Yuna Method",
    category: "Website",
    image: "/images/method.png",
    gallery: ["/images/method.png"],
    height: "tall",
    description:
      "Site institucional premium com foco em storytelling visual e conversão de leads.",
    problem:
      "A empresa precisava de um site que comunicasse sua metodologia de trabalho de forma clara e gerasse confiança nos potenciais clientes.",
    solution:
      "Criamos um site com narrativa visual imersiva, animações de scroll, seções interativas e integração com CRM para captura de leads.",
    result:
      "Aumento de 250% no volume de contatos e redução do ciclo de vendas em 30%.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
  },
  {
    id: "connect-hub",
    title: "ConnectHub",
    category: "Plataforma",
    image: "/images/work-1.png",
    gallery: ["/images/work-1.png", "/images/work-1.svg"],
    height: "medium",
    description:
      "Plataforma de networking profissional com matching inteligente e eventos integrados.",
    problem:
      "Comunidade de profissionais sem uma ferramenta centralizada para conexões, eventos e compartilhamento de conteúdo relevante.",
    solution:
      "Desenvolvemos uma plataforma com sistema de matching por interesses, calendário de eventos, chat em tempo real e feed de conteúdo curado.",
    result:
      "Mais de 2.000 usuários ativos nos primeiros 3 meses com taxa de retenção de 78%.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AWS"],
  },
  {
    id: "eco-track",
    title: "EcoTrack",
    category: "App Mobile",
    image: "/images/method.svg",
    gallery: ["/images/method.svg"],
    height: "short",
    description:
      "Aplicativo de rastreamento de impacto ambiental com gamificação e relatórios personalizados.",
    problem:
      "Empresa de sustentabilidade precisava engajar colaboradores em práticas ecológicas e mensurar resultados de forma simples.",
    solution:
      "Criamos um app com sistema de gamificação, metas personalizadas, ranking entre equipes e dashboard de impacto ambiental em tempo real.",
    result:
      "Redução de 35% na pegada de carbono corporativa e 92% de engajamento dos colaboradores.",
    technologies: ["React Native", "TypeScript", "Firebase", "Chart.js"],
  },
];
