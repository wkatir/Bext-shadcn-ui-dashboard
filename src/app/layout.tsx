import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/Navbar';
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "DashBoard - Technical Interview",
  description: "Admin DashBoard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
