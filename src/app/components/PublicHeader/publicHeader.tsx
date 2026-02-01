import Link from "next/link";
import Topbar from "@/app/components/Topbar/topbar";
import styles from "./publicHeader.module.css";

type PublicHeaderProps = {
  /** Classe extra (ex.: para posicionar por cima do hero na Home) */
  className?: string;
};

/**
 * Mesma top bar da Home: nome "Gutemberg" + menu (Topbar sem logo).
 * Usado em Dicas, Treino, Contato para manter o mesmo visual.
 */
export default function PublicHeader({ className }: PublicHeaderProps) {
  return (
    <header className={`${styles.header} ${className ?? ""}`.trim()}>
      <Link href="/" className={styles.name} aria-label="Gutemberg - Voltar ao início">
        Gutemberg
      </Link>
      <div className={styles.topbarWrap}>
        <Topbar logo="" />
      </div>
    </header>
  );
}
