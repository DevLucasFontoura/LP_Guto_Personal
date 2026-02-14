import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer/footer";
import PublicHeader from "@/app/components/PublicHeader/publicHeader";
import { TREINO } from "@/lib/Constants/treino";
import { treinos } from "./data";
import styles from "./treino.module.css";

export default function Treino() {
  return (
    <div className={styles.page}>
      <PublicHeader />

      <header className={styles.header}>
        <h1 className={styles.title}>
          {TREINO.TITULO_PREFIXO}{" "}
          <span className={styles.titleHighlight}>{TREINO.TITULO_DESTAQUE}</span>
        </h1>
        <p className={styles.subtitle}>{TREINO.SUBTITULO}</p>
      </header>

      <main className={styles.main}>
        <section
          className={styles.grid}
          aria-label={TREINO.SECAO_ARIA_LABEL}
        >
          {treinos.map((treino) => {
            const cardContent = (
              <>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={treino.imageSrc}
                    alt={treino.imageAlt}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 960px) 50vw, 33vw"
                  />
                  {treino.badge && (
                    <span className={styles.cardBadge}>{treino.badge}</span>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{treino.title}</h2>
                  <p className={styles.cardDescription}>{treino.description}</p>
                  <div className={styles.cardCtaWrap}>
                    <button type="button" className={styles.cardCtaEmBreve} disabled>
                      {TREINO.CARD_CTA_EM_BREVE}
                    </button>
                  </div>
                </div>
              </>
            );

            if (treino.external) {
              return (
                <a
                  key={treino.id}
                  href={treino.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link
                key={treino.id}
                href={treino.href}
                className={styles.card}
              >
                {cardContent}
              </Link>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
