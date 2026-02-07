/**
 * Constantes de textos e dados da página Contato.
 * Nomes autoexplicativos para facilitar manutenção e tradução.
 */
const WHATSAPP_PREFIXO = "Olá, vim pela sua plataforma. ";

export type WhatsAppItem = {
  id: string;
  label: string;
  /** Mensagem que será enviada ao abrir o WhatsApp */
  mensagem: string;
};

export const CONTATOS = {
  // —— Cabeçalho ——
  TITULO_DESTAQUE: "Contato",
  SUBTITULO:
    "Envie sua mensagem ou entre em contato pelos canais abaixo.",

  // —— Intro ——
  INTRO_PARAGRAFO:
    "Escolha um assunto abaixo para falar pelo WhatsApp com mensagem personalizada, ou use os outros canais.",

  // —— Seção WhatsApp ——
  WHATSAPP_SECAO_ARIA_LABEL: "Fale pelo WhatsApp",
  WHATSAPP_TITULO: "Fale pelo WhatsApp",
  WHATSAPP_INTRO:
    "Clique no assunto e a mensagem já vai pronta para enviar.",
  WHATSAPP_CARD_HINT: "Abrir WhatsApp →",

  // —— Seção Outros canais ——
  INFO_TITULO: "Outros canais",
  INFO_CARD_TITLE_EMAIL: "E-mail",
  INFO_CARD_TITLE_INSTAGRAM: "Instagram",
  INFO_CARD_CTA_EMAIL: "Enviar e-mail →",
  INFO_CARD_CTA_VER_PERFIL: "Ver perfil →",

  // —— Dados de contato ——
  /** Número WhatsApp: DDI + DDD + número (sem espaços ou traços) */
  WHATSAPP_NUMBER: "5561984349802",
  EMAIL: "gutopersonal89@hotmail.com",
  INSTAGRAM_URL: "https://www.instagram.com/guto_personalbsb/",
  INSTAGRAM_HANDLE: "@guto_personalbsb",

  // —— Itens WhatsApp (label + mensagem ao clicar) ——
  WHATSAPP_ITENS: [
    {
      id: "treinos",
      label: "Treinos e planos",
      mensagem: WHATSAPP_PREFIXO + "Gostaria de saber mais sobre treinos e planos.",
    },
    {
      id: "avaliacao",
      label: "Avaliação física",
      mensagem: WHATSAPP_PREFIXO + "Gostaria de agendar uma avaliação física.",
    },
    {
      id: "valores",
      label: "Planos e valores",
      mensagem: WHATSAPP_PREFIXO + "Gostaria de conhecer os planos e valores.",
    },
    {
      id: "acompanhamento",
      label: "Acompanhamento personalizado",
      mensagem: WHATSAPP_PREFIXO + "Tenho interesse no acompanhamento personalizado.",
    },
    {
      id: "duvidas",
      label: "Dúvidas sobre treino",
      mensagem: WHATSAPP_PREFIXO + "Tenho algumas dúvidas sobre treino.",
    },
    {
      id: "outro",
      label: "Outro assunto",
      mensagem: WHATSAPP_PREFIXO + "Gostaria de mais informações.",
    },
  ] as WhatsAppItem[],
};
