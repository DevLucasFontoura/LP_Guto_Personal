/**
 * Posts de dicas de treino - Coluna: Corpo em movimento.
 * Adicione aqui os posts de dicas que serão publicados no Instagram.
 */
export type DicaPost = {
  id: string;
  /** Título da dica */
  title: string;
  /** Resumo ou descrição curta da dica */
  excerpt: string;
  /** URL do post no Instagram (quando publicado) */
  url: string;
  /** Data de publicação (opcional) - ex: "15/01/2025" */
  date?: string;
};

export const postsDicas: DicaPost[] = [
  {
    id: "1",
    title: "Por que aquecer antes do treino?",
    excerpt:
      "O aquecimento prepara o corpo para o esforço, aumenta a temperatura muscular e reduz o risco de lesões. Veja como fazer um aquecimento eficiente.",
    url: "https://www.instagram.com/",
    date: "20/01/2025",
  },
  {
    id: "2",
    title: "Alongamento: antes ou depois do treino?",
    excerpt:
      "Alongar no momento certo faz diferença nos resultados e na recuperação. Entenda quando e como alongar para potencializar seu treino.",
    url: "https://www.instagram.com/",
    date: "18/01/2025",
  },
  {
    id: "3",
    title: "Quantas vezes por semana treinar?",
    excerpt:
      "A frequência ideal depende do seu objetivo, nível e rotina. Dicas para montar sua semana de treinos sem exageros.",
    url: "https://www.instagram.com/",
    date: "15/01/2025",
  },
  {
    id: "4",
    title: "Descanso: parte essencial do treino",
    excerpt:
      "O corpo se adapta e ganha força no repouso. Saiba por que respeitar o descanso é fundamental para evoluir.",
    url: "https://www.instagram.com/",
    date: "12/01/2025",
  },
  {
    id: "5",
    title: "Movimento e respiração no CrossFit",
    excerpt:
      "Aprender a respirar durante os exercícios melhora a performance e a consciência corporal. Dicas práticas para aplicar no treino.",
    url: "https://www.instagram.com/",
    date: "10/01/2025",
  },
  {
    id: "6",
    title: "Progressão de carga: como evoluir com segurança",
    excerpt:
      "Aumentar peso ou intensidade exige planejamento. Veja como progredir sem aumentar o risco de lesões.",
    url: "https://www.instagram.com/",
    date: "08/01/2025",
  },
];
