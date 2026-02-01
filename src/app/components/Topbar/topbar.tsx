"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./topbar.module.css";

const MENU_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/Treino", label: "Treino" },
  { href: "/Dicas", label: "Dicas" },
  { href: "/Contato", label: "Contato" },
] as const;

export type TopbarProps = {
  /** Texto do logo (padrão: "Gutemberg Personal") */
  logo?: string;
  /** URL do link do logo (padrão: "/") */
  logoHref?: string;
  /** Classe CSS adicional no container do header */
  className?: string;
};

export default function Topbar({
  logo = "Gutemberg Personal",
  logoHref = "/",
  className = "",
}: TopbarProps) {
  const pathname = usePathname();

  return (
    <header className={`${styles.topbar} ${className}`} role="banner">
      <div className={styles.inner}>
        <Link href={logoHref} className={styles.logoLink} aria-label="Voltar ao início">
          {logo}
        </Link>

        <nav className={styles.nav} aria-label="Menu principal">
        <ul className={styles.menu}>
          {MENU_ITEMS.map(({ href, label }, index) => (
            <li key={href} className={styles.menuItem}>
              {index > 0 && <span className={styles.separator} aria-hidden>|</span>}
              <Link
                href={href}
                className={pathname === href ? styles.menuLinkActive : styles.menuLink}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
  );
}
