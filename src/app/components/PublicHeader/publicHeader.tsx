"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Topbar from "@/app/components/Topbar/topbar";
import styles from "./publicHeader.module.css";

const SCROLL_THRESHOLD = 60;

type PublicHeaderProps = {
  /** Classe extra (ex.: para posicionar por cima do hero na Home) */
  className?: string;
  /** Na Home: true para não renderizar o spacer — o hero começa no topo e a imagem de fundo preenche atrás do header */
  noSpacer?: boolean;
};

/**
 * Header fixo no topo: nome "Gutemberg" + menu (Topbar).
 * Em todas as páginas públicas: transparente no topo, gradiente escuro ao rolar.
 */
export default function PublicHeader({ className, noSpacer = false }: PublicHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ""} ${className ?? ""}`.trim()}
        role="banner"
      >
        <Link href="/" className={styles.name} aria-label="Gutemberg - Voltar ao início">
          Gutemberg
        </Link>
        <div className={styles.topbarWrap}>
          <Topbar logo="" />
        </div>
      </header>
      {!noSpacer && <div className={styles.headerSpacer} aria-hidden />}
    </>
  );
}
