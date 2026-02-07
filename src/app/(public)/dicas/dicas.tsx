import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/Footer/footer";
import PublicHeader from "@/app/components/PublicHeader/publicHeader";
import { DICAS } from "@/lib/Constants/dicas";
import { materias } from "./data";
import styles from "./dicas.module.css";

export default function Dicas() {
  return (
    <div className={styles.page}>
      <PublicHeader />

      <header className={styles.header}>
        <h1 className={styles.title}>
          {DICAS.TITULO_PREFIXO} <span className={styles.titleHighlight}>{DICAS.TITULO_DESTAQUE}</span>
        </h1>
        <p className={styles.subtitle}>{DICAS.SUBTITULO}</p>
      </header>

      <main className={styles.main}>
        <section className={styles.grid} aria-label={DICAS.SECAO_ARIA_LABEL}>
          {materias.map((materia) => (
            <article key={materia.id} className={styles.card}>
              <span className={styles.cardBadge}>{materia.source}</span>
              <h2 className={styles.cardTitle}>{materia.title}</h2>
              {materia.videoId && (
                <div className={styles.cardVideoWrapper}>
                  <iframe
                    src={`https://www.youtube.com/embed/${materia.videoId}?rel=0`}
                    title={`Vídeo: ${materia.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={styles.videoIframe}
                  />
                </div>
              )}
              {materia.image && !materia.videoId && (
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={materia.image}
                    alt=""
                    fill
                    className={`${styles.cardImage} ${materia.imagePosition === "top" ? styles.cardImageTop : ""} ${materia.imagePosition === "bottom" ? styles.cardImageBottom : ""}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
              <div className={styles.cardFooter}>
                {materia.date && (
                  <time className={styles.cardDate} dateTime={materia.date}>
                    {materia.date}
                  </time>
                )}
                <Link
                  href={materia.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  {DICAS.CARD_LINK_LER_MATERIA}
                  <span className={styles.cardLinkIcon} aria-hidden>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
