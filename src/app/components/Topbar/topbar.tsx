"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./topbar.module.css";

const MENU_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/treino", label: "Treino" },
  { href: "/LinkTree", label: "Links" },
  { href: "/dicas", label: "Dicas" },
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
      <Link href={logoHref} className={styles.logoLink} aria-label="Voltar ao início">
        {logo}
      </Link>

      <nav className={styles.nav} aria-label="Menu principal">
        <ul className={styles.menu}>
          {MENU_ITEMS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={isActive ? styles.menuLinkActive : styles.menuLink}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
