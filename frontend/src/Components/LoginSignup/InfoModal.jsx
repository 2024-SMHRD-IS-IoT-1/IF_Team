import React from 'react';
import './InfoModal.css'; // Import CSS file for modal styling

const InfoModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {/* Replace src with your product image path */}
        <img src="product-image.png" alt="Product" className="product-image" />
        <p className="product-description">
          This is a smart mood light designed to enhance the atmosphere of any room. It features customizable lighting settings, smart integration, and an elegant design that fits perfectly with your interior decor.
        </p>
      </div>
    </div>
  );
};

export default InfoModal;

