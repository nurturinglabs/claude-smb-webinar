import type { Metadata } from "next";
import { Inter, Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansKannada = Noto_Sans_Kannada({
  subsets: ["kannada"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kannada",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI for Your Business — Claude Cowork",
  description: "90-minute Kannada webinar presentation on AI for Small & Medium Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body
        className={`${inter.variable} ${notoSansKannada.variable} antialiased font-body`}
      >
        {children}
      </body>
    </html>
  );
}
