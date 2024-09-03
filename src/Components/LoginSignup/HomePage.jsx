import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
import { Link } from 'react-router-dom';
import '../../css/homepage.css'; // 스타일을 적용하기 위한 CSS 파일을 import

function HomePage() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLoginClick = () => {
    navigate('/Login'); // LoginPage로 이동
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>스마트 식물 무드등</h1>
      </header>
      <nav className="navbar">
      <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#services">Services</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="button-container">
        <button className="btn login-btn" type="button" onClick={handleLoginClick}>로그인</button>
        <button className="btn signup-btn">회원가입</button>
      </div>
    </div>
  );
}

export default HomePage;
