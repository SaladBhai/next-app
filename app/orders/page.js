'use client';

import { useSelector } from "react-redux";

export default function OrdersPage() {
  const orders = useSelector((state) => state.cart.order);
  const isOrderSet = useSelector((state) => state.cart.isCheckOut);

  return isOrderSet ? (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="overflow-x-auto w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Item Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                <td className="border border-gray-300 px-4 py-2">${item.price.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                <td className="border border-gray-300 px-4 py-2">${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold" colSpan="3">
                Total
              </td>
              <td className="border border-gray-300 px-4 py-2 font-bold">
                ${orders
                  .reduce((total, item) => total + item.price * item.quantity, 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-lg font-semibold text-gray-700">You did not check out.</p>
    </div>
  );
}
