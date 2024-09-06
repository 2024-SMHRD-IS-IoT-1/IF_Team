import React, { useState } from 'react';
import { navigate , useNavigate } from 'react-router-dom';
import '../../css/forgotid.css';
import '../../App.css'

// 아이콘 불러오기 
import { FaUserMinus } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";


const ForgotID =()=> {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/Login');
  }
  const handleForgotPW = () => {
    navigate('/forgot-password');
  }
  
  const handlePasswordReset = (e) => {
    e.preventDefault();
    // 비밀번호 재설정 로직을 여기에 추가합니다 (예: API 요청)
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Name:', name);
    // 비밀번호 재설정 요청을 완료한 후 처리할 로직 추가
  };

  return (
    <div className="forgot_id-container">
      <div className='forgot_id-header'>
      <h2 id="forgot_id-title"> Forgot ID? </h2>
      <div id='forgot_id-underline'></div>
      </div>

      <form onSubmit={handlePasswordReset}>
        <div className="forgot_id-formgroup">
          <div>
          <FaUserMinus size={20}/>
          <label htmlFor="name">Name</label>
          </div>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
             placeholder='이름을 입력하세요'
          />
        <div>
        <IoMdMail size={20}/>
          <label htmlFor="email">Email</label>
        </div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
             placeholder='이메일을 입력하세요'
          />
          
          <div>
        <FaPhone size={20}/>
          <label htmlFor="phone">Tel</label>
          </div>
         
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder='전화번호를 입력하세요'
           />
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
      

        <button className='forgotid-btn'>아이디 찾기</button>
         {/* ID/PW 찾기 버튼  */}
         <div className='forgot_id-additional_links'>
              <div onClick={handleLogin} id='login-link'>
              로그인하기
              </div>
              <div onClick={handleForgotPW} id='pw-link'>
              Forgot PW? 비밀번호 찾기
              </div>
            </div>
      </form>
    </div>
  );
}

export default ForgotID;
