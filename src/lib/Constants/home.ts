/**
 * Constantes de textos e URLs da página Home.
 * Nomes autoexplicativos para facilitar manutenção e tradução.
 */
export const HOME = {
  // —— Hero (banner principal) ——
  HERO_IMAGE_ALT: "Gutemberg - Personal Trainer",
  HERO_TITLE_LINHA_1: "O CORPO DOS",
  HERO_TITLE_LINHA_2: "SEUS SONHOS COMEÇA HOJE!",
  HERO_CTA_VER_PLANOS: "Veja nossos planos",
  HERO_IMAGE_DESKTOP_PATH: "/img/home/img_home.jpg",
  HERO_IMAGE_MOBILE_PATH: "/img/home/img_guto_original_amarelo.jpeg",

  // —— Sobre (seção sobre o personal) ——
  ABOUT_IMAGE_ALT: "Gutemberg - Personal Trainer",
  ABOUT_IMAGE_PROFILE_PATH: "/img/home/img_profile_guto.png",
  ABOUT_NOME_TITULO: "Gutemberg Rodrigues",
  ABOUT_TEXTO_APRESENTACAO:
    "Sou personal trainer brasiliense, formado em Educação Física pela Uniplan, com mais de 8 anos de experiência ajudando pessoas a conquistarem saúde, autoestima e qualidade de vida. Apaixonado por promover bem-estar de forma acessível e prática, assina a coluna \"Corpo em Movimento\", no RaniNewsTV, onde compartilha dicas e reflexões do universo fitness.",
  ABOUT_CTA_INDICES: "Veja os índices do meu trabalho",

  // —— Números que importam ——
  NUMBERS_TITULO_PREFIXO: "Números que",
  NUMBERS_TITULO_DESTAQUE: "Importam",
  NUMBERS_LABEL_ANOS_EXPERIENCIA: "Anos de experiência",
  NUMBERS_LABEL_ALUNOS: "Alunos",
  NUMBERS_LABEL_AULAS_DADAS: "Aulas dadas",
  NUMBERS_CTA_CONVITE:
    "Venha fazer parte da nossa família e conquiste o seu corpo dos sonhos!",

  // —— Patrocinadores (entre Números e Instagram) ——
  SPONSORS_TITULO: "Nossos",
  SPONSORS_TITULO_DESTAQUE: "Patrocinadores",
  SPONSORS_SUBTITULO: "Quem apoia nosso trabalho",
  /** Lista de patrocinadores: nome, caminho do logo (em /public), link opcional. Substitua placeholder.svg pelos logos reais. */
  SPONSORS: [
    { name: "Patrocinador 1", logoPath: "/img/sponsors/placeholder.svg", url: "https://example.com" },
    { name: "Patrocinador 2", logoPath: "/img/sponsors/placeholder.svg", url: "https://example.com" },
    { name: "Patrocinador 3", logoPath: "/img/sponsors/placeholder.svg" },
  ] as { name: string; logoPath: string; url?: string }[],

  // —— Instagram ——
  INSTAGRAM_TITULO_PREFIXO: "Me siga no",
  INSTAGRAM_TITULO_DESTAQUE: "Instagram",
  INSTAGRAM_SUBTITULO: "Acompanhe dicas, treinos e o dia a dia.",
  /** URLs dos posts exibidos no feed. Obter em: post → ⋮ → Incorporar. */
  INSTAGRAM_POST_URLS: [
    "https://www.instagram.com/p/Cd3qC3rJ29c/",
    "https://www.instagram.com/p/CpsQh5oOQ6e/",
  ] as string[],
};
