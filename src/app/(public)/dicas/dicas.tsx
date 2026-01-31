import Link from "next/link";
import Footer from "@/app/components/Footer/footer";
import Topbar from "@/app/components/Topbar/topbar";
import { postsDicas } from "./data";
import styles from "./dicas.module.css";

export default function Dicas() {
  return (
    <div className={styles.page}>
      <Topbar />

      <header className={styles.header}>
        <h1 className={styles.title}>Dicas de treino</h1>
        <p className={styles.subtitle}>Corpo em movimento</p>
      </header>

      <main className={styles.content}>
        <p className={styles.intro}>
          Aqui você encontra vários posts com dicas de treino, movimento e
          bem-estar. Conteúdo <strong>Corpo em movimento</strong> para você
          evoluir com segurança e consciência.
        </p>

        <section className={styles.grid}>
          {postsDicas.map((post) => (
            <article key={post.id} className={styles.card}>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <div className={styles.cardFooter}>
                {post.date && (
                  <span className={styles.cardDate}>{post.date}</span>
                )}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  Ver no Instagram
                </a>
              </div>
            </article>
          ))}
        </section>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Voltar ao início
          </Link>
          <Link href="/LinkTree" className={styles.navLink}>
            Ver treinos e links
          </Link>
        </nav>
      </main>

      <Footer />
    </div>
  );
}
