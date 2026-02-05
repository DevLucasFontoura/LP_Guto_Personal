import Link from "next/link";
import Footer from "@/app/components/Footer/footer";
import PublicHeader from "@/app/components/PublicHeader/publicHeader";
import { diferenciais, planos } from "./data";
import styles from "./planos.module.css";

export default function Planos() {
  return (
    <div className={styles.page}>
      <PublicHeader />

      <header className={styles.header}>
        <h1 className={styles.title}>
          Nossos <span className={styles.titleHighlight}>planos</span>
        </h1>
        <p className={styles.subtitle}>
          Escolha a opção que se encaixa na sua rotina e nos seus objetivos
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.diferenciais} aria-label="Diferenciais">
          <h2 className={styles.diferenciaisTitle}>Por que treinar com o Guto?</h2>
          <ul className={styles.diferenciaisList}>
            {diferenciais.map((item, i) => (
              <li key={i} className={styles.diferenciaisItem}>
                <span className={styles.diferenciaisIcon} aria-hidden>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <p className={styles.intro}>
          Atendimento presencial na academia, acompanhamento de perto em cada exercício. Avaliação física, aula avulsa ou pacotes semanais: o plano ideal para você.
        </p>

        <section className={styles.grid} aria-label="Planos disponíveis">
          {planos.map((plano) => (
            <article key={plano.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{plano.title}</h2>
                {plano.badge && (
                  <span className={styles.cardBadge}>{plano.badge}</span>
                )}
              </div>
              <p className={styles.cardValor}>{plano.valor}</p>
              <p className={styles.cardDescription}>{plano.description}</p>
              <Link href="/contato" className={styles.cardCta}>
                Quero este plano
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
