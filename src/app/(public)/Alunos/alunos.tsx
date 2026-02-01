import Image from "next/image";
import Footer from "@/app/components/Footer/footer";
import PublicHeader from "@/app/components/PublicHeader/publicHeader";
import { alunos, type AlunoResultado } from "./data";
import styles from "./alunos.module.css";

function AlunoCard({ aluno }: { aluno: AlunoResultado }) {
  const pesoVariacao = aluno.pesoDepois - aluno.pesoAntes;
  const pesoTexto =
    pesoVariacao <= 0
      ? `${Math.abs(pesoVariacao)} kg a menos`
      : `${pesoVariacao} kg a mais`;

  return (
    <article className={styles.card} aria-labelledby={`aluno-name-${aluno.id}`}>
      <div className={styles.cardImages}>
        <div className={styles.imgWrap}>
          <Image
            src={aluno.imgAntes}
            alt={`${aluno.nome} antes`}
            fill
            sizes="(max-width: 768px) 50vw, 200px"
          />
          <span className={styles.imgLabel}>Antes</span>
        </div>
        <div className={styles.imgWrap}>
          <Image
            src={aluno.imgDepois}
            alt={`${aluno.nome} depois`}
            fill
            sizes="(max-width: 768px) 50vw, 200px"
          />
          <span className={styles.imgLabel}>Depois</span>
        </div>
      </div>

      <div className={styles.cardBody}>
        <h2 id={`aluno-name-${aluno.id}`} className={styles.cardName}>
          {aluno.nome}
        </h2>

        <div className={styles.cardMetrics}>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Tempo</span>
            <span className={styles.metricValue}>{aluno.tempoProjeto}</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Peso antes</span>
            <span className={styles.metricValue}>{aluno.pesoAntes} kg</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Peso depois</span>
            <span className={styles.metricValue}>{aluno.pesoDepois} kg</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Variação</span>
            <span className={styles.metricValue}>{pesoTexto}</span>
          </div>
        </div>

        {aluno.objetivo && (
          <p className={styles.cardObjetivo}>{aluno.objetivo}</p>
        )}
        {aluno.depoimento && (
          <p className={styles.cardDepoimento}>"{aluno.depoimento}"</p>
        )}
      </div>
    </article>
  );
}

export default function Alunos() {
  return (
    <div className={styles.page}>
      <PublicHeader />

      <header className={styles.header}>
        <h1 className={styles.title}>
          Resultados dos <span className={styles.titleHighlight}>alunos</span>
        </h1>
        <p className={styles.subtitle}>
          Antes e depois, tempo de projeto, evolução de peso e conquistas!
        </p>
      </header>

      <main className={styles.main}>
        <hr className={styles.divider} aria-hidden />

        <p className={styles.intro}>
          Aqui você vê alguns dos resultados de quem treina com acompanhamento
          personalizado. Cada card mostra fotos antes e depois, duração do
          projeto, peso inicial e final, e o objetivo alcançado.
        </p>

        <section className={styles.grid} aria-label="Resultados dos alunos">
          {alunos.map((aluno) => (
            <AlunoCard key={aluno.id} aluno={aluno} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
