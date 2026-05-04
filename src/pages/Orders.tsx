import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.log(err));
  }, []);

  return (
   <div className="p-6 bg-gray-50 min-h-screen">
  <h1 className="text-2xl font-bold mb-6 text-green-600">My Orders</h1>

  {orders.length === 0 ? (
    <p className="text-gray-500">No orders yet</p>
  ) : (
    <div className="space-y-4">
      {orders.map((order: any) => (
        <div
          key={order._id}
          className="bg-white rounded-xl shadow-sm border border-green-100 p-4"
        >
          {/* Order Header */}
          <div className="flex justify-between items-center mb-3">
            <p className="font-semibold text-green-700">
              ₹{order.totalAmount}
            </p>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              Delivered
            </span>
          </div>

          {/* Address */}
          <p className="text-sm text-gray-500 mb-3">
            {order.address}
          </p>

          {/* Items */}
          <div className="space-y-2">
            {order.items.map((item: any, index: number) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 p-2 rounded-md"
              >
                <img
                  src={item.image}
                  className="w-12 h-12 object-cover rounded"
                />

                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>

                <p className="text-sm font-semibold text-green-600">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )}
</div>
  );
}