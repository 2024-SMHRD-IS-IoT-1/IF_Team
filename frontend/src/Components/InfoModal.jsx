// src/components/ProductPage.js
import React, { useState } from 'react';
import '../css/infomodal.css';
import img from '../assets/product.png';
import img2 from '../assets/product2.png';
import img3 from '../assets/product3.png';
import img4 from '../assets/product4.png';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false); // 상세정보 열기/닫기 상태

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);
  const toggleDetails = () => setIsDetailsOpen(!isDetailsOpen); // 상세정보 토글 함수

  return (
    <div className="product-page">
      <header className="product-header">
        <div className="logo">Open</div>
        <div className="search-bar">
          <input type="text" placeholder="상품을 검색해보세요!" />
          <button className="search-button">&#x1F50D;</button>
        </div>
        <div className="header-icons">
          <button className="cart-button">장바구니</button>
          <button className="login-button">로그인</button>
        </div>
      </header>

      <div className="product-content">
        {/* Main Product Image */}
        
        <div>
             {/* Main Product Image */}
             <img src={img} alt="Product" className="product-image" />
               {/* 상세정보 열기/닫기 버튼을 이미지 바로 아래로 이동 */}
        
        <div className="details-toggle-container">
          <button onClick={toggleDetails} className="toggle-details-button">
            {isDetailsOpen ? '상세정보 닫기' : '상세정보 열기'}
          </button>
        </div>

        </div>
        
       

      
        <div className="product-details">
          <h2 className="product-category">Set the Perfect Mood</h2>
          <h1 className="product-title">플렌테리어 무드등</h1>
          <p className="product-price">32000원</p>
          <p className="shipping-info">택배배송 / 무료배송</p>

          <div className="quantity-selector">
            <button onClick={handleDecrease} className="quantity-button">-</button>
            <span className="quantity">{quantity}</span>
            <button onClick={handleIncrease} className="quantity-button">+</button>
          </div>

          <div className="total-price">
            <span>총 상품 금액</span>
            <span className="total-amount">{quantity}개 | {quantity * 32000}원</span>
          </div>

          <div className="action-buttons">
            <button className="buy-now-button">바로 구매</button>
            <button className="add-to-cart-button">장바구니</button>
          </div>
        </div>

        {/* 상세정보 내용 */}
        {isDetailsOpen && (
          <div className="details-content">
            <h3>상세정보</h3>
            <img src={img2} alt="Product" className="product-image" />
            <img src={img3} alt="Product" className="product-image" />
            <img src={img4} alt="Product" className="product-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
