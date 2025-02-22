import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface Product {
  title: string;
  price: string;
  description: string;
  category: string;
  image: string | ArrayBuffer | null;
}

export default function Post() {
  const [product, setProduct] = useState<Product>({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProduct((prev) => ({ ...prev, image: reader.result }));
        setPreview(reader.result as string);
      };
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const url = "https://fakestoreapi.com/products";

    try {
      const response = await axios.post(url, product);
      console.log("Post successfully", response.data);
      alert("Success");
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto border rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Post a New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2 rounded-md w-full"
            required
          />
          {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-md mt-2" />}
        </div>

        <button
          type="submit"
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md w-full hover:bg-gray-600"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
}
