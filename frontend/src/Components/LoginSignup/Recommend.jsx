import React from 'react';
import '../../css/recommend.css';
import { Link } from 'react-router-dom';


const products = [
  {
    id: 1,
    name: '백자갈',
    price: '13,600원',
    imageUrl: 'https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/6ab3/e728935d43e8e985c803bf150721797e62e0115f7c00dc61aff283e1ac8c.jpg', // 실제 이미지 URL로 대체
    link: 'https://www.coupang.com/vp/products/7866438931?itemId=21477819089&vendorItemId=88648702145&sourceType=srp_product_ads'
  },
  {
    id: 2,
    name: '흑자갈',
    price: '15,900원',
    imageUrl: 'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/6c02/c666d2da07a910772bb55ea5b76fd0dbe2cf6634fac76ce4ac9c28509659.jpg',
    link: 'https://www.coupang.com/vp/products/7728723373?itemId=20471567005&vendorItemId=88637158003&sourceType=srp_product_ads&clickEventId=3a9867c0-6b35-11ef-93c4-5bbede2c2bc2&korePlacement=15&koreSubPlacement=6&q=%EC%9E%90%EA%B0%88+1&itemsCount=36&searchId=6bcbf439f7b241fdb080a451d0443209&rank=5&isAddedCart='
  },
  {
    id: 3,
    name: '오색자갈',
    price: '7,900원',
    imageUrl: 'https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/6031/f25e2967078d449c0099481ce51f46bb16cb223225688b95b85a3fd80e92.jpg',
    link: 'https://www.coupang.com/vp/products/6538839832?itemId=14549896149&vendorItemId=86702020112&pickType=COU_PICK&q=%EC%9E%90%EA%B0%88+1&itemsCount=36&searchId=6bcbf439f7b241fdb080a451d0443209&rank=6&isAddedCart='
  },

  {
    id: 4,
    name: '산호색 자갈',
    price: '16,250원',
    imageUrl: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/12/09/17/3/a734ba0d-7cd3-4f75-bb52-dc39192021e3.jpg',
    link: 'https://www.coupang.com/vp/products/6232950244?itemId=12536426477&vendorItemId=79804848690&q=%EC%9E%90%EA%B0%88+1&itemsCount=36&searchId=6bcbf439f7b241fdb080a451d0443209&rank=10&isAddedCart='
  },

  {
    id: 5,
    name: '보석자갈',
    price: '9,700원',
    imageUrl: 'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/e697/5fd1ebf2c4ddec789010732a7942be51f394339c90e97b571277ad8e7d9d.jpg',
    link: 'https://www.coupang.com/vp/products/256380918?itemId=805348374&vendorItemId=5045980257&q=%EC%9E%90%EA%B0%88+1&itemsCount=36&searchId=6bcbf439f7b241fdb080a451d0443209&rank=2&isAddedCart='
  },

  {
    id: 6,
    name: '맥반석자갈',
    price: '13,400원',
    imageUrl: 'https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/fcdf/5e4c3c08de985e82a19a99692cb19394419bf12b9a2ce6883db209cd7935.jpg',
    link: 'https://www.coupang.com/vp/products/2157022126?itemId=3663692564&vendorItemId=71649111787&q=%EC%9E%90%EA%B0%88+1&itemsCount=36&searchId=6bcbf439f7b241fdb080a451d0443209&rank=23&isAddedCart='
  },

  {
    id: 7,
    name: '야광자갈',
    price: '2,500원',
    imageUrl: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/250f/6393f1071e5a51f74664536fbcd3c292a3da3d141cb5ec80140f78bc6b1b.jpg',
    link: 'https://www.coupang.com/vp/products/8168119758?itemId=23315916036&vendorItemId=90347740967&q=%EC%9E%90%EA%B0%88+1&itemsCount=36&searchId=6bcbf439f7b241fdb080a451d0443209&rank=28&isAddedCart='
  },

  {
    id: 8,
    name: '해양동물 피규어',
    price: '7,900원',
    imageUrl: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/5ea3/da73fecd2f963f94e3c7fa3b6c3eb12ebbd301db3b0e470e1729d87d2dbf.jpg',
    link: 'https://www.coupang.com/vp/products/7383038415?itemId=19071628870&vendorItemId=86194248807&q=%EC%88%98%EC%A1%B1%EA%B4%80+%EB%AF%B8%EB%8B%88%EC%96%B4%EC%B2%98&itemsCount=36&searchId=7c14653b962d4dc19c2b8a7a99e62978&rank=9&isAddedCart='
  },

  {
    id: 9,
    name: '야광 미니피규어',
    price: '5,900원',
    imageUrl: 'https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/7dba/5c883abfb094821f09a0873345995e21683e08f02241fc880b48a6ab5196.jpg',
    link: 'https://www.coupang.com/vp/products/8284342540?itemId=23886260531&vendorItemId=85104201240&q=%EC%88%98%EC%A1%B1%EA%B4%80+%EB%AF%B8%EB%8B%88%EC%96%B4%EC%B2%98&itemsCount=36&searchId=7c14653b962d4dc19c2b8a7a99e62978&rank=14&isAddedCart='
  },



];

const ProductRecommendation = () => {
  return (
    <div className="container">
      {/* 상단 메뉴바 */}
      <nav className="navbar">
        <ul className="menu">
          <Link to="/" className="submenu">Home</Link>
          <Link to="/Recommend" className="submenu">추천제품</Link>
          <Link to="/Product" className="submenu">제품 설명</Link>
          <Link to="#contact" className="submenu">리뷰</Link>
        </ul>
      </nav>

      {/* 제품 목록 */}
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <a href={product.link} target="_blank" rel="noopener noreferrer"> {/* 클릭 시 새 탭에서 쿠팡으로 이동 */}
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendation;
