"use client";

import { useState } from 'react';

// Sample product data - now with image support
const initialProducts = [
  {
    id: 1,
    name: "Indonesian Moringa Leave Powder",
    description: "Premium grade Moringa Leaves from Nusa Tenggara Archipelago.",
    category: "Leaves",
    image: "/moringa.jpg", // Replace with actual image URL
  },
];

const Products = () => {
  const [products] = useState(initialProducts);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const filteredProducts = filter === 'All'
    ? products
    : products.filter(product => product.category === filter);

  return (
    <section id="products" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Products</h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10">
          We export a wide variety of premium Indonesian spices to meet your specific requirements.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-emerald-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-emerald-100 flex items-center justify-center">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="text-emerald-800 font-medium text-lg">Product Image</div>
                )}
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">{product.category}</span>
                <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors">
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-lg font-medium">Don&apos;t see what you&apos;re looking for?</p>
          <p className="text-gray-700 mb-6">We can source virtually any spice available in Indonesia.</p>
          <a href="#contact" className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors inline-block">
            Contact Us For Custom Orders
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
