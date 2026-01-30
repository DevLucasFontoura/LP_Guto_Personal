import type { CardHomeVariant } from "@/app/components/CardHome/cardHome";

export type HomeLink = {
  id: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  highlight?: string;
  cta?: string;
  variant: CardHomeVariant;
  internal?: boolean;
};

export const links: HomeLink[] = [
  {
    id: "monster-day-1",
    href: "https://link.monsterday.com.br/md-bio-guto?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    imageSrc: "/img_modelo.webp",
    imageAlt: "Monster Day",
    variant: "monster" as CardHomeVariant,
  },
  {
    id: "medmaster-1",
    href: "https://lp.medmasterplan.com.br/medmaster-2026-lista?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    imageSrc: "/img_modelo.webp",
    imageAlt: "MedMaster Plan",
    variant: "medmaster" as CardHomeVariant,
  },
  {
    id: "blackfriday-1",
    href: "https://blackfriday.gutogalamba.com.br/black-bio?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    imageSrc: "/img_modelo.webp",
    imageAlt: "Black Friday",
    variant: "blackfriday" as CardHomeVariant,
  },
  {
    id: "fortes-1",
    href: "https://rmkt.gutogalamba.com.br/?utm_source=instagram&utm_medium=bio&utm_campaign=rmkt-reset&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    imageSrc: "/img_modelo.webp",
    imageAlt: "Plataforma Fortes, Sábios e Prósperos",
    variant: "fortes" as CardHomeVariant,
  },
  {
    id: "monster-day-2",
    href: "https://link.monsterday.com.br/md-bio-guto?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    imageSrc: "/img_modelo.webp",
    imageAlt: "Monster Day (exemplo 2)",
    variant: "monster" as CardHomeVariant,
  },
  {
    id: "medmaster-2",
    href: "https://lp.medmasterplan.com.br/medmaster-2026-lista?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    imageSrc: "/img_modelo.webp",
    imageAlt: "MedMaster Plan (exemplo 2)",
    variant: "medmaster" as CardHomeVariant,
  },
  {
    id: "blackfriday-2",
    href: "https://blackfriday.gutogalamba.com.br/black-bio?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    imageSrc: "/img_modelo.webp",
    imageAlt: "Black Friday (exemplo 2)",
    variant: "blackfriday" as CardHomeVariant,
  },
  {
    id: "fortes-2",
    href: "https://rmkt.gutogalamba.com.br/?utm_source=instagram&utm_medium=bio&utm_campaign=rmkt-reset&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    imageSrc: "/img_modelo.webp",
    imageAlt: "Plataforma Fortes (exemplo 2)",
    variant: "fortes" as CardHomeVariant,
  },
  {
    id: "monster-day-3",
    href: "https://link.monsterday.com.br/md-bio-guto?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    imageSrc: "/img_modelo.webp",
    imageAlt: "Monster Day (exemplo 3)",
    variant: "monster" as CardHomeVariant,
  },
  {
    id: "medmaster-3",
    href: "https://lp.medmasterplan.com.br/medmaster-2026-lista?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    imageSrc: "/img_modelo.webp",
    imageAlt: "MedMaster Plan (exemplo 3)",
    variant: "medmaster" as CardHomeVariant,
  },
  {
    id: "blackfriday-3",
    href: "https://blackfriday.gutogalamba.com.br/black-bio?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    imageSrc: "/img_modelo.webp",
    imageAlt: "Black Friday (exemplo 3)",
    variant: "blackfriday" as CardHomeVariant,
  },
  {
    id: "fortes-3",
    href: "https://rmkt.gutogalamba.com.br/?utm_source=instagram&utm_medium=bio&utm_campaign=rmkt-reset&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    imageSrc: "/img_modelo.webp",
    imageAlt: "Plataforma Fortes (exemplo 3)",
    variant: "fortes" as CardHomeVariant,
  },
];
