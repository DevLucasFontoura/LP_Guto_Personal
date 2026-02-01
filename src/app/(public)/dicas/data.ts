/**
 * Dicas de treino e bem-estar — conteúdo próprio da página.
 */
export type Dica = {
  id: string;
  /** Título da dica */
  title: string;
  /** Texto da dica (resumo ou conteúdo) */
  excerpt: string;
  /** Data (opcional) — ex: "15/01/2025" */
  date?: string;
};

export const dicas: Dica[] = [
  {
    id: "1",
    title: "Por que aquecer antes do treino?",
    excerpt:
      "O aquecimento prepara o corpo para o esforço, aumenta a temperatura muscular e reduz o risco de lesões. Faça 5 a 10 minutos de movimento leve (esteira, bike ou dinâmico) antes de carregar peso.",
    date: "20/01/2025",
  },
  {
    id: "2",
    title: "Alongamento: antes ou depois do treino?",
    excerpt:
      "Alongar no momento certo faz diferença. Antes do treino: alongamento dinâmico. Depois: estático para relaxar e melhorar a recuperação. Evite alongar frio antes de treinos de força.",
    date: "18/01/2025",
  },
  {
    id: "3",
    title: "Quantas vezes por semana treinar?",
    excerpt:
      "A frequência ideal depende do seu objetivo e rotina. Para evoluir com segurança: 3 a 4x por semana é um bom começo. Qualidade e consistência valem mais que volume excessivo.",
    date: "15/01/2025",
  },
  {
    id: "4",
    title: "Descanso: parte essencial do treino",
    excerpt:
      "O corpo se adapta e ganha força no repouso. Respeitar o sono e os dias de descanso é fundamental para evoluir e evitar lesões. Treinar todo dia sem recuperação atrapalha os resultados.",
    date: "12/01/2025",
  },
  {
    id: "5",
    title: "Movimento e respiração",
    excerpt:
      "Aprender a respirar durante os exercícios melhora a performance e a consciência corporal. Expire no esforço e inspire na volta. Não segure o ar na hora da carga.",
    date: "10/01/2025",
  },
  {
    id: "6",
    title: "Progressão de carga: como evoluir com segurança",
    excerpt:
      "Aumentar peso ou intensidade exige planejamento. Avance de forma gradual: quando a série ficar confortável, acrescente carga ou repetições. Evite saltos grandes para reduzir risco de lesão.",
    date: "08/01/2025",
  },
];
