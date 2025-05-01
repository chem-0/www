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
  title: "Chem0 | AI-Powered Chemistry Simulation Platform",
  description:
    "Chem0 is a next-gen AI-driven 3D virtual lab for chemistry education and research. Simulate chemical reactions, visualize molecular orbitals, analyze LCMS data, and optimize reaction conditions using AI trained on PDBe, AlphaFold DB, and more. Built for educators, students, and researchers to explore, experiment, and innovate safely and sustainably.",
  openGraph: {
    title: "Chem0 | AI-Powered Chemistry Simulation Platform",
    description:
      "Revolutionize chemistry learning and research with Chem0. Visualize molecular structures, predict reactions, and improve lab safety using cutting-edge AI. Built for scale, speed, and scientific accuracy.",
    url: "https://chem0.clientlab.org", // Replace with your actual URL
    siteName: "Chem0",
    type: "website",
    // images: [
    //   {
    //     url: "https://www.chem0.com/og-image.png", // Replace with actual image path
    //     width: 1200,
    //     height: 630,
    //     alt: "Chem0 - AI Chemistry Lab",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chem0 | AI-Powered Chemistry Simulation Platform",
    description:
      "Explore molecular possibilities. Chem0 offers real-time chemistry simulations, LCMS analytics, and AI-guided experimentation for modern chemical research and education.",
    // creator: "@chem0_lab", // Replace with your Twitter handle
    // images: ["https://www.chem0.com/twitter-card.png"], // Replace with actual image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
