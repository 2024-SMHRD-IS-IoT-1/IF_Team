
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/login.css';


// 아이콘 
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill} from "react-icons/ri";


const LoginPage=()=> {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('ID:', id);
    console.log('Password:', password);
    navigate('/');
  };

  const handleForgotID = () => {
    navigate('/forgot-id'); // ForgotID 페이지로 이동
  };

  const handleForgotPW = () => {
    navigate('/forgot-password'); // ForgotPW 페이지로 이동
  };

  return (
    <div className="container" >
        <div className='header'>
         <h2 className='login-header'>Login </h2>
         <div className='underline'></div>
         </div>
       <form onSubmit={handleLogin}>
          <div className="form-group">
              <div className='ID'>
                <FaUser size={20}/> 
                <label htmlFor="id"> ID</label>
                </div>
                <input
                  type="text"
                  id="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  required
                  placeholder='아이디를 입력하세요'
                 />
              <div className='PW'>
                <RiLockPasswordFill size={20}/>
                <label htmlFor="password"> Password</label>
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder='비밀번호를 입력하세요'
                 /> 
           </div>
          

           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
  
          {/* Login 버튼 */}
           <button type="submit">Login</button>

           {/* ID/PW 찾기 버튼  */}
           <div className='additional-links'>
              <div onClick={handleForgotID} className='link'>
              아이디 찾기
              </div>
              <div onClick={handleForgotPW} className='link'>
              비밀번호 찾기
              </div>
            </div>
       </form>
       
     </div>

     
    
  );
}

export default LoginPage;
