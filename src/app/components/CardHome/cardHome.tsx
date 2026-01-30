"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./cardHome.module.css";

export type CardHomeVariant =
  | "monster"
  | "medmaster"
  | "blackfriday"
  | "fortes"
  | "vsl"
  | "eduzz"
  | "typeform"
  | "whatsapp"
  | "internal"
  | "default";

export type CardHomeProps = {
  /** URL do link (usado com Link se internal, ou <a> se externo) */
  href: string;
  /** Caminho da imagem do card (ex: /img_modelo.webp) */
  imageSrc: string;
  /** Texto alternativo da imagem */
  imageAlt?: string;
  /** Título do card (exibido sobre a imagem) */
  title?: string;
  /** Subtítulo opcional (texto secundário) */
  subtitle?: string;
  /** Trecho do subtitle a ser destacado em outra cor */
  highlight?: string;
  /** Texto do botão de ação (ex: "LISTA DE ESPERA") */
  cta?: string;
  /** Estilo visual do card (usado quando não há imagem ou como overlay) */
  variant?: CardHomeVariant;
  /** Se true, usa Next.js Link (navegação interna); se false, abre em nova aba */
  internal?: boolean;
  /** Classe CSS adicional */
  className?: string;
};

const variantClassMap: Record<CardHomeVariant, string> = {
  monster: styles.variantMonster,
  medmaster: styles.variantMedmaster,
  blackfriday: styles.variantBlackfriday,
  fortes: styles.variantFortes,
  vsl: styles.variantVsl,
  eduzz: styles.variantEduzz,
  typeform: styles.variantTypeform,
  whatsapp: styles.variantWhatsapp,
  internal: styles.variantInternal,
  default: styles.variantDefault,
};

export default function CardHome({
  href,
  imageSrc,
  imageAlt = "",
  title,
  subtitle,
  highlight,
  cta,
  variant = "default",
  internal = false,
  className = "",
}: CardHomeProps) {
  const isMedMaster = variant === "medmaster";
  const isFortes = variant === "fortes";
  const hasOverlay = title ?? subtitle ?? cta;

  const content = (
    <motion.div
      className={`${styles.card} ${variantClassMap[variant]} ${isMedMaster ? styles.centered : ""} ${className}`}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={styles.imageWrap}>
        <Image
          src={imageSrc}
          alt={imageAlt || title || "Card"}
          fill
          className={styles.image}
          sizes="(max-width: 496px) 100vw, 496px"
        />
      </div>
      {hasOverlay && (
        <div
          className={`${styles.overlay} ${styles.content} ${isMedMaster ? styles.contentCentered : ""}`}
        >
          {title && (
            <span
              className={`${styles.title} ${isFortes ? styles.titleGold : ""}`}
            >
              {title}
            </span>
          )}
          {subtitle && (
            <span className={styles.subtitle}>
              {highlight
                ? (() => {
                    const parts = subtitle.split(highlight);
                    return (
                      <>
                        {parts[0]}
                        <span className={styles.highlight}>{highlight}</span>
                        {parts[1]}
                      </>
                    );
                  })()
                : subtitle}
            </span>
          )}
          {cta && <span className={styles.cta}>{cta}</span>}
        </div>
      )}
    </motion.div>
  );

  if (internal) {
    return (
      <Link href={href} className={styles.wrapper}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.wrapper}
    >
      {content}
    </a>
  );
}
