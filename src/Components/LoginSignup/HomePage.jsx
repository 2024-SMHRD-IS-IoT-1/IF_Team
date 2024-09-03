import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/homepage.css'; // 스타일을 적용하기 위한 CSS 파일을 import

function HomePage() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>스마트 식물 무드등</h1>
      </header>
      <nav className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <div className="button-container">
        <button className="btn login-btn" type="submit">로그인</button>
        <button className="btn signup-btn">회원가입</button>
      </div>
    </div>
  );
}

export default HomePage;

