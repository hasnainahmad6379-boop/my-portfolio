import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { Header, Footer } from "@/components/site";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Hasnain Ahmad | Full-Stack Web Developer",
  description:
    "Explore the projects, skills and development journey of Hasnain Ahmad.",
  openGraph: {
    title: "Hasnain Ahmad | Full-Stack Web Developer",
    description: "Selected work and skills of Hasnain Ahmad.",
    type: "website",
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <main className="site-shell pb-5">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
