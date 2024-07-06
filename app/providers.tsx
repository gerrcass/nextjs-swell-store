"use client";

import { ThemeProvider } from "next-themes";

import CartProvider from "@/lib/context/CartProvider";
import ShoppingCart from "@/components/product/ShoppingCart";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>
        {children}
        <ShoppingCart />
      </CartProvider>
    </ThemeProvider>
  );
};

export default Providers;
