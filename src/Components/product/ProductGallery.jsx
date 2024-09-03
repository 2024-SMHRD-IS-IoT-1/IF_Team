// src/components/ProductGallery.js
import React,{useState,useEffect} from 'react';

const products = [
  { id: 1, name: 'Elegant White Planter Light', image: 'product1.jpg' },
  { id: 2, name: 'Modern Bamboo Planter Light', image: 'product2.jpg' },
  { id: 3, name: 'Minimalistic Ceramic Planter Light', image: 'product3.jpg' },
];

function ProductGallery() {
  return (
    <section className="product-gallery" id="gallery">
      <h2>Our Products</h2>
      <div className="gallery">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGallery;
