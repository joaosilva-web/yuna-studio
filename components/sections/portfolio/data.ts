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
    gallery: [
      "/images/ocalhambequeporfolio.png",
      "/images/ocalhambequeporfolio2.png",
    ],
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
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Tailwind CSS",
      "PostgreSQL",
    ],
  },
  {
    id: "andreia-atelier",
    title: "Andreia Atelier",
    category: "Visual Identity & Website",
    image: "/images/andreia-atelier.png",
    gallery: ["/images/andreia-atelier.png"],
    height: "medium",
    featured: true,
    description:
      "Identidade digital completa para laboratório de inovação, unindo branding e tecnologia.",
    problem:
      "O atelier precisava de uma presença digital que transmitisse credibilide e sofisticação para atrair mais clientes.",
    solution:
      "Criamos uma identidade visual completa, landing page interativa com animações",
    result:
      "3x mais leads qualificados no primeiro mês e reconhecimento do projeto em premiações de design.",
    technologies: ["React", "Framer Motion", "Figma", "Node.js"],
  },
  {
    id: "finq",
    title: "FinQ",
    category: "Sistema Web & SaaS",
    image: "/images/finqportfolio.png",
    gallery: ["/images/finqportfolio.png", "/images/finqportfolio2.png"],
    height: "short",
    description:
      "Sistema de gestão financeira com dashboard inteligente e automações de processos.",
    problem:
      "Criado para pessoas com dificuldades em organizar suas finanças, o cliente precisava de uma solução que fosse fácil de usar, mas poderosa o suficiente para oferecer insights financeiros valiosos.",
    solution:
      "Desenvolvemos um sistema web completo com dashboard em tempo real, controle de finanças automatizado e relatórios financeiros integrados.",
    result:
      "Automação total do processo financeiro pessoal, com 85% de redução no tempo gasto em tarefas financeiras e aumento significativo na saúde financeira dos usuários.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
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
    id: "approve-flow",
    title: "Approve Flow",
    category: "Plataforma SaaS",
    image: "/images/approveporfolio.png",
    gallery: ["/images/approveporfolio.png", "/images/approveporfolio2.png"],
    height: "medium",
    description:
      "Plataforma SaaS para gestão de projetos entre freelancers e clientes, com foco em organização, validação de entregas e comunicação estruturada.",
    problem:
      "Freelancers enfrentam dificuldade em organizar demandas, validar entregas e manter comunicação clara com clientes, resultando em retrabalho e desalinhamento.",
    solution:
      "Desenvolvemos uma plataforma com gestão de tasks, sistema de aprovação de entregas, chat em tempo real com threads e notificações inteligentes, além de personalização da experiência do cliente com identidade do freelancer.",
    result:
      "Melhoria na organização dos projetos, redução de retrabalho e comunicação mais clara entre freelancers e clientes, aumentando a eficiência no fluxo de entregas.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma",
      "Supabase",
      "PostgreSQL",
    ],
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
