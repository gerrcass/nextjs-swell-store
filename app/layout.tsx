import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

import { ClerkProvider } from "@clerk/nextjs";
import ThemeProvider from "@/app/provider";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo Store",
  description: "Store built with NextJS and Swell.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={clsx(inter.className, "h-screen flex flex-col")}>
          <ThemeProvider>
            <Header />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 lg:px-8">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
