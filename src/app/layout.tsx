import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shrisairaj Gajjam — Portfolio",
  description: "Portfolio of Shrisairaj Gajjam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}> 
        <Navbar />
        <main className="min-h-screen pt-16">{/* pt to offset fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
