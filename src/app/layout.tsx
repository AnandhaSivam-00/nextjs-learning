import "./globals.css";
import type { Metadata } from "next";
import { Montserrat_Alternates, Albert_Sans } from 'next/font/google';
import NavBar from "./components/NavBar";

const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const albert = Albert_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-albert',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "3D Printing Platform",
  description: "Discover and share 3D printing models",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${albert.variable}`}>
      <body>
        <header className="sticky top-0 z-50">
          <NavBar />
        </header>
          {children}
        <footer className="bottom-0">
          <div className="flex justify-center items-center p-5">
            <p className="text-xs text-gray-500">&copy; Copyright 2025 PrintForge</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 