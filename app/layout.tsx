import type { Metadata } from 'next'
import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Tommy's Portfolio",
  description: "Tommy's Portfolio created with Next.js",
}

interface RootLayoutProps {
  children: ReactNode;
}


const poppins = Poppins({
  weight: ['400', '700'], 
  style: ['normal', 'italic'], 
  subsets: ['latin'], 
  display: 'swap', 
});

export default function Layout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}