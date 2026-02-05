"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./topbar.module.css";

const MENU_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/treino", label: "Treino" },
  { href: "/dicas", label: "Dicas" },
  { href: "/alunos", label: "Alunos" },
  { href: "/contato", label: "Contato" },
] as const;

export type TopbarProps = {
  /** Texto do logo (padrão: "Gutemberg Personal") */
  logo?: string;
  /** URL do link do logo (padrão: "/") */
  logoHref?: string;
  /** Classe CSS adicional no container do header */
  className?: string;
};

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className={styles.hamburger} aria-hidden>
      <span className={open ? styles.hamburgerLineOpen1 : styles.hamburgerLine} />
      <span className={open ? styles.hamburgerLineOpen2 : styles.hamburgerLine} />
      <span className={open ? styles.hamburgerLineOpen3 : styles.hamburgerLine} />
    </span>
  );
}

export default function Topbar({
  logo = "Gutemberg",
  logoHref = "/",
  className = "",
}: TopbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header className={`${styles.topbar} ${className}`} role="banner">
      <div className={`${styles.inner} ${!logo ? styles.innerNoLogo : ""}`}>
        {logo ? (
          <Link href={logoHref} className={styles.logoLink} aria-label="Voltar ao início">
            {logo}
          </Link>
        ) : null}

        <button
          type="button"
          className={styles.menuTrigger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="topbar-drawer"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <HamburgerIcon open={menuOpen} />
        </button>

        <nav
          id="topbar-drawer"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Menu principal"
        >
          <ul className={styles.menu}>
            {MENU_ITEMS.map(({ href, label }, index) => (
              <li key={href} className={styles.menuItem}>
                {index > 0 && <span className={styles.separator} aria-hidden>|</span>}
                <Link
                  href={href}
                  className={pathname === href ? styles.menuLinkActive : styles.menuLink}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <button
          type="button"
          className={styles.backdrop}
          onClick={closeMenu}
          aria-label="Fechar menu"
        />
      )}
    </header>
  );
}
