import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAMBIS - Professionnel du Nettoyage",
  description:
    "Entreprise de nettoyage professionnel à Douala. Solutions de nettoyage intérieur, extérieur, fin de chantier et entretien de bureaux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
