import Link from "next/link";
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
          Pontos-chave das colunas do Guto em outros canais — leia a matéria completa no site de origem
        </p>
      </header>

      <main className={styles.main}>
        <p className={styles.intro}>
          Aqui você encontra resumos das matérias que o Gutemberg publica em portais como o RaniNewsTV. Cada card traz os pontos principais; use o link para ler o artigo completo.
        </p>

        <section className={styles.grid} aria-label="Matérias do Guto">
          {materias.map((materia) => (
            <article key={materia.id} className={styles.card}>
              <span className={styles.cardBadge}>{materia.source}</span>
              <h2 className={styles.cardTitle}>{materia.title}</h2>
              <ul className={styles.keyPoints}>
                {materia.keyPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
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
