import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    <html lang="ru">
      <body className={`${flow.variable} ${aeroport.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
