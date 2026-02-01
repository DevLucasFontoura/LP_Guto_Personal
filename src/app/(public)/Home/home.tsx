import Image from "next/image";
import CountUp from "@/app/components/CountUp/countUp";
import InstagramFeed from "@/app/components/InstagramFeed/InstagramFeed";
import MotionWallpaper from "@/app/components/MotionWallpaper/motionWallpaper";
import RotatingText from "@/app/components/RotatingText/RotatingText";
import Footer from "@/app/components/Footer/footer";
import Topbar from "@/app/components/Topbar/topbar";
import styles from "./home.module.css";

/**
 * URLs dos 3 posts que aparecem no feed (pegue em: post → ⋮ → Incorporar).
 * Ex: "https://www.instagram.com/p/ABC123/"
 */
const INSTAGRAM_POST_URLS: string[] = [
  "https://www.instagram.com/p/Cd3qC3rJ29c/",
  "https://www.instagram.com/p/CpsQh5oOQ6e/",
  "https://www.instagram.com/p/DN_5twNDTi7/"
];

const rotatingTexts = [
  "seu treino!",
  "seu corpo!",
  "sua rotina!",
  "sua evolução!",
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero: wallpaper atrás de tudo + Topbar flutuando + texto */}
      <section className={styles.hero}>
        <div className={styles.heroWallpaper}>
          <MotionWallpaper
            color="#23319f"
            speed={14}
            scale={0.4}
            noiseIntensity={0.8}
            rotation={0}
          />
        </div>
        <div className={styles.heroTopbar}>
          <Topbar />
        </div>
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
              Mais conhecido como <span className={styles.aboutHighlight}>Gutemberg.</span>{" "}
              <span className={styles.aboutHighlight}></span>
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

      {/* Redes sociais — Instagram */}
      <section className={styles.instagramSection}>
        <h2 className={styles.instagramTitle}>
          Me siga no <span className={styles.instagramTitleHighlight}>Instagram</span>
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
