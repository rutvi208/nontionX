import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "AI SEO & Generative Engine Optimization for Brands - NotionX",
  description: "NotionX helps brands get discovered in AI search results. We specialize in AI SEO, GEO and improving visibility across AI-powered platforms.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KK4TC3HGNP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KK4TC3HGNP');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
