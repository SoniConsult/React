import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function Get() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get<Product>(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error", error));
  }, [id]);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-xl">
    {product ? (
      <div className="border rounded-lg shadow-md p-6 flex flex-col items-center space-y-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-48 h-48 object-contain rounded-md shadow-sm"
        />
        <h3 className="text-2xl font-semibold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-600 text-center">{product.description}</p>
        <p className="text-lg font-semibold text-gray-600">${product.price}</p>
      </div>
    ) : (
      <p className="text-center text-gray-600 font-medium">Product not found</p>
    )}
  </div>
  
  );
}
