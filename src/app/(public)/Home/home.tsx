import Image from "next/image";
import Link from "next/link";
import CountUp from "@/app/components/CountUp/countUp";
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
            <Image
              src="/img_profile_guto.jpg"
              alt="Gutemberg - Personal Trainer"
              fill
              className={styles.aboutImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>
              Eu sou o <span className={styles.aboutHighlight}>PERSONAL</span>{" "}
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


      {/* Números que Importam */}
      <section className={styles.numbers}>
        <h2 className={styles.numbersTitle}>
          Números que <span className={styles.numbersTitleHighlight}>Importam</span>
        </h2>
        <div className={styles.numbersGrid}>
          <div className={styles.numberItem}>
            <span className={styles.numberValue}>
              +
              <CountUp
                to={8}
                duration={3.5}
                delay={0}
                className={styles.countUpNumber}
              />
            </span>
            <span className={styles.numberLabel}>Anos de experiência</span>
          </div>
          <div className={styles.numberItem}>
            <span className={styles.numberValue}>
              + 
              <CountUp
                to={2000}
                duration={3.5}
                delay={0.2}
                separator="."
                className={styles.countUpNumber}
              />
            </span>
            <span className={styles.numberLabel}>Alunos</span>
          </div>
          <div className={styles.numberItem}>
            <span className={styles.numberValue}>
              +
              <CountUp
                to={5000}
                duration={3.5}
                delay={0.4}
                separator="."
                className={styles.countUpNumber}
              />
            </span>
            <span className={styles.numberLabel}>Aulas dadas</span>
          </div>
        </div>
        <p className={styles.numbersCta}>
          Quer fazer parte? Confira os treinos disponíveis abaixo.
        </p>
      </section>

      {/* Treinos e Dicas */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          <span className={styles.ctaTitleHighlight}>Treinos</span> disponíveis
        </h2>
        <div className={styles.ctaLinks}>
          <Link href="/LinkTree" className={styles.ctaLink}>
            Ver treinos e links
          </Link>
          <Link href="/dicas" className={styles.ctaLinkSecondary}>
            Coluna: Corpo em movimento
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
