import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
import '../../css/homepage.css'; // 스타일을 적용하기 위한 CSS 파일을 import
import '../../App.css'
import { Link } from 'react-router-dom';

//아이콘
import { HiOutlineHome } from "react-icons/hi";
import { FaUserAlt, FaCog } from "react-icons/fa"; // 프로필 및 설정 아이콘 추가
import { MdOutlineRateReview } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  
  const handleSignup = () => {
    navigate('/Signup');
  }
  const handleLoginClick = () => {
    navigate('/Login'); // LoginPage로 이동
  };
  const handleSiginupClick = ()=>{
    navigate('/Signup') // Signup page로 이동 
  };

  const handleHomeClick = () => {
    navigate('/'); // 홈페이지로 이동
  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
          <h1 id='title1'>SMART PLANTERIOR</h1>
          <h2 id='title2'>MOOD LIGHT</h2>
      </header>
      
      <div className='homepage-menu'>
        <div className='menu-icon' onClick={handleHomeClick}> {/* 클릭 이벤트 추가 */}
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
        <div className='menu-icon'>
          <FaCommentDots size={40}/>
        <div className='menu-text'>comments</div>
        </div>
      </div>

      {/* 로그인 버튼 */}
      <div className='homepage-buttion-container'>
        <button className='homepage-btn-login' type='button' onClick={handleLoginClick}>LOGIN</button>
        <div onClick={handleSignup} className='homepage-Loginlink'>더 많은 기능을 사용하고 싶다면 ? sign up</div>
      </div>
    </div>
  );
}

export default HomePage;
