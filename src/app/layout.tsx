import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.sass";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const flow = localFont({
  src: [
    {
      path: "./fonts/Flow-Bold.woff",
      style: "normal",
      weight: "700",
    },
    {
      path: "./fonts/Flow.woff",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-flow",
});

const aeroport = localFont({
  src: [
    {
      path: "./fonts/Aeroport-Medium.woff",
      style: "normal",
      weight: "500",
    },
    {
      path: "./fonts/Aeroport.woff",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-aeroport",
});

export const metadata: Metadata = {
  title: "UItype",
  description:
    "Мы не верим в гороскопы, но верим в интерфей. Уникальная система определения личности, поможет сделать акцент на сильных сторонах, разобраться в себе и добиться результатов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="UItype" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        suppressHydrationWarning
        className={`${flow.variable} ${aeroport.variable} antialiased`}>
        <div className="main-container max-conatiner py-6 min-h-svh grid-rows-[auto_1fr_auto]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
