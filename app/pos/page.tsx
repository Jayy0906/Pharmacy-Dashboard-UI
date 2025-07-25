"use client";

import { useState, useMemo } from "react";
import PosHeader from "@/components/Header/PosHeader";
import ProductSearch from "@/components/pos/ProductSearch";
import ProductsGrid from "@/components/pos/ProductsGrid";
import ShoppingCart from "@/components/pos/ShoppingCart";
import OrderSummary from "@/components/pos/OrderSummary";
import ConfirmOrderModal from "@/components/pos/ConfirmOrderModal";
import CardPaymentModal from "@/components/pos/CardPaymentModal";
import { CartItem, Product } from "./types";

export default function PosPage() {
  const [products] = useState<Product[]>([
    {
      id: "1",
      name: "Paracetamol 500mg",
      sku: "PARA-500",
      price: 25,
      description: "Fever reducer",
      stock: 100,
      ageRestricted: false,
    },
    {
      id: "2",
      name: "Ibuprofen 200mg",
      sku: "IBU-200",
      price: 30,
      description: "Pain reliever",
      stock: 80,
      ageRestricted: false,
    },
    {
      id: "3",
      name: "Cough Syrup 100ml",
      sku: "COUGH-100",
      price: 60,
      description: "Cold treatment",
      stock: 60,
      ageRestricted: false,
    },
    {
      id: "4",
      name: "Antibiotic Ointment",
      sku: "ABO-001",
      price: 45,
      description: "Topical antibiotic",
      stock: 50,
      ageRestricted: false,
    },
  ]);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "cash" | "upi" | "other"
  >("cash");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return products.filter((product) =>
      [
        product.name,
        product.sku,
        product.description,
        product.price.toString(),
      ].some((field) => field.toLowerCase().includes(query)),
    );
  }, [products, searchQuery]);

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );
  const tax = useMemo(() => subtotal * 0.07, [subtotal]);
  const total = useMemo(() => subtotal + tax, [subtotal, tax]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.sku === product.sku);
      if (existing) {
        return prev.map((item) =>
          item.sku === product.sku
            ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: (item.quantity + 1) * item.price,
              }
            : item,
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          sku: product.sku,
          price: product.price,
          quantity: 1,
          subtotal: product.price,
        },
      ];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
              subtotal: Math.max(1, item.quantity + delta) * item.price,
            }
          : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="mx-auto flex flex-col lg:flex-row gap-6 px-4 py-6 bg-gray-50 min-h-screen">
      {/* Left Side */}
      <main className="flex-1 bg-white rounded-xl p-6 shadow-sm">
        <PosHeader />

        <ProductSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <ProductsGrid products={filteredProducts} onAddToCart={addToCart} />

        <ShoppingCart
          cartItems={cartItems}
          setCartItems={setCartItems}
          onIncrease={(id) => updateQuantity(id, 1)}
          onDecrease={(id) => updateQuantity(id, -1)}
          onRemove={removeItem}
        />
      </main>

      {/* Right Side: Order Summary */}
      <div className="w-full lg:w-[320px] xl:w-[400px]">
        <OrderSummary
          cartItems={cartItems}
          onCheckoutComplete={() => setShowConfirmModal(true)}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          customerNotes={customerName}
          setCustomerNotes={setCustomerName}
        />
      </div>

      {/* Modals */}
      <ConfirmOrderModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={() => {
          setShowConfirmModal(false);
          setShowPaymentModal(true);
        }}
        orderItems={cartItems}
        paymentMethod={paymentMethod}
        onPaymentMethodChange={setPaymentMethod}
        customerName={customerName}
        onCustomerNameChange={setCustomerName}
      />

      {showPaymentModal && (
        <CardPaymentModal
          onClose={() => setShowPaymentModal(false)}
          cartItems={cartItems}
          subtotal={subtotal}
          tax={tax}
          total={total}
          customerName={customerName}
        />
      )}
    </div>
  );
}
