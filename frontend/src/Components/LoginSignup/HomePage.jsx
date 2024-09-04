import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
import '../../css/homepage.css'; // 스타일을 적용하기 위한 CSS 파일을 import
import '../../App.css'
import { Link } from 'react-router-dom';

//아이콘
import { HiOutlineHome } from "react-icons/hi";
import { FaUserAlt, FaCog } from "react-icons/fa"; // 프로필 및 설정 아이콘 추가
import { MdOutlineRateReview } from "react-icons/md";


const HomePage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLoginClick = () => {
    navigate('/Login'); // LoginPage로 이동
  };
  const handleSiginupClick = ()=>{
    navigate('/Signup') // Signup page로 이동 
  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
          <h1 id='title1'>SMART PLANTERIOR</h1>
          <h2 id='title2'>MOOD LIGHT</h2>
      </header>
      
    <div className='homepage-menu'>
      <div className='menu-icon'>
        <HiOutlineHome size={40}/>
        <div className='menu-text'>Home</div>
      </div>
      <div className='menu-icon'>
        <MdOutlineRateReview size={40}/>
        <div className='menu-text'>Info</div>
      </div>
      <div className="menu-icon">
          <FaCog size={40} />
          <div className="menu-text">Settings</div>
        </div>
    </div>

    {/* 로그인 버튼 */}
    <div className='homepage-buttion-container'>
      <button className='homepage-btn-login' type='button' onClick={handleLoginClick}>LOGIN</button>
    </div>
  


      {/* <nav className="navbar">
        <ul className="menu">
          <Link to="/" className='submenu'>
           <HiOutlineHome size={30}/></Link>
          <Link to="/Recommend" className='submenu'>추천제품</Link>
          <Link to="/Product" className='submenu'>제품 설명</Link>
          <Link to="#contact" className='submenu'>Contact</Link>
        </ul>
      </nav>
      <div className="button-container">
        <button className="btn login-btn" type="button" onClick={handleLoginClick}>로그인</button>
        <button className="btn signup-btn" type="button" onClick={handleSiginupClick}>회원가입</button>
      </div> */}
    </div>
  );
}

export default HomePage;
