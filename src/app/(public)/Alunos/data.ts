export type AlunoResultado = {
  id: string;
  nome: string;
  /** Imagem "antes" (substitua pelo caminho real) */
  imgAntes: string;
  /** Imagem "depois" (substitua pelo caminho real) */
  imgDepois: string;
  /** Duração do projeto, ex: "6 meses", "1 ano" */
  tempoProjeto: string;
  /** Peso inicial em kg */
  pesoAntes: number;
  /** Peso final em kg */
  pesoDepois: number;
  /** Objetivo ou conquista principal */
  objetivo?: string;
  /** Depoimento curto (opcional) */
  depoimento?: string;
};

export const alunos: AlunoResultado[] = [
  {
    id: "1",
    nome: "Maria S.",
    imgAntes: "/img_profile_guto.jpg",
    imgDepois: "/img_profile_guto.jpg",
    tempoProjeto: "6 meses",
    pesoAntes: 78,
    pesoDepois: 68,
    objetivo: "Perda de peso e ganho de disposição",
    depoimento: "Resultados que eu não imaginava em pouco tempo.",
  },
  {
    id: "2",
    nome: "João P.",
    imgAntes: "/img_profile_guto.jpg",
    imgDepois: "/img_profile_guto.jpg",
    tempoProjeto: "1 ano",
    pesoAntes: 92,
    pesoDepois: 82,
    objetivo: "Hipertrofia e definição",
    depoimento: "Treino focado e acompanhamento de perto.",
  },
  {
    id: "3",
    nome: "Ana L.",
    imgAntes: "/img_profile_guto.jpg",
    imgDepois: "/img_profile_guto.jpg",
    tempoProjeto: "4 meses",
    pesoAntes: 65,
    pesoDepois: 62,
    objetivo: "Força e condicionamento",
  },
];
