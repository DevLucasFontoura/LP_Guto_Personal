"use client";

import Image from "next/image";
import InstagramFeed from "@/app/components/InstagramFeed/InstagramFeed";
import Footer from "@/app/components/Footer/footer";
import PublicHeader from "@/app/components/PublicHeader/publicHeader";
import CountUp from "@/app/components/CountUp/countUp";
import styles from "./home.module.css";

/**
 * URLs dos 3 posts que aparecem no feed (pegue em: post → ⋮ → Incorporar).
 * Ex: "https://www.instagram.com/p/ABC123/"
 */
const INSTAGRAM_POST_URLS: string[] = [
  "https://www.instagram.com/p/Cd3qC3rJ29c/",
  "https://www.instagram.com/p/CpsQh5oOQ6e/",
];

const ABOUT_TEXT =
  "Sou personal trainer brasiliense, formado em Educação Física pela Uniplan, com mais de 8 anos de experiência ajudando pessoas a conquistarem saúde, autoestima e qualidade de vida. Apaixonado por promover bem-estar de forma acessível e prática, assina a coluna \"Corpo em Movimento\", no RaniNewsTV, onde compartilha dicas e reflexões do universo fitness.";

export default function Home() {
  return (
    <div className={styles.page}>
      <PublicHeader noSpacer />

      {/* Hero: duas imagens fixas — qual aparece é controlado só por CSS (media query) */}
      <section className={styles.hero}>
        <div className={styles.heroWallpaper}>
          <Image
            src="/img/home/img_home.jpg"
            alt="Gutemberg - Personal Trainer"
            fill
            priority
            className={styles.heroBgImageDesktop}
            sizes="100vw"
          />
          <Image
            src="/img/home/img_home_vertical.png"
            alt="Gutemberg - Personal Trainer"
            fill
            priority
            className={styles.heroBgImageMobile}
            sizes="100vw"
          />
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroTitleBlock}>
              <h1 className={styles.heroTitle}>
                O CORPO DOS
                <br />
                SEUS SONHOS COMEÇA HOJE!
              </h1>
            </div>
            <div className={styles.heroCtaBlock}>
              <a href="/planos" className={styles.heroCtaPrimary}>
                Veja nossos planos
                <span className={styles.heroCtaArrow} aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre: fundo creme, duas colunas (foto academia | texto) */}
      <section id="sessao-02" className={styles.about}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutImageWrap}>
            <Image
              src="/img/home/img_profile_guto.jpg"
              alt="Gutemberg - Personal Trainer"
              fill
              className={styles.aboutImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>
              Gutemberg Rodrigues
            </h2>
            <p className={styles.aboutParagraph}>{ABOUT_TEXT}</p>
            <div className={styles.aboutCtaBlock}>
              <a href="#sessao-03" className={styles.aboutCta}>
                Veja os índices do meu trabalho
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Números que Importam */}
      <section id="sessao-03" className={styles.numbers}>
        <h2 className={styles.numbersTitle}>
          Números que{" "}
          <span className={styles.numbersTitleHighlight}>Importam</span>
        </h2>
        <div className={styles.numbersGrid}>
          <div className={styles.numberItem}>
            <span className={styles.numberValue}>
              +<CountUp to={8} duration={1.5} />
            </span>
            <span className={styles.numberLabel}>Anos de experiência</span>
          </div>
          <div className={styles.numberItem}>
            <span className={styles.numberValue}>
              +<CountUp to={2000} separator="." duration={2} />
            </span>
            <span className={styles.numberLabel}>Alunos</span>
          </div>
          <div className={styles.numberItem}>
            <span className={styles.numberValue}>
              +<CountUp to={5000} separator="." duration={2} />
            </span>
            <span className={styles.numberLabel}>Aulas dadas</span>
          </div>
        </div>
        <p className={styles.numbersCta}>
          Venha fazer parte da nossa família e conquiste o seu corpo dos sonhos!
        </p>
      </section>

      {/* Redes sociais — Instagram */}
      <section className={styles.instagramSection}>
        <h2 className={styles.instagramTitle}>
          Me siga no{" "}
          <span className={styles.instagramTitleHighlight}>Instagram</span>
        </h2>
        <p className={styles.instagramSubtitle}>
          Acompanhe dicas, treinos e o dia a dia.
        </p>
        <InstagramFeed postUrls={INSTAGRAM_POST_URLS} />
      </section>

      <Footer />
    </div>
  );
}
