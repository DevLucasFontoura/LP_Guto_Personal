import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/Footer/footer";
import PublicHeader from "@/app/components/PublicHeader/publicHeader";
import { materias } from "./data";
import styles from "./dicas.module.css";

export default function Dicas() {
  return (
    <div className={styles.page}>
      <PublicHeader />

      <header className={styles.header}>
        <h1 className={styles.title}>
          Dicas e <span className={styles.titleHighlight}>matérias</span>
        </h1>
        <p className={styles.subtitle}>
          Assista ao vídeo e confira as matérias do Guto em outros canais
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.grid} aria-label="Matérias do Guto">
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
                    className={styles.cardImage}
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
                  Ler matéria completa
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
