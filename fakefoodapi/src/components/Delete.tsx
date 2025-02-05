import  { useState } from "react";
import axios from "axios";

export default function Delete() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    if (!id.trim()) {
      alert("Invalid Product ID.");
      return;
    }

    const url = `https://fakestoreapi.com/products/${id}`;

    try {
      const response = await axios.delete(url);
      console.log("Product Deleted:", response.data);
      setMessage(`Product ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto border rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Delete a Product</h2>

      <label htmlFor="productId" className="block font-medium">Enter Product ID:</label>
      <input
        type="number"
        id="productId"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Product id"
        className="border p-2 rounded-md w-full mt-2"
      />

      <button
        onClick={handleDelete}
        className="mt-4 w-full bg-gray-500 text-gray px-4 py-2 rounded-md hover:bg-gray-600"
      >
        Delete Product
      </button>

      {message && <p className="mt-4 text-center font-semibold">{message}</p>}
    </div>
  );
}
