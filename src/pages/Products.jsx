import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Laptop",
    image: "https://i.ebayimg.com/images/g/FtwAAOSw~V9oRPEc/s-l1600.webp",
    description: "A high-performance laptop.",
    price: 1200,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Sneakers",
    image: "https://media.gq.com/photos/60d21930430ae505071c3806/16:9/w_1600,c_limit/SNEAKER_GUIDE_OPENER.jpg",
    description: "Comfortable running sneakers.",
    price: 80,
    category: "Footwear",
  },
  {
    id: 3,
    name: "Smartphone",
    image: "https://www.dignited.com/wp-content/uploads/2018/03/samsung-768x432.jpg",
    description: "Latest model smartphone.",
    price: 900,
    category: "Electronics",
  },
  {
    id: 4,
    name: "Backpack",
    image: "https://d1nymbkeomeoqg.cloudfront.net/photos/28/60/407515_12136_XL.jpg",
    description: "Durable and stylish backpack.",
    price: 45,
    category: "Accessories",
  },
];

const categories = ["All", ...Array.from(new Set(sampleProducts.map(p => p.category)))];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState(sampleProducts);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="mb-4">
        <label>Filter by category: </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              width: "200px",
              background: "#fafafa",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "200px", borderRadius: "4px" }}
            />
            <h3 style={{ margin: "0.5rem 0" }}>{product.name}</h3>
            <p style={{ fontSize: "0.9rem" }}>{product.description}</p>
            <p>
              <b>${product.price}</b>
            </p>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#555",
                background: "#eee",
                padding: "2px 6px",
                borderRadius: "4px",
              }}
            >
              {product.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;