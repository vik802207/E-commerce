import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * 80 * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center text-gray-700">
        <h2 className="text-3xl font-bold mb-4">Your cart is empty 🛒</h2>
        <Link
          to="/"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Your Shopping Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 w-full md:w-2/3">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain border rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  ₹{(item.price * 80).toFixed(0)} x {item.quantity}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)
                    }
                    className="w-8 h-8 bg-gray-200 rounded-full text-lg hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span className="px-3 text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 bg-gray-200 rounded-full text-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Remove Button */}
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 flex items-center gap-1 text-sm"
              >
                <FaTrash /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total + Checkout */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t pt-6">
        <div className="text-xl font-bold text-gray-800">
          Total: ₹{total.toFixed(0)}
        </div>
        <Link
          to="/checkout"
          className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md shadow transition"
        >
          Proceed to Checkout →
        </Link>
      </div>
    </div>
  );
}
