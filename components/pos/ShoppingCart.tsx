"use client";

import { CartItem } from "@/app/pos/types";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

export interface ShoppingCartProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function ShoppingCart({
  cartItems,
  setCartItems,
}: ShoppingCartProps) {
  const increaseQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: (item.quantity + 1) * item.price,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              subtotal: (item.quantity - 1) * item.price,
            }
          : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // const cartTotal = cartItems.reduce((total, item) => total + item.subtotal, 0);

  return (
    <section className="overflow-x-auto">
      <h2 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
        Shopping Cart ({cartItems.length}{" "}
        {cartItems.length === 1 ? "item" : "items"})
      </h2>

      <table className="min-w-[600px] w-full border-collapse rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr className="text-gray-500 text-[10px] font-semibold text-left">
            <th className="py-3 px-4 uppercase">Product</th>
            <th className="py-3 px-4 uppercase text-center">Quantity</th>
            <th className="py-3 px-4 uppercase text-right">Price</th>
            <th className="py-3 px-4 uppercase text-right">Subtotal</th>
            <th className="py-3 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <tr key={item.id} className="bg-white border-b border-gray-100">
                <td className="py-4 px-4 text-sm font-semibold text-gray-900 leading-tight">
                  {item.name}
                  <div className="text-xs font-normal text-gray-500 mt-1">
                    SKU: {item.sku}
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="inline-flex items-center border border-gray-200 rounded-md overflow-hidden select-none">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 text-gray-600 hover:text-gray-900 transition"
                      aria-label="Decrease quantity"
                    >
                      <FaMinus className="text-xs" />
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      readOnly
                      className="w-10 text-center text-gray-900 font-semibold text-sm border-x border-gray-200 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 text-gray-600 hover:text-gray-900 transition"
                      aria-label="Increase quantity"
                    >
                      <FaPlus className="text-xs" />
                    </button>
                  </div>
                </td>
                <td className="py-4 px-4 text-right font-semibold text-gray-900 text-sm">
                  ${item.price.toFixed(2)}
                </td>
                <td className="py-4 px-4 text-right font-bold text-gray-900 text-sm">
                  ${item.subtotal.toFixed(2)}
                </td>
                <td className="py-4 px-4 text-right">
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600 transition"
                    aria-label="Remove item"
                  >
                    <FaTrashAlt className="text-sm" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="py-8 text-center text-gray-500">
                Your cart is empty
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
