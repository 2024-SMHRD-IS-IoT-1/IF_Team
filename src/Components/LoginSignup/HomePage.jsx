import React from 'react';
<<<<<<< HEAD
=======
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
>>>>>>> d5e06b3ba3b6dd67191d4cc9d66b655015cdedf3
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
<<<<<<< HEAD
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <div className="button-container">
        <button className="btn login-btn" type="submit">로그인</button>
=======
      <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#services">Services</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="button-container">
        <button className="btn login-btn" type="button" onClick={handleLoginClick}>로그인</button>
>>>>>>> d5e06b3ba3b6dd67191d4cc9d66b655015cdedf3
        <button className="btn signup-btn">회원가입</button>
      </div>
    </div>
  );
}

export default HomePage;

