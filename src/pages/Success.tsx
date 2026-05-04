import { useNavigate } from "react-router-dom";
export default function Success() {
  const navigate=useNavigate();
  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
      
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        🎉 Order Successful!
      </h2>

      <p className="text-gray-600 mb-6">
        Your order has been placed successfully.
        <br />
        It will be delivered soon 🚀
      </p>

      <button
        className="w-full bg-green-500 text-white py-3 rounded-md"
        onClick={() => navigate("/")}>
        Back to Home
      </button>

    </div>
  </div>
);
}