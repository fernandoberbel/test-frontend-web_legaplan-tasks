import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

import "./globals.scss";
import Header from "./components/header/header";

const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legaplan Test",
  description: "Teste Junior Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="shortcut icon"
          href="/public/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body className={interTight.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
