/**
 * ID do vídeo do YouTube em destaque (ex: "dQw4w9WgXcQ" de https://www.youtube.com/watch?v=dQw4w9WgXcQ)
 */
export const FEATURED_VIDEO_ID = "dQw4w9WgXcQ";

/**
 * Matérias do Guto em outros sites — link para leitura completa.
 */
export type Materia = {
  id: string;
  /** Título da matéria */
  title: string;
  /** URL da matéria completa */
  url: string;
  /** Data de publicação — ex: "05/10/2025" */
  date?: string;
  /** Nome do site de origem */
  source: string;
  /** ID do vídeo no YouTube (ex: "6eWn-6U6oCA") — quando definido, o vídeo aparece no card */
  videoId?: string;
  /** Caminho da imagem (ex: "/img/dicas/img_guto_praia.webp") — quando definido, a imagem aparece no card */
  image?: string;
};

export const materias: Materia[] = [
  {
    id: "1",
    title: "Por que cada vez mais pessoas estão treinando ao ar livre",
    url: "https://raninewstv.com.br/exercicios-ao-ar-livre-corpo-em-movimento-guto-personal",
    date: "05/10/2025",
    source: "RaniNewsTV — Corpo em Movimento",
    videoId: "6eWn-6U6oCA",
  },
  {
    id: "2",
    title: "Não pare nas férias: o corpo também precisa se mover durante as viagens",
    url: "https://raninewstv.com.br/nao-pare-nas-ferias-corpo-em-movimento",
    date: "19/10/2025",
    source: "RaniNewsTV — Corpo em Movimento",
    image: "/img/dicas/img_guto_praia.webp",
  },
  {
    id: "3",
    title: "Movimento é vida: a importância da atividade física em todas as idades",
    url: "https://raninewstv.com.br/importancia-atividade-fisica-em-todas-as-idades",
    date: "06/09/2025",
    source: "RaniNewsTV — Corpo em Movimento",
  },
  {
    id: "4",
    title: "Musculação na terceira idade: saúde, autonomia e qualidade de vida",
    url: "https://raninewstv.com.br/musculacao-na-terceira-idade-saude-autonomia",
    date: "13/12/2025",
    source: "RaniNewsTV — Corpo em Movimento",
  },
  {
    id: "5",
    title: "Novembro Azul: a importância da musculação na saúde do homem",
    url: "https://raninewstv.com.br/%f0%9f%92%99-novembro-azul-a-importancia-da-musculacao-na-saude-do-homem",
    date: "07/11/2025",
    source: "RaniNewsTV — Corpo em Movimento",
  },
];
