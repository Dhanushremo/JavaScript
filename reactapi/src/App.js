import React, { useEffect, useState } from "react";
import Data from "./Data";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="card-container">
      {product.map((p) => (
        <Data key={p.id} {...p} />
      ))}
    </div>
  );
}

export default App;
