import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turismo na Amazônia - Experiências Únicas de Aventura",
  description: "Descubra a magia da Amazônia com nossos passeios de aventura. Experiências únicas no coração da floresta amazônica com guias locais experientes.",
  keywords: "turismo amazônia, passeios aventura, manaus, anavilhanas, bike aquática, stand up paddle",
  authors: [{ name: "Turismo na Amazônia" }],
  openGraph: {
    title: "Turismo na Amazônia - Experiências Únicas de Aventura",
    description: "Descubra a magia da Amazônia com nossos passeios de aventura",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
