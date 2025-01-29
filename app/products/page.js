// app/products/page.js
'use client'; // Mark this component as a Client Component

import { useDispatch } from 'react-redux';
import { addToCart } from "@/app/feature/Cartslice";
import { useEffect, useState } from 'react';
import Image from "next/image";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data.slice(0, 8)); 
    }

    fetchProducts();
  }, []);

  return (
    // <div>
    //   {products.map((product) => (
    //     <div key={product.id}>
    //       <h3>{product.title}</h3>
    //       <button onClick={() => dispatch(addToCart(product))}>
    //         Add to Cart
    //       </button>
    //     </div>
    //   ))}
    // </div>
        <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <Image
                src={product.image || "/placeholder.png"}
                alt={product.title}
                width={150}
                height={150}
                className="mb-4 object-contain"
              />
              <h2 className="text-lg font-semibold text-center mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">${product.price}</p>
              <button onClick={() => dispatch(addToCart(product))} className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}