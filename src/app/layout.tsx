import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Montserrat_Alternates, Albert_Sans } from 'next/font/google';

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
        <header>
          <nav className="flex flex-row justify-between items-center p-5">
            <div className="hidden md:block">
              <Image src='/printforge-logo 1.svg' alt="PrintForge Logo" width={150} height={150} />
            </div>
            <div className="block md:hidden">
              <Image src='/printforge-logo mobile.svg' alt="PrintForge Logo - desktop" width={50} height={50} />
            </div>
            <ul className="flex flex-row justify-between items-center gap-x-5">
              <li className="hover:text-gray-500">
                <Link href="/" prefetch={false}>Home</Link>
              </li>
              <li className="hover:text-gray-500">
                <Link href="/about" prefetch={false}>About</Link>
              </li>
            </ul>
          </nav>
        </header>
          {children}
        <footer>
          <div className="flex justify-center items-center p-5">
            <p className="text-xs text-gray-500">&copy; Copyright 2025 PrintForge</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 