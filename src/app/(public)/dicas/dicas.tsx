import Footer from "@/app/components/Footer/footer";
import Topbar from "@/app/components/Topbar/topbar";
import { dicas } from "./data";
import styles from "./dicas.module.css";

export default function Dicas() {
  return (
    <div className={styles.page}>
      <Topbar />

      <header className={styles.header}>
        <h1 className={styles.title}>
          Dicas de <span className={styles.titleHighlight}>treino</span>
        </h1>
        <p className={styles.subtitle}>
          Movimento, recuperação e evolução com consciência
        </p>
      </header>

      <main className={styles.main}>
        <p className={styles.intro}>
          Conteúdo para você evoluir com segurança. Aqui você encontra dicas
          práticas de aquecimento, alongamento, frequência de treino, descanso e
          progressão de carga.
        </p>

        <section className={styles.grid} aria-label="Lista de dicas">
          {dicas.map((dica) => (
            <article key={dica.id} className={styles.card}>
              <span className={styles.cardBadge}>Dica</span>
              <h2 className={styles.cardTitle}>{dica.title}</h2>
              <p className={styles.cardExcerpt}>{dica.excerpt}</p>
              {dica.date && (
                <time className={styles.cardDate} dateTime={dica.date}>
                  {dica.date}
                </time>
              )}
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
