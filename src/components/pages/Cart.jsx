import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { X, Minus, Plus, ShoppingCart } from "lucide-react";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    cartItems,
    removeFromCart,
    updateQty,
    totalPrice,
    clearCart,
  } = useCart();

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full shadow-lg z-50"
      >
        <ShoppingCart size={24} />
      </button>

      {/* Cart Panel */}
      {isOpen && (
        <div className="fixed top-24 right-4 md:right-10 lg:right-16 w-[90%] sm:w-96 md:w-80 lg:w-96 bg-white shadow-2xl rounded-2xl p-5 z-50 border border-pink-200 animate-slide-in">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-pink-700 flex items-center gap-2">
              <ShoppingCart size={20} /> Cart
            </h2>
            <button
              className="text-xs text-red-500 hover:underline"
              onClick={clearCart}
            >
              Clear All
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-pink-500 text-sm text-center">Your cart is empty 🍰</p>
          ) : (
            <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b pb-3"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md shadow-sm"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-pink-800">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">{item.qty} × {item.price}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQty(item.name, Math.max(1, item.qty - 1))}
                        className="bg-pink-100 text-pink-600 rounded p-1 hover:bg-pink-200"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.name, item.qty + 1)}
                        className="bg-pink-100 text-pink-600 rounded p-1 hover:bg-pink-200"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="ml-auto text-red-400 hover:text-red-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="mt-5 border-t pt-4">
              <div className="flex justify-between items-center text-pink-800 font-semibold text-base">
                <span>Total:</span>
                <span>₹{totalPrice}</span>
              </div>
              <button
                className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-semibold shadow-md transition-all"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
