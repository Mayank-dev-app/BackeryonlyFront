import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Chocolate Cake",
      price: 499,
      image: "/images/chocolate-cake.jpg",
    },
    {
      id: 2,
      name: "Strawberry Cupcake",
      price: 199,
      image: "/images/strawberry-cupcake.jpg",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
