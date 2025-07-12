import { useState } from "react";
import { useProduct } from "../context/ProductContext";
import { Trash2 } from "lucide-react";

const AdminProducts = () => {
  const { products, setProducts } = useProduct();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!newProduct.name || !newProduct.price || !newProduct.image) return;

    const product = {
      id: Date.now(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      image: newProduct.image,
    };

    setProducts([...products, product]);
    setNewProduct({ name: "", price: "", image: "" });
  };

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  return (
    <div className="min-h-screen bg-pink-50 pt-28 px-4">
      <h2 className="text-3xl font-bold text-pink-700 mb-6">Manage Products</h2>

      {/* Add Product Form */}
      <form
        onSubmit={handleAddProduct}
        className="bg-white p-6 rounded-xl shadow mb-8 grid gap-4 sm:grid-cols-2"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleChange}
          className="border rounded-md p-2"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={newProduct.price}
          onChange={handleChange}
          className="border rounded-md p-2"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={handleChange}
          className="border rounded-md p-2 col-span-full"
          required
        />
        <button
          type="submit"
          className="col-span-full bg-pink-600 text-white font-semibold py-2 rounded hover:bg-pink-700 transition"
        >
          Add Product
        </button>
      </form>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-xl p-4 relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-semibold text-pink-800">
              {product.name}
            </h3>
            <p className="text-pink-600 font-medium mb-1">₹{product.price}</p>
            <button
              onClick={() => handleDelete(product.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-600"
              title="Delete"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
