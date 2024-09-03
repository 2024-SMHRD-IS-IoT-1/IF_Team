// src/components/ProductDetails.js
import React,{useState,useEffect} from 'react';

function ProductDetails() {
  return (
    <section className="product-details" id="details">
      <h2>Product Details</h2>
      <p>
        Our planter mood lighting products are designed to provide beautiful and functional lighting for your indoor plants. 
        Made with high-quality materials, they offer both aesthetics and durability. Choose from a variety of designs to fit your decor.
      </p>
      <ul>
        <li>Energy-efficient LED lights</li>
        <li>Available in various sizes and styles</li>
        <li>Adjustable brightness settings</li>
        <li>Eco-friendly materials</li>
      </ul>
    </section>
  );
}

export default ProductDetails;
