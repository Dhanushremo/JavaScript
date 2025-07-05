import React from "react";
import "./App.css"; // Keep this for shared styles

function Data({ title, price, description, image }) {
  return (
    <div className="card">
  <img src={image} alt={title} />
  <h1>{title}</h1>
  <p>{description}</p>
  <p>₹ {price}</p>

  <div className="btn-group">
    <button>Delete</button>
    <button>Update</button>
    <button>Order</button>
  </div>
</div>

  );
}

export default Data;
