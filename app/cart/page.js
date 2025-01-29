// app/cart/page.js
'use client';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, checkoutCart,checkoutFromCart } from '@/app/feature/Cartslice';


export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Cart ({totalQuantity} items)</h1>

      {cart.length > 0 ? (
        <div>
          {/* Cart Items List */}
          <ul className="mb-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="border-b pb-4 mb-4 flex items-center justify-between"
              >
                <div className="flex-grow">
                  <p className="text-lg font-semibold truncate max-w-[200px]">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">${item.price} × {item.quantity}</p>
                </div>

                {/* Button Group */}
                <div className="flex gap-2">
                  <button
                    onClick={() => dispatch(checkoutFromCart(item.id))}
                    className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Order
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Clear Cart and Check-Out Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Clear Cart
            </button>
            <button
              onClick={() => dispatch(checkoutCart())}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Check-Out
            </button>
          </div>
        </div>
      ) : (
      
        <div className="flex justify-center items-center min-h-screen">
      <p className="text-lg font-semibold text-gray-700">Your cart is empty.</p>
    </div>
      )}
    </div>
  );
}
