/**
 * Treinos digitais à venda — artes podem ser criadas no Canva.
 * Quando tiver as artes: crie a pasta public/img/treinos/, exporte do Canva
 * (ex.: 1080x1350 px) e troque cada imageSrc para /img/treinos/nome-do-treino.webp
 */
export type TreinoProduto = {
  id: string;
  /** Nome do treino (ex.: "Emagrecimento 12 semanas") */
  title: string;
  /** Descrição curta para o card */
  description: string;
  /** Caminho da arte (Canva) — ex.: /img/treinos/emagrecimento.webp */
  imageSrc: string;
  /** Texto alternativo da imagem */
  imageAlt: string;
  /** Link para comprar (WhatsApp, Eduzz, Hotmart, etc.) */
  href: string;
  /** Abre em nova aba? (true para links externos) */
  external?: boolean;
  /** Badge opcional (ex.: "Mais vendido") */
  badge?: string;
};

export const treinos: TreinoProduto[] = [
  {
    id: "emagrecimento",
    title: "Emagrecimento 12 semanas",
    description:
      "Treino focado em perda de gordura com exercícios que você pode fazer em casa ou na academia.",
    imageSrc: "/img/treino/img_emagrecimento_12_semanas.png",
    imageAlt: "Treino Emagrecimento 12 semanas",
    href: "/contato",
    external: false,
    badge: "Em breve",
  },
  {
    id: "hipertrofia",
    title: "Hipertrofia para iniciantes",
    description:
      "Programa de musculação para quem está começando e quer ganhar massa muscular com segurança.",
    imageSrc: "/img/treino/img_hipertrofia_para_iniciantes.png",
    imageAlt: "Treino Hipertrofia para iniciantes",
    href: "/contato",
    external: false,
    badge: "Em breve",
  },
  {
    id: "em-casa",
    title: "Treino em casa",
    description:
      "Sessões de 20–30 min com foco em corpo completo, sem equipamento ou com o mínimo possível.",
    imageSrc: "/img/treino/img_treino_em_casa.png",
    imageAlt: "Treino em casa",
    href: "/contato",
    external: false,
  },
];
