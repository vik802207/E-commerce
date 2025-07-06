export default function FilterSortBar({ filters, setFilters, sort, setSort, view, setView, categories }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 px-4">
      
      {/* Category Filter */}
      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        className="p-2 border rounded"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Price Filter */}
      <select
        value={filters.price}
        onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        className="p-2 border rounded"
      >
        <option value="">All Prices</option>
        <option value="low">Under ₹1000</option>
        <option value="mid">₹1000 - ₹3000</option>
        <option value="high">Above ₹3000</option>
      </select>

      {/* Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="newest">Newest</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="ratingHighLow">Rating: High to Low</option>
      </select>

      {/* View Toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setView('grid')}
          className={`px-3 py-1 rounded ${view === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Grid
        </button>
        <button
          onClick={() => setView('list')}
          className={`px-3 py-1 rounded ${view === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          List
        </button>
      </div>
    </div>
  );
}
