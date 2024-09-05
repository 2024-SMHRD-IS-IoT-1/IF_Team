import React from 'react';


const ProductDescription = () => {
  return (
    <div className="product-description-container">
      <div className="product-image">
        <img src="https://via.placeholder.com/400" alt="Product" />
      </div>
      <div className="product-info">
        <h1>Product Name</h1>
        <p className="price">$199.99</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="buy-now">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDescription;
