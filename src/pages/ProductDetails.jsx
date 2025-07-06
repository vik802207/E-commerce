import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { fetchProductById } from '../services/api';
import { CartContext } from '../context/CartContext';
import { FaStar, FaRegHeart } from 'react-icons/fa';

const sizes = ['40.5', '41', '42', '43', '43.5', '44', '44.5', '45', '46'];
const colors = ['#f3f4f6', '#111827', '#d1d5db']; // white, black, gray

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState('41');
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  useEffect(() => {
    fetchProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <div className="text-center py-12 text-gray-500">Loading product...</div>;

  return (
    <div className="bg-[#f7f7f6] min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: Image Gallery */}
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[400px] object-contain"
            />
          </div>
          <div className="flex mt-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-16 h-16 rounded border bg-white flex items-center justify-center">
                <img src={product.image} alt="thumb" className="h-12 object-contain" />
              </div>
            ))}
            <div className="w-16 h-16 rounded border bg-white flex items-center justify-center text-sm text-gray-600">
              +4 more
            </div>
          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">{product.title}</h1>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar />
            <span className="text-gray-700 text-sm">
              {product.rating?.rate || 4.5} · {product.rating?.count || 42} reviews
            </span>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold mt-2">₹{Math.round(product.price * 80)}</p>

          {/* Color Options */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-1">Color: White</h4>
            <div className="flex gap-2">
              {colors.map((clr) => (
                <button
                  key={clr}
                  onClick={() => setSelectedColor(clr)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === clr ? 'border-black' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: clr }}
                />
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Size — EU Men</h4>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`text-sm py-2 border rounded text-center ${
                    selectedSize === size
                      ? 'bg-black text-white border-black'
                      : 'border-gray-300 text-gray-700'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="text-sm text-black-400 mt-1 cursor-pointer">Size guide</p>
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-2 mt-6">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-black hover:bg-gray-900 text-white py-3 rounded-md text-sm font-medium"
            >
              🛒 Add to cart
            </button>
            <button className="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center">
              <FaRegHeart className="text-gray-600" />
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-2">🚚 Free delivery on orders over ₹2,000</p>
        </div>
      </div>
    </div>
  );
}
