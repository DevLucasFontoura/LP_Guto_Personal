/**
 * Planos de atendimento do personal trainer.
 */
export type Plano = {
  id: string;
  /** Nome do plano */
  title: string;
  /** Descrição curta */
  description: string;
  /** Destaque curto (ex.: "Ideal para começar") */
  badge?: string;
};

/** Diferenciais do atendimento — aparecem na página de planos */
export const diferenciais = [
  "Atendimento presencial na sua academia",
  "Acompanhamento de perto em cada exercício",
  "Treino 100% personalizado para você",
  "Mais de 8 anos de experiência",
];

export const planos: Plano[] = [
  {
    id: "montar-treino",
    title: "Montar treino",
    description: "Elaboração de um treino personalizado para você seguir na academia, com exercícios, séries e evolução.",
    badge: "Para treinar sozinho",
  },
  {
    id: "avaliacao",
    title: "Avaliação física",
    description: "Análise de composição corporal, medidas e condicionamento para montar seu treino personalizado.",
    badge: "Primeiro passo",
  },
  {
    id: "aula-unica",
    title: "Aula única",
    description: "Uma sessão avulsa para experimentar a metodologia ou para quem tem rotina irregular.",
    badge: "Experimente",
  },
  {
    id: "1x-semana",
    title: "Uma vez na semana",
    description: "Um encontro semanal com acompanhamento contínuo, ideal para manter o ritmo e evoluir.",
    badge: "Mais escolhido",
  },
  {
    id: "2x-semana",
    title: "Duas vezes na semana",
    description: "Dois encontros por semana para resultados mais rápidos e consistência no treino.",
    badge: "Máximo resultado",
  },
];
