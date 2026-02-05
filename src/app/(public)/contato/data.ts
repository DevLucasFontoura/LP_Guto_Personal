/** Número WhatsApp: DDI + DDD + número (sem espaços ou traços) */
export const WHATSAPP_NUMBER = "5561984349802";

/** E-mail e Instagram para a seção Outros canais */
export const CONTATO_EMAIL = "gutopersonal89@hotmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/guto_personalbsb/";
export const INSTAGRAM_HANDLE = "@guto_personalbsb";

export type WhatsAppItem = {
  id: string;
  label: string;
  /** Mensagem que será enviada ao abrir o WhatsApp */
  mensagem: string;
};

/** Principais itens de um personal — ao clicar abre o WhatsApp com a mensagem */
const prefixo = "Olá, vim pela sua plataforma. ";

export const whatsAppItens: WhatsAppItem[] = [
  {
    id: "treinos",
    label: "Treinos e planos",
    mensagem: prefixo + "Gostaria de saber mais sobre treinos e planos.",
  },
  {
    id: "avaliacao",
    label: "Avaliação física",
    mensagem: prefixo + "Gostaria de agendar uma avaliação física.",
  },
  {
    id: "valores",
    label: "Planos e valores",
    mensagem: prefixo + "Gostaria de conhecer os planos e valores.",
  },
  {
    id: "acompanhamento",
    label: "Acompanhamento personalizado",
    mensagem: prefixo + "Tenho interesse no acompanhamento personalizado.",
  },
  {
    id: "duvidas",
    label: "Dúvidas sobre treino",
    mensagem: prefixo + "Tenho algumas dúvidas sobre treino.",
  },
  {
    id: "outro",
    label: "Outro assunto",
    mensagem: prefixo + "Gostaria de mais informações.",
  },
];
