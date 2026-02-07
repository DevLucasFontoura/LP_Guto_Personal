"use client";

import Footer from "@/app/components/Footer/footer";
import PublicHeader from "@/app/components/PublicHeader/publicHeader";
import { CONTATOS } from "@/lib/Constants/contatos";
import { FaInstagram } from "react-icons/fa";
import {
  IoMailOutline,
  IoBarbellOutline,
  IoClipboardOutline,
  IoPricetagOutline,
  IoPersonAddOutline,
  IoHelpCircleOutline,
  IoChatbubbleOutline,
} from "react-icons/io5";
import type { IconType } from "react-icons";
import styles from "./contato.module.css";

function whatsAppUrl(mensagem: string) {
  return `https://wa.me/${CONTATOS.WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

const WHATSAPP_CARD_ICONS: Record<string, IconType> = {
  treinos: IoBarbellOutline,
  avaliacao: IoClipboardOutline,
  valores: IoPricetagOutline,
  acompanhamento: IoPersonAddOutline,
  duvidas: IoHelpCircleOutline,
  outro: IoChatbubbleOutline,
};

export default function Contato() {
  return (
    <div className={styles.page}>
      <PublicHeader />

      <header className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.titleHighlight}>{CONTATOS.TITULO_DESTAQUE}</span>
        </h1>
        <p className={styles.subtitle}>
          {CONTATOS.SUBTITULO}
        </p>
      </header>

      <main className={styles.main}>
        <hr className={styles.divider} aria-hidden />

        <p className={styles.intro}>
          {CONTATOS.INTRO_PARAGRAFO}
        </p>

        {/* Seção WhatsApp — principais itens do personal */}
        <section className={styles.whatsappSection} aria-label={CONTATOS.WHATSAPP_SECAO_ARIA_LABEL}>
          <h2 className={styles.whatsappTitle}>{CONTATOS.WHATSAPP_TITULO}</h2>
          <p className={styles.whatsappIntro}>
            {CONTATOS.WHATSAPP_INTRO}
          </p>
          <div className={styles.whatsappGrid}>
            {CONTATOS.WHATSAPP_ITENS.map((item) => (
              <a
                key={item.id}
                href={whatsAppUrl(item.mensagem)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappCard}
              >
                <div className={styles.whatsappCardTop}>
                  <span className={styles.whatsappCardIcon} aria-hidden>
                    {(() => {
                      const Icon = WHATSAPP_CARD_ICONS[item.id] ?? WHATSAPP_CARD_ICONS.outro;
                      return <Icon className={styles.whatsappCardIconSvg} aria-hidden />;
                    })()}
                  </span>
                  <span className={styles.whatsappCardLabel}>{item.label}</span>
                </div>
                <span className={styles.whatsappCardButton}>{CONTATOS.WHATSAPP_CARD_HINT}</span>
              </a>
            ))}
          </div>
        </section>

        <hr className={styles.divider} aria-hidden />

        <aside className={styles.infoSection}>
          <h2 className={styles.infoTitle}>{CONTATOS.INFO_TITULO}</h2>
          <div className={styles.infoGrid}>
            <a
              href={`mailto:${CONTATOS.EMAIL}`}
              className={styles.infoCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.infoCardIcon} aria-hidden>
                <IoMailOutline className={styles.emailIconSvg} aria-hidden />
              </span>
              <span className={styles.infoCardTitle}>{CONTATOS.INFO_CARD_TITLE_EMAIL}</span>
              <span className={styles.infoCardValue}>{CONTATOS.EMAIL}</span>
              <span className={styles.infoCardCta}>{CONTATOS.INFO_CARD_CTA_EMAIL}</span>
            </a>
            <a
              href={CONTATOS.INSTAGRAM_URL}
              className={styles.infoCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.infoCardIcon} aria-hidden>
                <FaInstagram className={styles.instagramIconSvg} aria-hidden />
              </span>
              <span className={styles.infoCardTitle}>{CONTATOS.INFO_CARD_TITLE_INSTAGRAM}</span>
              <span className={styles.infoCardValue}>{CONTATOS.INSTAGRAM_HANDLE}</span>
              <span className={styles.infoCardCta}>{CONTATOS.INFO_CARD_CTA_VER_PERFIL}</span>
            </a>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
