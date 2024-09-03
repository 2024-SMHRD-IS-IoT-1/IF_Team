
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/app.css';





function LoginPage() {
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
    
    <div className="login-container">
      <div className='login-header'>Login</div>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      <div className='additional-links'>
        <div onClick={handleForgotID} className='link' style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
          아이디 찾기
        </div>
        <div onClick={handleForgotPW} className='link' style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
          비밀번호 찾기
        </div>
      </div>
      </form>
      <div className="additional-links">
      </div>
    </div>
  );
}

export default LoginPage;
