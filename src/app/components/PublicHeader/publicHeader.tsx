"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Topbar from "@/app/components/Topbar/topbar";
import styles from "./publicHeader.module.css";

const LOGO_SRC = "/img/logo_novo.png";
const LOGO_ALT = "Guto Personal";

const SCROLL_THRESHOLD = 60;
const HIDE_AFTER_SCROLL = 80;
const DESKTOP_BREAKPOINT = 769;

type PublicHeaderProps = {
  /** Classe extra (ex.: para posicionar por cima do hero na Home) */
  className?: string;
  /** Na Home: true para não renderizar o spacer — o hero começa no topo e a imagem de fundo preenche atrás do header */
  noSpacer?: boolean;
};

/**
 * Header fixo no topo: logo (Guto Personal) + menu (Topbar).
 * Em todas as páginas públicas: transparente no topo, gradiente escuro ao rolar.
 * No desktop: esconde ao rolar para baixo, reaparece ao rolar para cima.
 */
export default function PublicHeader({ className, noSpacer = false }: PublicHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > SCROLL_THRESHOLD);

      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        if (y <= HIDE_AFTER_SCROLL) {
          setHeaderHidden(false);
        } else if (y > lastScrollY.current) {
          setHeaderHidden(true);
        } else {
          setHeaderHidden(false);
        }
        lastScrollY.current = y;
      } else {
        setHeaderHidden(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ""} ${headerHidden ? styles.headerHidden : ""} ${className ?? ""}`.trim()}
        role="banner"
      >
        <Link href="/" className={styles.name} aria-label="Guto Personal - Voltar ao início">
          <img
            src={LOGO_SRC}
            alt={LOGO_ALT}
            className={styles.nameLogo}
            width={104}
            height={104}
            fetchPriority="high"
          />
        </Link>
        <div className={styles.topbarWrap}>
          <Topbar logo="" />
        </div>
      </header>
      {!noSpacer && <div className={styles.headerSpacer} aria-hidden />}
    </>
  );
}
