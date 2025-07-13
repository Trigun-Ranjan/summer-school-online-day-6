import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "1rem", color: "#fff", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/products" style={{ marginRight: "1rem", color: "#fff", textDecoration: "none" }}>
        Products
      </Link>
      <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
        Cart
      </Link>
    </nav>
  );
};

export default Navbar;
