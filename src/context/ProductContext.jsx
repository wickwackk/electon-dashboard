import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const ProductContext = createContext();

export function useProducts() {
  return useContext(ProductContext);
}

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:2020/products")
      .then((res) => setProducts(res.data));
  }, [isChanged]);
  return (
    <ProductContext.Provider
      value={{
        products: products,
        setProducts: setProducts,
        isChanged: isChanged,
        setIsChanged: setIsChanged,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
