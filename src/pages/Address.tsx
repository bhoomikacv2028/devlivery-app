import { useNavigate } from "react-router-dom";

export default function Address() {
  const navigate = useNavigate();

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      
      <h2 className="text-2xl font-bold mb-6 text-center">
        Enter Address
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Address"
          className="w-full border p-3 rounded-md"
        />

        <input
          type="text"
          placeholder="City"
          className="w-full border p-3 rounded-md"
        />

        <input
          type="text"
          placeholder="Pincode"
          className="w-full border p-3 rounded-md"
        />

        <button
          className="w-full bg-green-500 text-white py-3 rounded-md"
          onClick={() => navigate("/payment")}
        >
          Continue to Payment →
        </button>
      </div>

    </div>
  </div>
);
}