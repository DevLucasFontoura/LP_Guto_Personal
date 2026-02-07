/**
 * Constantes de textos da página Alunos (resultados).
 * Nomes autoexplicativos para facilitar manutenção e tradução.
 */
export const ALUNOS = {
  // —— Cabeçalho ——
  TITULO_PREFIXO: "Resultados dos",
  TITULO_DESTAQUE: "alunos",
  SUBTITULO:
    "Antes e depois, tempo de projeto, evolução de peso e conquistas!",

  // —— Intro ——
  INTRO_PARAGRAFO:
    "Aqui você vê alguns dos resultados de quem treina com acompanhamento personalizado. Cada card mostra fotos antes e depois, duração do projeto, peso inicial e final, e o objetivo alcançado.",

  // —— Seção de resultados ——
  SECAO_ARIA_LABEL: "Resultados dos alunos",

  // —— Card: labels das fotos ——
  CARD_IMG_LABEL_ANTES: "Antes",
  CARD_IMG_LABEL_DEPOIS: "Depois",

  // —— Card: sufixos para alt das imagens (concatena com nome do aluno) ——
  ALT_SUFIXO_ANTES: " antes",
  ALT_SUFIXO_DEPOIS: " depois",

  // —— Card: labels das métricas ——
  METRIC_LABEL_TEMPO: "Tempo",
  METRIC_LABEL_PESO_ANTES: "Peso antes",
  METRIC_LABEL_PESO_DEPOIS: "Peso depois",
  METRIC_LABEL_VARIACAO: "Variação",
  METRIC_LABEL_OBJETIVO: "Objetivo",
  UNIDADE_KG: " kg",

  // —— Card: texto de variação de peso ——
  VARIACAO_KG_A_MENOS: (kg: number) => `${kg} kg a menos`,
  VARIACAO_KG_A_MAIS: (kg: number) => `${kg} kg a mais`,
};
