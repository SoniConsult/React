import  { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [id, setId] = useState<string>(""); 
  const navigate = useNavigate(); 

  const handleNavigation = () => {
    if (id.trim()) {
      navigate(`/get/${id}`); 
    } else {
      alert("Enter a valid ID");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Fake Store</h2>
    <nav className="mb-6 flex space-x-4">
      <button 
        onClick={() => navigate("/post")} 
        className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300"
      >
        Post Product
      </button>
      <button 
        onClick={() => navigate("/delete")} 
        className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300"
      >
        Delete Product
      </button>
    </nav>
  
    <div className="mt-6 space-y-4">
      <label htmlFor="productId" className="block mb-2 text-lg font-medium text-gray-700">
        Enter Product ID:
      </label>
      <input
        id="productId"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
        className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 p-3 rounded-md w-full"
      />
      <button
        onClick={handleNavigation}
        className="mt-4 w-full bg-gray-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300"
      >
        Fetch Product
      </button>
    </div>
  </div>
  
  );
}
