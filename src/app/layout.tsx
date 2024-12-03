import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/Navbar';
import { Inter } from 'next/font/google'
import Sidebar from "@/components/Sidebar";


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
        <Navbar />
        <div className='flex'>
          <div className='hidden md:block h-[100vh] w-[300px]'>
            <Sidebar />
          </div>
          <div className='p-5 w-full md:max-w-[1140px]'>{children}</div>
        </div>
      </body>
    </html>
  );
}
