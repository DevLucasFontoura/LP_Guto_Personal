"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./topbar.module.css";

const overlayVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const menuListVariants = {
  open: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  closed: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.2 },
  },
};

const MENU_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/treino", label: "Treino" },
  { href: "/dicas", label: "Dicas" },
  { href: "/alunos", label: "Alunos" },
  { href: "/contato", label: "Contato" },
  { href: "/planos", label: "Planos" },
] as const;

export type TopbarProps = {
  /** Texto alternativo do logo (padrão: "Guto Personal Trainer") */
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
            <Image
              src="/img/logo_novo.png"
              alt={logo}
              className={styles.logoImage}
              width={160}
              height={40}
              priority
            />
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

        {/* Desktop: nav dentro do inner */}
        <nav
          id="topbar-drawer"
          className={`${styles.nav} ${styles.navDesktop} ${menuOpen ? styles.navOpen : ""}`}
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

      {/* Mobile: drawer em tela cheia (fora do inner para não ser limitado) */}
      {menuOpen && (
        <button
          type="button"
          className={styles.backdrop}
          onClick={closeMenu}
          aria-label="Fechar menu"
        />
      )}

      {/* Mobile: clone do menu em tela cheia com animação em cascata */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="topbar-drawer-fullscreen"
            className={`${styles.navFullscreen} ${styles.navFullscreenOpen}`}
            aria-label="Menu principal"
            aria-hidden={false}
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            transition={{ duration: 0.2 }}
          >
            {logo ? (
              <Link
                href={logoHref}
                className={styles.fullscreenLogoLink}
                aria-label="Voltar ao início"
                onClick={closeMenu}
              >
                <Image
                  src="/img/logo_novo.png"
                  alt={logo}
                  className={styles.fullscreenLogoImage}
                  width={120}
                  height={120}
                  priority
                />
              </Link>
            ) : null}
            <motion.ul
              className={styles.menu}
              variants={menuListVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {MENU_ITEMS.map(({ href, label }) => (
                <motion.li
                  key={href}
                  className={styles.menuItem}
                  variants={itemVariants}
                >
                  <Link
                    href={href}
                    className={pathname === href ? styles.menuLinkActive : styles.menuLink}
                    aria-current={pathname === href ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
