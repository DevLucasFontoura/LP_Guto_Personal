import styles from "./footer.module.css";

export type FooterProps = {
  /** Texto do copyright (ex: "Todos os direitos reservados.") */
  text?: string;
  /** Ano exibido no copyright (padrão: ano atual) */
  year?: number;
  /** Empresa responsável pelo desenvolvimento (ex: "Ion Tech Group LTDA") */
  company?: string;
  /** Classe CSS adicional no container do footer */
  className?: string;
};

const currentYear = new Date().getFullYear();

export default function Footer({
  text = "Todos os direitos reservados.",
  year = currentYear,
  company = "Ion Tech Group LTDA",
  className = "",
}: FooterProps) {
  return (
    <footer className={`${styles.footer} ${className}`} role="contentinfo">
      <div className={styles.inner}>
        <p className={styles.text}>
          Copyright © {year} — {text}
        </p>
        <p className={styles.company}>Desenvolvido por {company}</p>
      </div>
    </footer>
  );
}
