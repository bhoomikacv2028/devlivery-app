import { useNavigate } from "react-router-dom";
import { useState } from "react";
 import { useCart } from "../context/CartContext";
export default function Payment() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("upi");
  

const { items } = useCart();
  const totalAmount = items.reduce(
  (total, item) => total + item.product.price * item.quantity,
  0
);
  const placeOrder = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: items.map(item => ({
  name: item.product.name,
  price: item.product.price,
  quantity: item.quantity,
  image: item.product.image
})),
        totalAmount: totalAmount,
        address: "Bangalore"
      })
    });

    const data = await response.json();
    console.log(data);
    alert("Order saved in MongoDB ✅");

if (method === "cod") {
  navigate("/success");
} else {
  navigate("/razorpay", {
  state: { amount: totalAmount }
});
}
 } catch (error) {
    console.log(error);
    alert("Error saving order ❌");
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Payment Method
        </h2>

        {/* PAYMENT OPTIONS */}
        <div className="space-y-3 mb-6">

          <button
            onClick={() => setMethod("upi")}
            className={`w-full border p-3 rounded-md ${
              method === "upi" ? "bg-green-100 border-green-500" : ""
            }`}
          >
            📱 UPI Payment
          </button>

          <button
            onClick={() => setMethod("cod")}
            className={`w-full border p-3 rounded-md ${
              method === "cod" ? "bg-green-100 border-green-500" : ""
            }`}
          >
            💵 Cash on Delivery
          </button>

          <button
            onClick={() => setMethod("card")}
            className={`w-full border p-3 rounded-md ${
              method === "card" ? "bg-green-100 border-green-500" : ""
            }`}
          >
            💳 Card Payment
          </button>

        </div>

        {/* CONDITIONAL UI */}

        {method === "upi" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter UPI ID (e.g. name@upi)"
              className="w-full border p-3 rounded-md"
            />
          </div>
        )}

        {method === "card" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border p-3 rounded-md"
            />

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 border p-3 rounded-md"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 border p-3 rounded-md"
              />
            </div>
          </div>
        )}

        {method === "cod" && (
          <p className="text-gray-600 text-sm mb-4">
            Pay with cash when your order is delivered 🚚
          </p>
        )}

        {/* PAY BUTTON */}
        <button
          className="w-full bg-green-500 text-white py-3 rounded-md mt-6"
          onClick={placeOrder}
        >
          Place Order →
        </button>

      </div>

    </div>
  );
}