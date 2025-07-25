"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  image?: string;
  ageRestricted?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

interface PosContextType {
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (sku: string) => void;
  setProducts: (items: Product[]) => void;
}

const PosContext = createContext<PosContextType | undefined>(undefined);

export function usePos() {
  const context = useContext(PosContext);
  if (!context) throw new Error("usePos must be used within PosProvider");
  return context;
}

export function PosProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.sku === product.sku);
      if (existing) {
        return prev.map((item) =>
          item.sku === product.sku
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (sku: string) => {
    setCart((prev) => prev.filter((item) => item.sku !== sku));
  };

  return (
    <PosContext.Provider
      value={{ products, cart, addToCart, removeFromCart, setProducts }}
    >
      {children}
    </PosContext.Provider>
  );
}
