import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RELAIS — Solutions numériques pour les entreprises burkinabè",
  description:
    "RELAIS conçoit des logiciels, plateformes et solutions numériques adaptés aux entreprises, établissements et organisations au Burkina Faso.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
