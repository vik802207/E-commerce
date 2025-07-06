import React from "react";

const categories = [
  { title: "Furniture", color: "bg-green-100", image: "/1.jpg" },
  { title: "Hand Bag", color: "bg-yellow-100", image: "/4.jpg" },
  { title: "Books", color: "bg-red-100", image: "/8.jpg" },
  { title: "Tech", color: "bg-green-200", image: "/5.jpg" },
  { title: "Sneakers", color: "bg-pink-100", image: "/7.jpg" },
  { title: "Travel", color: "bg-orange-100", image: "/6.jpg" },
];

function Frontend() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow">
        <div className="text-xl font-bold text-green-600">Shopcart</div>
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li>Categories</li>
          <li>Deals</li>
          <li>What's New</li>
          <li>Delivery</li>
        </ul>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Search Product"
            className="border px-2 py-1 rounded-md"
          />
          <button>🔍</button>
          <button>👤</button>
          <button>🛒</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-50 px-10 py-16 text-left relative">
        <h1 className="text-4xl font-bold text-green-900 mb-4">
          Shopping And <br /> Department Store.
        </h1>
        <p className="text-gray-600 max-w-lg">
          Shopping is a bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded-full">
          Learn More
        </button>

        {/* Placeholder mock items display */}
        <div className="absolute right-10 bottom-0 hidden md:block">
        </div>
      </section>

      {/* Categories Section */}
      <section className="p-10">
        <h2 className="text-xl font-bold mb-6">Shop Our Top Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`${cat.color} p-4 rounded-lg text-center shadow-sm hover:shadow-lg transition`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-24 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold">{cat.title}</h3>
            </div>
          ))}
        </div>
      </section>
      {/* Best Deals Section */}
<section className="px-10 py-16 bg-white">
  <h2 className="text-xl font-bold mb-6">Todays Best Deals For You!</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
    {/* Product Card 1 */}
    <div className="border rounded-lg p-4 text-center shadow hover:shadow-md">
      <img src="/9.jpg" alt="HomePod mini" className="h-32 mx-auto" />
      <h3 className="font-semibold mt-2">HomePod mini</h3>
      <p className="text-sm text-gray-500">5 Colors Available</p>
      <p className="font-bold mt-1">$99.00</p>
      <button className="mt-2 px-4 py-1 border rounded hover:bg-gray-100">
        Add to Cart
      </button>
    </div>

    {/* Product Card 2 */}
    <div className="border rounded-lg p-4 text-center shadow hover:shadow-md">
      <img src="/11.jpg" alt="Instax Mini 9" className="h-32 mx-auto" />
      <h3 className="font-semibold mt-2">Instax Mini 9</h3>
      <p className="text-sm text-gray-500">Selfie mode, Macro mode</p>
      <p className="font-bold mt-1">$99.00</p>
      <button className="mt-2 px-4 py-1 border rounded hover:bg-gray-100">
        Add to Cart
      </button>
    </div>
    {/* Product Card 1 */}
    <div className="border rounded-lg p-4 text-center shadow hover:shadow-md">
      <img src="/9.jpg" alt="HomePod mini" className="h-32 mx-auto" />
      <h3 className="font-semibold mt-2">HomePod mini</h3>
      <p className="text-sm text-gray-500">5 Colors Available</p>
      <p className="font-bold mt-1">$99.00</p>
      <button className="mt-2 px-4 py-1 border rounded hover:bg-gray-100">
        Add to Cart
      </button>
    </div>


    {/* Product Card 3 */}
    <div className="border rounded-lg p-4 text-center shadow hover:shadow-md">
      <img src="/10.jpg" alt="Base Camp Duffel M" className="h-32 mx-auto" />
      <h3 className="font-semibold mt-2">Base Camp Duffel M</h3>
      <p className="text-sm text-gray-500">Summit Gold - TNF Black</p>
      <p className="font-bold mt-1">$159.00</p>
      <button className="mt-2 px-4 py-1 border rounded hover:bg-gray-100">
        Add to Cart
      </button>
    </div>

    {/* Product Card 4 */}
    <div className="border rounded-lg p-4 text-center shadow hover:shadow-md">
      <img src="/12.jpg" alt="Tote Medium" className="h-32 mx-auto" />
      <h3 className="font-semibold mt-2">Tote Medium</h3>
      <p className="text-sm text-gray-500">Canvas, full grain leather</p>
      <p className="font-bold mt-1">$1259.00</p>
      <button className="mt-2 px-4 py-1 border rounded hover:bg-gray-100">
        Add to Cart
      </button>
    </div>
  </div>
</section>
{/* Choose By Brand Section */}
<section className="px-10 py-12">
  <h2 className="text-xl font-bold mb-6">Choose By Brand</h2>
  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
    {[
      { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Staples_2019.svg/2560px-Staples_2019.svg.png", name: "Staples" },
      { logo: "https://cdn.worldvectorlogo.com/logos/sprout-social.svg", name: "Sprouts" },
      { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Grocery_Outlet_logo.svg/1280px-Grocery_Outlet_logo.svg.png", name: "Grocery outlet" },
      { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCESuNFLwTW1ZC_9OQ5jM9m8mWHRtmdRKWjA&s", name: "Mollie stones" },
      { logo: "https://outdoorindustryjobs.com/EmployerImages/Sports_Basement_Logo.png", name: "Sports Basement" },
      { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaogrFL943UJ4dVMi3LYm68h0pX5Afrk1RNQ&s", name: "Container Store" },
      { logo: "https://www.vhv.rs/dpng/d/407-4075173_target-logo-png-transparent-svg-vector-target-png.png", name: "Target" },
      { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhNQwZYhTgUG2rQfN7dlVHGSi8qGXyYVssw&s", name: "Bevmo!" },
    ].map((brand, idx) => (
      <div key={idx} className="bg-white p-4 rounded-lg shadow text-center">
        <img src={brand.logo} alt={brand.name} className="h-10 mx-auto mb-2" />
        <p className="font-semibold">{brand.name}</p>
        <p className="text-xs text-gray-500">Delivery within 24 hours</p>
      </div>
    ))}
  </div>
</section>

{/* Get Up To 70% Off Cards */}
<section className="px-10 py-12">
  <h2 className="text-xl font-bold mb-6">Get Up To 70% Off</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {[
      {
        save: "$100",
        desc: "Explore Our Furniture & Home Furnishing Range",
        image: "/13.jpg",
        bg: "bg-yellow-100",
      },
      {
        save: "$29",
        desc: "Enjoy Discount all types of Books & Gadgets item",
        image: "/14.jpg",
        bg: "bg-red-100",
      },
      {
        save: "$67",
        desc: "Explore Our all types Dresses for Men",
        image: "/17.jpg",
        bg: "bg-orange-100",
      },
      {
        save: "$59",
        desc: "Enjoy Discount all types of Educational accessories",
        image: "/18.jpg",
        bg: "bg-green-100",
      },
    ].map((offer, i) => (
      <div key={i} className={`rounded-lg p-4 ${offer.bg}`}>
        <p className="text-sm font-medium text-gray-600">Save</p>
        <h3 className="text-2xl font-bold">{offer.save}</h3>
        <p className="text-sm mt-2 mb-4">{offer.desc}</p>
        <img src={offer.image} alt="offer" className="w-full rounded-md" />
      </div>
    ))}
  </div>
</section>

{/* Get 5% Cashback Section */}
<section className="px-10 py-12 bg-orange-50 flex items-center justify-between flex-wrap gap-6">
  <div>
    <h2 className="text-2xl font-bold mb-2">Get 5% Cash Back</h2>
    <p className="text-gray-700">on Shopcart.com</p>
    <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-full">
      Learn More
    </button>
  </div>
  <img src="/20.png" alt="cashback" className="h-64" />
</section>

{/* Footer Section */}
<footer className="bg-white px-10 py-12 border-t text-sm text-gray-700">
  <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
    <div>
      <h3 className="font-bold text-green-700 text-lg">Shopcart</h3>
      <p className="mt-2 text-xs text-gray-500">
        Anet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </p>
      <div className="flex gap-2 mt-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MUMXz1G7LSmOmsUgtpSVrB_aW4R79Lxv3g&s" alt="visa" className="h-5" />
        <img src="https://vikwp.com/images/plugins/stripe.png" alt="stripe" className="h-5" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt="paypal" className="h-5" />
        <img src="https://download.logo.wine/logo/Apple_Pay/Apple_Pay-Logo.wine.png" alt="apple" className="h-5" />
      </div>
    </div>
    <div>
      <h4 className="font-semibold mb-2">Department</h4>
      <ul className="space-y-1">
        <li>Fashion</li>
        <li>Books</li>
        <li>Education</li>
        <li>Gadgets</li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-2">About us</h4>
      <ul className="space-y-1">
        <li>About Shopcart</li>
        <li>Careers</li>
        <li>News & Blog</li>
        <li>Help</li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-2">Services</h4>
      <ul className="space-y-1">
        <li>Gift Cards</li>
        <li>Order Pickup</li>
        <li>Mobile App</li>
        <li>Shipping</li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-2">Help</h4>
      <ul className="space-y-1">
        <li>Contact</li>
        <li>Returns</li>
        <li>Track Orders</li>
        <li>FAQ</li>
      </ul>
    </div>
  </div>
  <div className="mt-10 text-center text-xs text-gray-500">
    All rights reserved © Musemind 2022 · Terms of Use · Privacy Policy
  </div>
</footer>


    </div>
  );
}

export default Frontend;
