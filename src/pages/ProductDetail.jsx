import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found.</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ maxWidth: "400px" }} />
      <p>{product.description}</p>
      <p style={{ fontWeight: "bold" }}>${product.price.toFixed(2)}</p>
      <button style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
