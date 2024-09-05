import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/login.css';
import '../../css/signup.css';
import axios from 'axios';
import '../../App.css'


// 아이콘 
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill} from "react-icons/ri";



function LoginPage() {
 const [id, setId] = useState('');
 const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user_id: '',
    user_pw: ''
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/user/signup', formData)
      .then(response => {
        console.log('Login successful:', response.data);
      })
      .catch(error => {
        console.error('There was an error Login!', error);
      });
  };

  const handleForgotID = () => {
    navigate('/forgot-id'); // ForgotID 페이지로 이동
  };

  const handleForgotPW = () => {
    navigate('/forgot-password'); // ForgotPW 페이지로 이동
  };

  return (
    <div className="login-container" >
        <div className='login-header'>
         <h2 id='login-title'>Login </h2>
         <div id='underline'></div>
         </div>
       <form onSubmit={handleLogin}>
          <div className="login-formgroup">
              <div id='ID'>
                <FaUser size={20}/> 
                <label htmlFor="id"> ID</label>
                </div>
                <input
                  type="text"
                  value={formData.user_id}
                  onChange={handleChange}
                  placeholder='아이디를 입력하세요'
                 />
              <div id='PW'>
                <RiLockPasswordFill size={20}/>
                <label htmlFor="password"> Password</label>
                </div>
                <input
                  type="password"
                  value={formData.user_pw}
                  onChange={handleChange}
                  placeholder='비밀번호를 입력하세요'
                 /> 
           </div>
          

           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <hr />
           
          {/* Login 버튼 */}
           <button type="submit">Login</button>

           {/* ID/PW 찾기 버튼  */}
           <div className='login-additional-links'>
              <div onClick={handleForgotID} id='link-id'>
              Forgot ID? 아이디 찾기
              </div>
              
              <div onClick={handleForgotPW} id='link-pw'>
              Forgot PW? 비밀번호 찾기
              </div>
            </div>
       </form>
       
     </div>

     
    
  );
}


export default LoginPage;
