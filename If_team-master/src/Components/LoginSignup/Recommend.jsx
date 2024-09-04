import React from 'react';
import '../../css/recommend.css';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: '$100', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$150', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$200', imageUrl: 'https://via.placeholder.com/150' },
  // 필요한 만큼 더 추가
];

const ProductRecommendation = () => {
  return (
    <div className="container">
      {/* 상단 메뉴바 */}
      <nav className="navbar">
      <ul className="menu">
          <Link to="/" className='submenu'>Home</Link>
          <Link to="/Recommend" className='submenu'>추천제품</Link>
          <Link to="#services" className='submenu'>제품설명</Link>
          <Link to="#contact" className='submenu'>리뷰</Link>
     </ul>
      </nav>

      {/* 제품 목록 */}
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendation;
