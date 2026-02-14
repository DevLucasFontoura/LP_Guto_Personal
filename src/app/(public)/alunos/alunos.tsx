import Image from "next/image";
import Footer from "@/app/components/Footer/footer";
import PublicHeader from "@/app/components/PublicHeader/publicHeader";
import { ALUNOS } from "@/lib/Constants/alunos";
import { alunos, type AlunoResultado } from "./data";
import styles from "./alunos.module.css";

function AlunoCard({ aluno }: { aluno: AlunoResultado }) {
  const pesoVariacao = aluno.pesoDepois - aluno.pesoAntes;
  const pesoTexto =
    pesoVariacao <= 0
      ? ALUNOS.VARIACAO_KG_A_MENOS(Math.abs(pesoVariacao))
      : ALUNOS.VARIACAO_KG_A_MAIS(pesoVariacao);

  return (
    <article className={styles.card} aria-labelledby={`aluno-name-${aluno.id}`}>
      <div className={styles.cardImages}>
        <div className={styles.imgWrap}>
          <Image
            src={aluno.imgAntes}
            alt={`${aluno.nome}${ALUNOS.ALT_SUFIXO_ANTES}`}
            fill
            sizes="(max-width: 768px) 50vw, 200px"
          />
          <span className={styles.imgLabel}>{ALUNOS.CARD_IMG_LABEL_ANTES}</span>
        </div>
        <div className={styles.imgWrap}>
          <Image
            src={aluno.imgDepois}
            alt={`${aluno.nome}${ALUNOS.ALT_SUFIXO_DEPOIS}`}
            fill
            sizes="(max-width: 768px) 50vw, 200px"
          />
          <span className={styles.imgLabel}>{ALUNOS.CARD_IMG_LABEL_DEPOIS}</span>
        </div>
      </div>

      <div className={styles.cardBody}>
        <h2 id={`aluno-name-${aluno.id}`} className={styles.cardName}>
          {aluno.nome}
        </h2>

        <div className={styles.cardRow}>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>{ALUNOS.METRIC_LABEL_TEMPO}</span>
            <span className={styles.metricValue}>{aluno.tempoProjeto}</span>
          </div>
          <span className={styles.cardRowDivider} aria-hidden />
          <div className={styles.metric}>
            <span className={styles.metricLabel}>{ALUNOS.METRIC_LABEL_VARIACAO}</span>
            <span className={styles.metricValue}>{pesoTexto}</span>
          </div>
        </div>

        <div className={styles.cardRow}>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>{ALUNOS.METRIC_LABEL_PESO_ANTES}</span>
            <span className={styles.metricValue}>{aluno.pesoAntes}{ALUNOS.UNIDADE_KG}</span>
          </div>
          <span className={styles.cardRowDivider} aria-hidden />
          <div className={styles.metric}>
            <span className={styles.metricLabel}>{ALUNOS.METRIC_LABEL_PESO_DEPOIS}</span>
            <span className={styles.metricValue}>{aluno.pesoDepois}{ALUNOS.UNIDADE_KG}</span>
          </div>
        </div>

        {aluno.objetivo && (
          <div className={styles.cardObjetivoBlock}>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>{ALUNOS.METRIC_LABEL_OBJETIVO}</span>
              <span className={styles.metricValue}>{aluno.objetivo}</span>
            </div>
          </div>
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
          {ALUNOS.TITULO_PREFIXO} <span className={styles.titleHighlight}>{ALUNOS.TITULO_DESTAQUE}</span>
        </h1>
        <p className={styles.subtitle}>{ALUNOS.SUBTITULO}</p>
      </header>

      <main className={styles.main}>
        <hr className={styles.divider} aria-hidden />

        <p className={styles.intro}>{ALUNOS.INTRO_PARAGRAFO}</p>

        <section className={styles.grid} aria-label={ALUNOS.SECAO_ARIA_LABEL}>
          {alunos.length === 0 ? (
            <article className={styles.cardEmBreve}>
              <h2 className={styles.cardEmBreveTitle}>
                {ALUNOS.EM_BREVE_TITULO}
              </h2>
              <p className={styles.cardEmBreveDescription}>
                {ALUNOS.EM_BREVE_DESCRICAO}
              </p>
            </article>
          ) : (
            alunos.map((aluno) => (
              <AlunoCard key={aluno.id} aluno={aluno} />
            ))
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
