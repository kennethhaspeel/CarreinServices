import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carrein Services",
  description: "als het proper moet zijn",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl-BE"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
          <Header />
          <div className="AchtergrondDonker">
            {children}
          </div>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}
