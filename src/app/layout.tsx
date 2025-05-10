import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "m_yuya's monologue",
  description: "version 2",
  openGraph: {
    title: "m_yuya's monologue",
    description: "m_yuya's monologue ver 2",
    url: "https://blogv2-next-three.vercel.app/",
    images: [
      {
        url: "https://blogv2-next-three.vercel.app/monologue.png",
        width: 120,
        height: 82,
        alt: "m_yuya's monologue",
      },
    ],
    siteName: "m_yuya's monologue",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
