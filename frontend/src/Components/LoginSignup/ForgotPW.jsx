import React, { useState } from 'react';
import { navigate , useNavigate } from 'react-router-dom';
import '../../css/forgotpw.css';
import '../../App.css'


//아이콘
import { FaUser } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

function ForgotPW() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [id, serId] = useState('');

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/Login');
  }
  
  const handlePasswordReset = (e) => {
    e.preventDefault();
    // 비밀번호 재설정 로직을 여기에 추가합니다 (예: API 요청)
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Name:', name);
    console.log('Id:', id);
    
    // 비밀번호 재설정 요청을 완료한 후 처리할 로직 추가
  };

  return (
    <div className="forgot_pw-container">
      <div className='forgot_pw-header'>
      <h2 id="forgot_pw-title">Forgot PW?</h2>
      <div id='underline'></div>
      </div>

      <form onSubmit={handlePasswordReset}>
      <div className="forgot_pw-form-group">
      <div>
        <FaUser size={20}/>
          <label htmlFor="id">ID</label>
         </div>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='아이디를 입력하세요'

          />
        
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
        <button type="submit">비밀번호 찾기</button>
        <div className='forgot_pw-additional-links'>
              <div onClick={handleLogin} id='login-link'>
              로그인하기
              </div>
            </div>
      </form>
    </div>
  );
}

export default ForgotPW;
