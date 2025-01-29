// app/components/Navbar.js
'use client';

import { useSelector } from "react-redux";
import Link from "next/link";

export default function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div>
     <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
     <div className="max-w-7xl mx-auto flex justify-between items-center">
       <h1 className="text-2xl font-bold text-gray-900">TATA Trend </h1>
       <div className="space-x-6">
         <Link href="/" className="hover:text-gray-500">Home</Link>
         <Link href="/products" className="hover:text-gray-500">Products</Link>
         <Link href="/search" className="hover:text-gray-500">Search</Link>
         <Link href="/cart" className="hover:text-gray-500">Cart ({totalQuantity})</Link>
         <Link href="/orders" className="hover:text-gray-500">Order</Link>
       </div>
     </div>
   </nav>
   </div>
  );
}
