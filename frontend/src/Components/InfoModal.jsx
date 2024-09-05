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
        <img src="c:\Users\smhrd\Desktop\프로젝트에 사용될 이미지\product.png" alt="Product" className="product-image" />
        <p className="product-description">
        원목 LED 식물 무선 무드등 플랜테리어
        </p>
      </div>
    </div>
  );
};

export default InfoModal;

