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
  metadataBase: new URL("https://carreinservices.be"),
  title: {
    default: "Carrein Services",
    template: "%s | Carrein Services",
  },
  description:
    "Professionele reiniging en onderhoud van meubels en interieurs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl-BE" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">

          <Header />
          <div className="AchtergrondDonker flex-1">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
