import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.relaisbf.com"),
  title: {
    default: "RELAIS — Solutions numériques au Burkina Faso",
    template: "%s | RELAIS",
  },
  description:
    "RELAIS conçoit des logiciels, plateformes et solutions numériques adaptés aux entreprises, établissements et organisations au Burkina Faso.",
  applicationName: "RELAIS",
  creator: "RELAIS SARL",
  publisher: "RELAIS SARL",
  openGraph: {
    type: "website",
    locale: "fr_BF",
    siteName: "RELAIS",
    title: "RELAIS — Solutions numériques au Burkina Faso",
    description:
      "RELAIS conçoit des logiciels, plateformes et solutions numériques adaptés aux entreprises, établissements et organisations au Burkina Faso.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
