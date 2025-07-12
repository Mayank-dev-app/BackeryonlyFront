import { useProduct } from "../context/ProductContext";
import { useEffect } from "react";

const Menu = () => {
  const { products, setProducts } = useProduct();

  // Add static products if none exist
  useEffect(() => {
    if (products.length === 0) {
      setProducts([
        {
          id: 1,
          name: "Chocolate Fudge Cake",
          price: 399,
          image: "https://images.unsplash.com/photo-1603079847787-7719d33962f4",
        },
        {
          id: 2,
          name: "Strawberry Delight",
          price: 299,
          image: "https://images.unsplash.com/photo-1622445270211-2bb3ee3867df",
        },
        {
          id: 3,
          name: "Blueberry Muffin",
          price: 149,
          image: "https://images.unsplash.com/photo-1601978776066-3cc4685e6c3d",
        },
      ]);
    }
  }, []);

  return (
    <div className="px-4 py-10 min-h-screen bg-pink-50">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-pink-800">{product.name}</h2>
            <p className="text-pink-600 font-bold mt-2">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

