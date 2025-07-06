import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaShoppingBag, FaHeart } from 'react-icons/fa';

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="w-full bg-white px-6 py-4 shadow-sm flex items-center justify-between">
      {/* Left - Logo */}
      <Link to="/" className="text-2xl font-bold tracking-tight text-gray-800">
        Shopcart
      </Link>

      {/* Right - Nav buttons + icons */}
      <div className="flex items-center gap-6">
        {/* Home */}
        <Link to="/" className="text-sm text-gray-700 hover:text-yellow-500">
          Home
        </Link>

        {/* Shop */}
        <Link to="/shop" className="text-sm text-gray-700 hover:text-yellow-500">
          Shop
        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative text-gray-700 text-sm text-center">
          <FaShoppingBag className="text-xl text-yellow-500 mx-auto" />
          <span className="text-xs">Cart</span>
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {count}
            </span>
          )}
        </Link>

        {/* Favorites */}
        <div className="text-gray-700 text-sm text-center">
          <FaHeart className="text-xl mx-auto" />
          <span className="text-xs">Favorites</span>
        </div>

        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-9 h-9 rounded-full object-cover"
        />
      </div>
    </nav>
  );
}
