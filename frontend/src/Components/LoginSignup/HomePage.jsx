
import { navigate, useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
import '../../css/homepage.css'; // 스타일을 적용하기 위한 CSS 파일을 import
import '../../App.css'
import { Link } from 'react-router-dom';
//아이콘
import { HiOutlineHome } from "react-icons/hi";
import { FaUserAlt, FaCog } from "react-icons/fa"; // 프로필 및 설정 아이콘 추가
import { MdOutlineRateReview } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
  // 사용자 로그인 여부 및 사용자 ID 상태 관리

const HomePage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  
  const handleLoginClick = () => {
    navigate('/Login'); // LoginPage로 이동
  };
  const handleSiginupClick = ()=>{
    navigate('/Signup') // Signup page로 이동
  };

  const handleHomePageClick = ()=>{
    navigate('/') 
  };
  const handleInfoClick = ()=>{
    navigate('/InfoModal') 
  };
  const handleRecommendClick = ()=>{
    navigate('/Recommend') 
  };
  const handleSettingsClick = ()=>{
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/Setting'); // 로그인되어 있으면 설정 페이지로 이동
    } else {
      alert('로그인이 필요합니다.'); // 로그인 안 되어 있으면 메시지 표시
    }
  };
  const handleCommentsClick = ()=>{
    navigate('/FeedbackMain')  
  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
          <h1 id='title1'>SMART PLANTERIOR</h1>
          <h2 id='title2'>MOOD LIGHT</h2>
      </header>
      
    <div className='homepage-menu'>
      <div className='menu-icon' >
        <HiOutlineHome size={40} onClick={handleHomePageClick}/>
        <div className='menu-text' onClick={handleHomePageClick}>Home</div>
      </div>
      <div className='menu-icon'>
        <MdOutlineRateReview size={40} onClick={handleInfoClick}/>
        <div className='menu-text'onClick={handleInfoClick}>Info</div>
      </div>
      <div className='menu-icon'>
        <FaRegThumbsUp size={40} onClick={handleRecommendClick}/>
        <div className='menu-text'onClick={handleRecommendClick}>recommend</div>
      </div>
      <div className="menu-icon">
          <FaCog size={40} onClick={handleSettingsClick}/>
          <div className="menu-text" onClick={handleSettingsClick}>Settings</div>
        </div>
      <div className='menu-icon'>
        <FaCommentDots size={40} onClick={handleCommentsClick}/>
      <div className='menu-text'onClick={handleCommentsClick}>Review</div>
      </div>

    {/* 로그인 버튼 */}
    <div className='homepage-buttion-container'>
      <button className='homepage-btn-login' type='button' onClick={handleLoginClick}>LOGIN</button>
      <button onClick={()=>{
        localStorage.removeItem('token')
      }}>logout</button>
      <div onClick={handleSiginupClick} className='homepage-Loginlink'>더 많은 기능을 사용하고 싶다면 ? sign up</div>
    
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
    </div>
  );
}


export default HomePage;
