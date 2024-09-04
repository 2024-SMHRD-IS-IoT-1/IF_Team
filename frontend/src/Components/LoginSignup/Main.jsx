import React from 'react';
import { useNavigate, navigate } from 'react-router-dom'; // useNavigate 훅 임포트
import '../../css/main.css'


import { HiOutlineHome } from "react-icons/hi";

const Main = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
  navigate('/Hompage'); 
  
};


  return (
    <div className="container">
      <header className='header'>
          <h1>Make your</h1> 
          <h1>Mood Light</h1>
          <hr></hr>
      </header>
      
      <button className='btn-home' type='button' onClick={handleHomeClick} >
        <HiOutlineHome size={60}/>
      </button>
    </div>
  )
};

export default Main;
