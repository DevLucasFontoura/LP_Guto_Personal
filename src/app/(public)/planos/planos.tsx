import Link from "next/link";
import Footer from "@/app/components/Footer/footer";
import PublicHeader from "@/app/components/PublicHeader/publicHeader";
import { PLANOS } from "@/lib/Constants/planos";
import { diferenciais, planos } from "./data";
import {
  IoBarbellOutline,
  IoBodyOutline,
  IoPlayCircleOutline,
  IoCalendarOutline,
  IoCalendarNumberOutline,
} from "react-icons/io5";
import type { IconType } from "react-icons";
import styles from "./planos.module.css";

const PLANO_ICONS: Record<string, IconType> = {
  "montar-treino": IoBarbellOutline,
  avaliacao: IoBodyOutline,
  "aula-unica": IoPlayCircleOutline,
  "1x-semana": IoCalendarOutline,
  "2x-semana": IoCalendarNumberOutline,
};

export default function Planos() {
  return (
    <div className={styles.page}>
      <PublicHeader />

      <header className={styles.header}>
        <h1 className={styles.title}>
          {PLANOS.TITULO_PREFIXO} <span className={styles.titleHighlight}>{PLANOS.TITULO_DESTAQUE}</span>
        </h1>
        <p className={styles.subtitle}>{PLANOS.SUBTITULO}</p>
      </header>

      <main className={styles.main}>
        <section className={styles.diferenciais} aria-label={PLANOS.SECAO_DIFERENCIAIS_ARIA_LABEL}>
          <h2 className={styles.diferenciaisTitle}>{PLANOS.DIFERENCIAIS_TITULO}</h2>
          <ul className={styles.diferenciaisList}>
            {diferenciais.map((item, i) => (
              <li key={i} className={styles.diferenciaisItem}>
                <span className={styles.diferenciaisIcon} aria-hidden>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <p className={styles.intro}>{PLANOS.INTRO_PARAGRAFO}</p>

        <section className={styles.grid} aria-label={PLANOS.SECAO_PLANOS_ARIA_LABEL}>
          {planos.map((plano) => (
            <article key={plano.id} className={styles.card}>
              {plano.badge && (
                <span className={styles.cardBadge}>{plano.badge}</span>
              )}
              <div className={styles.cardTitleRow}>
                {(() => {
                  const Icon = PLANO_ICONS[plano.id] ?? IoBarbellOutline;
                  return <Icon className={styles.cardTitleIcon} aria-hidden />;
                })()}
                <h2 className={styles.cardTitle}>{plano.title}</h2>
              </div>
              <p className={styles.cardDescription}>{plano.description}</p>
              <Link href="/contato" className={styles.cardCta}>
                {PLANOS.CARD_CTA}
                <span className={styles.cardCtaIcon} aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
