import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaStar, FaHeart } from 'react-icons/fa';

export default function ProductCard({ product, view = 'grid' }) {
  const { addToCart } = useContext(CartContext);
  const isGrid = view === 'grid';

  return (
    <div
      className={`bg-white rounded-xl shadow-md p-4 relative transition hover:shadow-lg ${
        isGrid ? '' : 'flex gap-6 items-center'
      }`}
    >
      {/* Wishlist Icon */}
      <FaHeart className="absolute top-3 right-3 text-gray-300 hover:text-red-500 cursor-pointer" />

      {/* Product Clickable Area */}
      <Link
        to={`/product/${product.id}`}
        className={isGrid ? 'block text-center' : 'flex items-center gap-4'}
      >
        {/* Product Image */}
        <div className={isGrid ? 'h-36 flex justify-center' : 'w-32'}>
          <img
            src={product.image}
            alt={product.title}
            className="object-contain h-full"
          />
        </div>

        {/* Info */}
        <div className={isGrid ? '' : 'flex-1'}>
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
            {product.title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">{product.category}</p>
          <div className="flex items-center text-green-600 text-xs mt-2">
            <FaStar className="mr-1 text-yellow-500" />
            {product.rating?.rate || 4.5} ({product.rating?.count || 100})
          </div>
          <div className="font-bold text-sm text-gray-900 mt-1">
            ₹{Math.round(product.price * 80)}
          </div>
        </div>
      </Link>

      {/* Add to Cart */}
      <div className="mt-4">
        <button
          onClick={() => addToCart(product)}
          className="border border-gray-300 px-4 py-1.5 text-xs rounded-full hover:bg-gray-100 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
