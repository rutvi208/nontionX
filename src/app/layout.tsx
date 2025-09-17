import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "notionX | GEO",
  description: "Dominate AI Search Results Before Your Competitors Do.",
  keywords: "seo, optimization, ai, marketing, digital marketing",
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
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
