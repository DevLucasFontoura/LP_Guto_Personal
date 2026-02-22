import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gutemberg-personal.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gutemberg Rodrigues - Personal Trainer",
  description:
    "Personal trainer em Brasília. Treinos personalizados, avaliação física e acompanhamento para você alcançar seus objetivos.",
  // Ícone usado na aba e na prévia ao compartilhar (evita o logo da Vercel)
  icons: {
    icon: [{ url: "/img_profile_guto.jpg", type: "image/jpeg" }],
    apple: [{ url: "/img_profile_guto.jpg", type: "image/jpeg" }],
  },
  openGraph: {
    title: "Gutemberg Rodrigues - Personal Trainer",
    description:
      "Personal trainer em Brasília. Treinos personalizados, avaliação física e acompanhamento para você alcançar seus objetivos.",
    type: "website",
    images: [
      {
        url: "/img_home_vertical.png",
        width: 1080,
        height: 1350,
        alt: "Gutemberg Rodrigues - Personal Trainer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutemberg Rodrigues - Personal Trainer",
    description:
      "Personal trainer em Brasília. Treinos personalizados e acompanhamento.",
    images: ["/img_home_vertical.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        {/* Home (/) e demais páginas são renderizadas aqui como children */}
        {children}
      </body>
    </html>
  );
}
