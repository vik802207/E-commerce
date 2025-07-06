import { useEffect, useState } from 'react';
import { fetchProducts, fetchCategories } from '../services/api';
import ProductCard from '../components/ProductCard';
import { FaTh, FaList } from 'react-icons/fa';

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ category: '', price: '' });
  const [sort, setSort] = useState('newest');
  const [view, setView] = useState('grid');
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const productsPerPage = 6;

  useEffect(() => {
    fetchProducts().then((res) => setAllProducts(res.data));
    fetchCategories().then((res) => setCategories(res.data));
  }, []);

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const applyFilters = () => {
    let filtered = [...allProducts];

    // Search filter
    if (debouncedSearch) {
      const lower = debouncedSearch.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(lower) ||
          p.category.toLowerCase().includes(lower)
      );
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    // Price filter
    if (filters.price === 'low') filtered = filtered.filter((p) => p.price * 80 < 1000);
    if (filters.price === 'mid') filtered = filtered.filter((p) => p.price * 80 >= 1000 && p.price * 80 <= 3000);
    if (filters.price === 'high') filtered = filtered.filter((p) => p.price * 80 > 3000);

    // Sort
    if (sort === 'priceLowHigh') filtered.sort((a, b) => a.price - b.price);
    if (sort === 'priceHighLow') filtered.sort((a, b) => b.price - a.price);
    if (sort === 'ratingHighLow') filtered.sort((a, b) => b.rating.rate - a.rating.rate);
    if (sort === 'newest') filtered.sort((a, b) => b.id - a.id);

    return filtered;
  };

  const filteredProducts = applyFilters();
  const visibleProducts = filteredProducts.slice(0, page * productsPerPage);

  return (
    <div className="p-4">
      {/* 🔍 Search Input */}
      <div className="max-w-7xl mx-auto mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      {/* Filter + Sort + View Toggle Bar */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
        {/* Category Filter */}
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="border px-4 py-2 rounded-md text-sm text-gray-700"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat[0].toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        {/* Price Filter */}
        <select
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          className="border px-4 py-2 rounded-md text-sm text-gray-700"
        >
          <option value="">All Prices</option>
          <option value="low">Under ₹1,000</option>
          <option value="mid">₹1,000 - ₹3,000</option>
          <option value="high">Above ₹3,000</option>
        </select>

        {/* Sort Dropdown */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-4 py-2 rounded-md text-sm text-gray-700"
        >
          <option value="newest">Newest</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="ratingHighLow">Rating: High to Low</option>
        </select>

        {/* View Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setView('grid')}
            className={`p-2 rounded ${view === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'} hover:bg-blue-600 hover:text-white transition`}
          >
            <FaTh />
          </button>
          <button
            onClick={() => setView('list')}
            className={`p-2 rounded ${view === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'} hover:bg-blue-600 hover:text-white transition`}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className={`${view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'flex flex-col gap-4'} gap-6`}>
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} view={view} />
          ))}
        </div>
      </div>

      {/* Load More */}
      {visibleProducts.length < filteredProducts.length && (
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
