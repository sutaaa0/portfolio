import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio dodisuta",
  description: "Jelajahi portofolio web development saya yang mencakup desain web kreatif, pengembangan responsif, dan integrasi API. Saya siap membawa visi digital Anda menjadi kenyataan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
      <link rel="shortcut icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
