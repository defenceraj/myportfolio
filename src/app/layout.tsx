
'use client';
import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/portfolio/navbar';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// export const metadata: Metadata = {
//   title: "Raj's Digital Canvas",
//   description: 'A portfolio for Raj Kumar Kanaujiya, Aspiring Web Developer.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.className = savedTheme;
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Raj's Digital Canvas</title>
        <meta name="description" content="A portfolio for Raj Kumar Kanaujiya, Aspiring Web Developer." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", inter.variable)}>
        <div className="bg-background text-foreground min-h-screen">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <Navbar />
          <main className="container mx-auto px-4 md:px-6 py-12 md:py-20">
            {children}
          </main>
          <footer className="text-center py-8 border-t border-border mt-12">
            <p className="text-muted-foreground text-sm">
              Designed and Developed by Raj Kumar Kanaujiya
            </p>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
