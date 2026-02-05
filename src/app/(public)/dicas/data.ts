/**
 * Matérias do Guto em outros sites — pontos-chave + link para leitura completa.
 */
export type Materia = {
  id: string;
  /** Título da matéria */
  title: string;
  /** Pontos-chave (resumo) */
  keyPoints: string[];
  /** URL da matéria completa */
  url: string;
  /** Data de publicação — ex: "05/10/2025" */
  date?: string;
  /** Nome do site de origem */
  source: string;
};

export const materias: Materia[] = [
  {
    id: "1",
    title: "Por que cada vez mais pessoas estão treinando ao ar livre",
    keyPoints: [
      "Troca da academia por treino em parques e praças.",
      "Gratuito; reduz estresse, melhora humor e fortalece o coração.",
      "Impacto positivo na saúde física e mental (estudos).",
      "Pandemia acelerou a mudança; grupos de corrida e treino funcional mantêm motivação.",
      "Dicas do Guto para começar a treinar ao ar livre.",
    ],
    url: "https://raninewstv.com.br/exercicios-ao-ar-livre-corpo-em-movimento-guto-personal",
    date: "05/10/2025",
    source: "RaniNewsTV — Corpo em Movimento",
  },
  {
    id: "2",
    title: "Não pare nas férias: o corpo também precisa se mover durante as viagens",
    keyPoints: [
      "O corpo não tira férias; parar totalmente faz perder o progresso dos treinos.",
      "Guto: inatividade desacelera metabolismo, reduz energia e dificulta o retorno.",
      "Caminhar, subir escadas, peso do corpo ou elásticos já ajudam muito.",
      "20 minutos de atividade por dia mantêm saúde e evitam perda de condicionamento.",
      "Adaptar, não parar: curtir a viagem e continuar se cuidando.",
    ],
    url: "https://raninewstv.com.br/nao-pare-nas-ferias-corpo-em-movimento",
    date: "19/10/2025",
    source: "RaniNewsTV — Corpo em Movimento",
  },
  {
    id: "3",
    title: "Movimento é vida: a importância da atividade física em todas as idades",
    keyPoints: [
      "Atividade física: remédio gratuito que faz bem da infância à terceira idade.",
      "Infância: desenvolvimento ósseo, coordenação, imunidade e desempenho escolar.",
      "Adulto: 150 min/semana reduzem risco cardiovascular, diabetes e câncer.",
      "Terceira idade: preserva músculos, ossos, autonomia e saúde cognitiva.",
      "Caminhar, pedalar, nadar ou dançar já fazem diferença.",
    ],
    url: "https://raninewstv.com.br/importancia-atividade-fisica-em-todas-as-idades",
    date: "06/09/2025",
    source: "RaniNewsTV — Corpo em Movimento",
  },
  {
    id: "4",
    title: "Musculação na terceira idade: saúde, autonomia e qualidade de vida",
    keyPoints: [
      "Treino de força retarda perda de massa muscular (sarcopenia) e risco de quedas.",
      "Fortalece ossos, melhora postura e mantém independência funcional.",
      "Ajuda no controle da glicemia, pressão e risco cardiovascular.",
      "Beneficia disposição, autoestima e humor.",
      "Com orientação profissional, qualquer idade pode começar com segurança.",
    ],
    url: "https://raninewstv.com.br/musculacao-na-terceira-idade-saude-autonomia",
    date: "13/12/2025",
    source: "RaniNewsTV — Corpo em Movimento",
  },
  {
    id: "5",
    title: "Novembro Azul: a importância da musculação na saúde do homem",
    keyPoints: [
      "Além da prevenção ao câncer de próstata, autocuidado masculino em foco.",
      "Mantém massa muscular (importante após os 30, contra sarcopenia).",
      "Regula hormônios, inclusive testosterona; melhora metabolismo e disposição.",
      "Reduz risco de diabetes, hipertensão e obesidade.",
      "Circulação, imunidade, sono e autoconfiança também melhoram.",
    ],
    url: "https://raninewstv.com.br/%f0%9f%92%99-novembro-azul-a-importancia-da-musculacao-na-saude-do-homem",
    date: "07/11/2025",
    source: "RaniNewsTV — Corpo em Movimento",
  },
];
