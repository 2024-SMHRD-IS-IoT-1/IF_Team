import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/login.css';
import '../../css/signup.css';
import axios from 'axios';
import '../../App.css'

// 아이콘 
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill} from "react-icons/ri";



function LoginPage() {
  const user_id = useRef('');
  const user_pw = useRef('');
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    const formData = {
      user_id : user_id.current.value,
      user_pw : user_pw.current.value,
    }
    axios.post('http://localhost:5000/user/Login', formData)
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
       <form onSubmit={ handleLogin}>
          <div className="login-formgroup">
              <div id='ID'>
                <FaUser size={20}/> 
                <label htmlFor="id"> ID</label>
                </div>
                <input
                  type="text"
                  ref={user_id}
                  placeholder='아이디를 입력하세요'
                 />
              <div id='PW'>
                <RiLockPasswordFill size={20}/>
                <label htmlFor="password"> Password</label>
                </div>
                <input
                  type="password"
                  ref={user_pw}
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
