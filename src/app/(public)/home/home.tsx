"use client";

import Image from "next/image";
import InstagramFeed from "@/app/components/InstagramFeed/InstagramFeed";
import Footer from "@/app/components/Footer/footer";
import PublicHeader from "@/app/components/PublicHeader/publicHeader";
import CountUp from "@/app/components/CountUp/countUp";
import styles from "./home.module.css";
import { HOME } from "@/lib/Constants/home";

export default function Home() {
  return (
    <div className={styles.page}>
      <PublicHeader noSpacer />

      {/* Hero: duas imagens fixas — qual aparece é controlado só por CSS (media query) */}
      <section className={styles.hero}>
        <div className={styles.heroWallpaper}>
          <Image
            src={HOME.HERO_IMAGE_DESKTOP_PATH}
            alt={HOME.HERO_IMAGE_ALT}
            fill
            priority
            className={styles.heroBgImageDesktop}
            sizes="100vw"
          />
          <Image
            src={HOME.HERO_IMAGE_MOBILE_PATH}
            alt={HOME.HERO_IMAGE_ALT}
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
                {HOME.HERO_TITLE_LINHA_1}
                <br />
                {HOME.HERO_TITLE_LINHA_2}
              </h1>
            </div>
            <div className={styles.heroCtaBlock}>
              <a href="/planos" className={styles.heroCtaPrimary}>
                {HOME.HERO_CTA_VER_PLANOS}
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
              src={HOME.ABOUT_IMAGE_PROFILE_PATH}
              alt={HOME.ABOUT_IMAGE_ALT}
              fill
              className={styles.aboutImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>{HOME.ABOUT_NOME_TITULO}</h2>
            <p className={styles.aboutParagraph}>{HOME.ABOUT_TEXTO_APRESENTACAO}</p>
            <div className={styles.aboutCtaBlock}>
              <a href="#sessao-03" className={styles.aboutCta}>{HOME.ABOUT_CTA_INDICES}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Números que Importam */}
      <section id="sessao-03" className={styles.numbers}>
        <h2 className={styles.numbersTitle}>
          {HOME.NUMBERS_TITULO_PREFIXO}{" "}
          <span className={styles.numbersTitleHighlight}>{HOME.NUMBERS_TITULO_DESTAQUE}</span>
        </h2>
        <div className={styles.numbersGrid}>
          <div className={styles.numberItem}>
            <span className={styles.numberValue}>
              +<CountUp to={8} duration={1.5} />
            </span>
            <span className={styles.numberLabel}>{HOME.NUMBERS_LABEL_ANOS_EXPERIENCIA}</span>
          </div>
          <div className={styles.numberItem}>
            <span className={styles.numberValue}>
              +<CountUp to={2000} separator="." duration={2} />
            </span>
            <span className={styles.numberLabel}>{HOME.NUMBERS_LABEL_ALUNOS}</span>
          </div>
          <div className={styles.numberItem}>
            <span className={styles.numberValue}>
              +<CountUp to={5000} separator="." duration={2} />
            </span>
            <span className={styles.numberLabel}>{HOME.NUMBERS_LABEL_AULAS_DADAS}</span>
          </div>
        </div>
        <p className={styles.numbersCta}>{HOME.NUMBERS_CTA_CONVITE}</p>
      </section>

      {/* Redes sociais — Instagram */}
      <section className={styles.instagramSection}>
        <h2 className={styles.instagramTitle}>
          {HOME.INSTAGRAM_TITULO_PREFIXO}{" "}
          <span className={styles.instagramTitleHighlight}>{HOME.INSTAGRAM_TITULO_DESTAQUE}</span>
        </h2>
        <p className={styles.instagramSubtitle}>{HOME.INSTAGRAM_SUBTITULO}</p>
        <InstagramFeed postUrls={HOME.INSTAGRAM_POST_URLS} />
      </section>

      <Footer />
    </div>
  );
}
