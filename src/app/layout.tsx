import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duelan's Portfolio",
  description: "My Roblox portfolio and a little about me as a person.",
  keywords: "Portfolio, Programming, Roblox, Dev, Game Dev, Scripter, Modeling, Building",
  creator: "Duelan",

  openGraph: {
    title: "Duelan's Portfolio",
    description: "My Roblox portfolio and a little about me as a person",
    url: "https://duelan.dev",
    images: [
      {
        url: "/images/Card-BG.png",
        width: 1280,
        height: 630,
        alt: "Portfolio Image",
      },
    ],
    type: "website",
  },

  // Twitter Card Tags
  twitter: {
    card: "summary_large_image",
    title: "Duelan's Portfolio",
    description: "My Roblox portfolio and a little about me as a person.",
    images: ["/images/Card-BG.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
      <Navbar />

      <main>{children}</main>

      <Footer />
      </body>
      
    </html>
  );
}