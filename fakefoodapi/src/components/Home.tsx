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
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Fake Store</h2>
      <nav className="mb-6 flex space-x-4">
        <button 
          onClick={() => navigate("/post")} 
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Post Product
        </button>
        <button 
          onClick={() => navigate("/delete")} 
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Delete Product
        </button>
      </nav>

      <div className="mt-4">
        <label htmlFor="productId" className="block mb-2 font-semibold">
          Enter Product ID:
        </label>
        <input
          id="productId"
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter ID"
          className="border p-2 rounded-md w-full"
        />
        <button
          onClick={handleNavigation}
          className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Fetch Product
        </button>
      </div>
    </div>
  );
}
