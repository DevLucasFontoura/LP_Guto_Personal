import Link from "next/link";
import RotatingText from "@/app/components/RotatingText/RotatingText";
import Footer from "@/app/components/Footer/footer";
import Topbar from "@/app/components/Topbar/topbar";
import styles from "./home.module.css";

const rotatingTexts = [
  "seu treino!",
  "seu corpo!",
  "sua rotina!",
  "sua evolução!",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Topbar />

      {/* Hero: fundo escuro + padrão, apenas texto */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>
              Controle{" "}
              <span className={styles.rotatingTextWrapper}>
                <RotatingText
                  texts={rotatingTexts}
                  splitBy="characters"
                  staggerDuration={0.02}
                  staggerFrom="first"
                />
              </span>
            </h2>
            <p className={styles.heroParagraph}>
              [Escreva aqui: texto curto se apresentando como educador físico e atleta de CrossFit, e que você tem um plano e método de treinamento que se encaixam na rotina do aluno para ele alcançar os resultados.]
            </p>
          </div>
        </div>
      </section>

      {/* Sobre: fundo creme, duas colunas (foto academia | texto) */}
      <section className={styles.about}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutImageWrap}>
            <div className={styles.aboutImagePlaceholder} />
          </div>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>
              Eu sou o <span className={styles.aboutHighlight}>TREINADOR</span>{" "}
              <span className={styles.aboutHighlight}>Gutemberg.</span>
            </h2>
            <p className={styles.aboutParagraph}>
              [Escreva aqui: sua trajetória no esporte — ex. ginástica, natação, musculação, travessias, fisiculturismo, CrossFit, títulos (ex.: vice-campeão mundial).]
            </p>
            <p className={styles.aboutParagraph}>
              [Escreva aqui: formação (Educação Física, especializações, Level 1 CrossFit etc.) e que hoje você quer ajudar seus alunos a alcançarem os objetivos por meio da atividade física.]
            </p>
            <p className={styles.aboutParagraph}>
              [Escreva aqui: encerramento — que você tem um plano para quem tem pouca disponibilidade ou quer se dedicar a fundo e conquistar os resultados.]
            </p>
          </div>
        </div>
      </section>

      {/* Treinos e Dicas */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>TREINOS DISPONÍVEIS</h2>
        <div className={styles.ctaLinks}>
          <Link href="/LinkTree" className={styles.ctaLink}>
            Ver treinos e links
          </Link>
          <Link href="/dicas" className={styles.ctaLinkSecondary}>
            Coluna: Corpo em movimento
          </Link>
        </div>
      </section>

      {/* Números que Importam */}
      <section className={styles.numbers}>
        <h2 className={styles.numbersTitle}>Números que Importam</h2>
        <div className={styles.numbersGrid}>
          <div className={styles.numberItem}>
            <span className={styles.numberValue}>45.000+</span>
            <span className={styles.numberLabel}>alunos</span>
            <span className={styles.numberSublabel}>transformados</span>
          </div>
          <div className={styles.numberItem}>
            <span className={styles.numberValue}>100+</span>
            <span className={styles.numberLabel}>aulas</span>
            <span className={styles.numberSublabel}>exclusivas</span>
          </div>
          <div className={styles.numberItem}>
            <span className={styles.numberValue}>3+</span>
            <span className={styles.numberLabel}>anos de pesquisa</span>
            <span className={styles.numberSublabel}>aplicada</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
