"use client";

import Footer from "@/app/components/Footer/footer";
import PublicHeader from "@/app/components/PublicHeader/publicHeader";
import {
  CONTATO_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
  whatsAppItens,
} from "./data";
import styles from "./contato.module.css";

function whatsAppUrl(mensagem: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Contato() {
  return (
    <div className={styles.page}>
      <PublicHeader />

      <header className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.titleHighlight}>Contato</span>
        </h1>
        <p className={styles.subtitle}>
          Envie sua mensagem ou entre em contato pelos canais abaixo.
        </p>
      </header>

      <main className={styles.main}>
        <hr className={styles.divider} aria-hidden />

        <p className={styles.intro}>
          Escolha um assunto abaixo para falar pelo WhatsApp com mensagem
          personalizada, ou use os outros canais.
        </p>

        {/* Seção WhatsApp — principais itens do personal */}
        <section className={styles.whatsappSection} aria-label="Fale pelo WhatsApp">
          <h2 className={styles.whatsappTitle}>Fale pelo WhatsApp</h2>
          <p className={styles.whatsappIntro}>
            Clique no assunto e a mensagem já vai pronta para enviar.
          </p>
          <div className={styles.whatsappGrid}>
            {whatsAppItens.map((item) => (
              <a
                key={item.id}
                href={whatsAppUrl(item.mensagem)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappCard}
              >
                <span className={styles.whatsappCardLabel}>{item.label}</span>
                <span className={styles.whatsappCardHint}>Abrir WhatsApp →</span>
              </a>
            ))}
          </div>
        </section>

        <hr className={styles.divider} aria-hidden />

        <aside className={styles.infoSection}>
          <h2 className={styles.infoTitle}>Outros canais</h2>
          <div className={styles.infoGrid}>
            <a
              href={`mailto:${CONTATO_EMAIL}`}
              className={styles.infoCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.infoCardIcon} aria-hidden>
                <EmailIcon />
              </span>
              <span className={styles.infoCardTitle}>E-mail</span>
              <span className={styles.infoCardValue}>{CONTATO_EMAIL}</span>
              <span className={styles.infoCardCta}>Enviar e-mail →</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              className={styles.infoCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.infoCardIcon} aria-hidden>
                <InstagramIcon />
              </span>
              <span className={styles.infoCardTitle}>Instagram</span>
              <span className={styles.infoCardValue}>{INSTAGRAM_HANDLE}</span>
              <span className={styles.infoCardCta}>Ver perfil →</span>
            </a>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
