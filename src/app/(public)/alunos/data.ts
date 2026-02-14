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

/** Lista de resultados dos alunos. Deixe vazio para exibir o card "Resultados em breve". */
export const alunos: AlunoResultado[] = [
  // {
  //   id: "",
  //   nome: "",
  //   imgAntes: "",
  //   imgDepois: "",
  //   tempoProjeto: "",
  //   pesoAntes: 0,
  //   pesoDepois: 0,
  //   objetivo: "",
  // },
];
