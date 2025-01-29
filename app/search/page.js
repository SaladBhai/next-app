'use client';

import { useState } from 'react';
import useSWR from 'swr';
import Image from 'next/image';

// Fetcher function for SWR
const fetchProducts = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const { data: products, error } = useSWR('https://fakestoreapi.com/products', fetchProducts); // Fetch all products initially

  // Filter products based on the search query
  const filteredProducts = query? products?.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    : products;

  // Handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Search Products</h1>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for products..."
          className="w-full p-3 border rounded-lg"
        />
      </div>

      {/* Loading and Error States */}
      {error && <p className="text-red-500">Failed to load products.</p>}
      {!products && <p className="text-gray-500">Loading...</p>}

      {/* Product Results */}
      {filteredProducts && filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <Image
                src={product.image || '/placeholder.png'}
                alt={product.title}
                width={150}
                height={150}
                className="mb-4 object-contain"
              />
              <h2 className="text-lg font-semibold text-center mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        query && <p>No products found for "{query}".</p>
      )}
    </div>
  );
}
