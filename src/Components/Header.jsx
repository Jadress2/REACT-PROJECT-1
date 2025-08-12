import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header style={{ padding: "1rem", background: "#f5f5f5" }}>
    <nav>
      <ul style={{ display: "flex", gap: "5rem", listStyle: "none", margin: 0, padding: 0 }}>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;