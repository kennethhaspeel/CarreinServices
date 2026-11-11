import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
      className={`${montserrat.variable} h-full antialiased`}
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
