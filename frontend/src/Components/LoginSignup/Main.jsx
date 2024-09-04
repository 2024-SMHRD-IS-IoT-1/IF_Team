// 웹 첫 시작 페이지


import React from 'react';
import { useNavigate, navigate } from 'react-router-dom'; // useNavigate 훅 임포트
import '../../css/main.css'
//아이콘
import { HiOutlineHome } from "react-icons/hi";
import { LuMoonStar } from "react-icons/lu";

const Main = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
  navigate('/homepage'); 
};


  return (
    <div className="main-container">
      <header className='main-header'>
          <h1 className='main-title'>Make your</h1> 
          <h1 className="main-title">Mood Light
            <LuMoonStar size={30}/>
          </h1>
          <hr id='line'></hr>
      </header>
      
      <button className='main-btnhome' type='button' onClick={handleHomeClick} >
        <h1>get start!</h1>
      </button>
    </div>
  )
};

export default Main;
