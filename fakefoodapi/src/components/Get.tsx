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
    <div className="p-6 max-w-lg mx-auto">
      {product ? (
        <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-32 h-32 object-contain"
          />
          <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
          <p className="text-md font-semibold mt-2">${product.price}</p>
        </div>
      ) : (
        <p className="text-center">Product not found</p>
      )}
    </div>
  );
}
