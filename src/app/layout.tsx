import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Script from 'next/script';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StellaLab.",
  description: "ここは、StellaLab.が制作したテストプログラムの実験場および、その解説を行うHPです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      {/* Google Analytics/GTM の外部スクリプトのロード */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-PQJFFHRTR5" 
          strategy="afterInteractive" 
        />

        {/* gtag の初期化と config の実行 */}
        {/* IDはトレーサビリティのためにつけます */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PQJFFHRTR5');
          `}
        </Script>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
