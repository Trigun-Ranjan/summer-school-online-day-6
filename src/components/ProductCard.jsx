import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        width: "250px",
        margin: "1rem",
      }}
    >
      <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <Link to={`/products/${product.id}`}>
        <button style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
