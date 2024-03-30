import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./component/Navbar";
import Footer from "./pages/footer";
import { GoogleAnalytics } from '@next/third-parties/google'

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
    <html lang="en" className="light no-visible-scrollbar">
      <head>
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div>
            <Nav />
          </div>
          <div>{children}</div>
          <div>
            <Footer />
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-8VYJWHK923" />
    </html>
  );
}
