import React from "react";
import "./AmazonHome.css";

function AmazonHome() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>amazon</h2>

        <input
          type="text"
          placeholder="Search Amazon"
          className="search"
        />

        <div className="nav-links">
          <p>Hello, Sign In</p>
          <p>Returns & Orders</p>
          <p>Cart 🛒</p>
        </div>
      </nav>

      {/* Banner */}
      <div className="banner">
        <h1>Welcome to Amazon</h1>
      </div>

      {/* Products */}
      <div className="products">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Phone"
          />
          <h3>Smartphone</h3>
          <p>₹29,999</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
            alt="Headphone"
          />
          <h3>Headphones</h3>
          <p>₹2,999</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Watch"
          />
          <h3>Smart Watch</h3>
          <p>₹4,999</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default AmazonHome