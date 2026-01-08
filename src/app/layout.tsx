import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sitthidet SR | Full Stack Developer",
  description: "Full Stack Developer creating seamless web experiences. Specializing in React, Next.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Developer", "Portfolio"],
  authors: [{ name: "Sitthidet SR" }],
  openGraph: {
    title: "Sitthidet SR | Full Stack Developer",
    description: "Full Stack Developer creating seamless web experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitthidet SR | Full Stack Developer",
    description: "Full Stack Developer creating seamless web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
