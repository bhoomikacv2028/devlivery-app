import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Razorpay() {

  const navigate = useNavigate();
  const location = useLocation();

  const amount = location.state?.amount || 0;

  const [upi, setUpi] = useState("");

  const handlePayment = () => {

    if (!upi) {
      alert("Please enter UPI ID");
      return;
    }

    alert(`₹${amount} Payment Successful ✅`);

    navigate("/success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-green-600 mb-2">
          Razorpay
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Secure UPI Payment
        </p>

        <div className="bg-green-100 text-green-700 text-center py-3 rounded-lg font-semibold mb-4">
          Total Amount: ₹{amount}
        </div>

        <input
          type="text"
          placeholder="Enter UPI ID"
          value={upi}
          onChange={(e) => setUpi(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={handlePayment}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
        >
          Pay ₹{amount}
        </button>

      </div>
    </div>
  );
}