import React, { useState } from 'react';
import '../css/app.css';

function ForgotPW() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // 비밀번호 재설정 로직을 여기에 추가합니다 (예: API 요청)
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Name:', name);
    // 비밀번호 재설정 요청을 완료한 후 처리할 로직 추가
  };

  return (
    <div className="password-reset-container">
      <h2 className="password-reset-header">비밀번호 찾기</h2>
      <form onSubmit={handlePasswordReset}>
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">전화번호</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">아이디 찾기</button>
      </form>
    </div>
  );
}

export default ForgotPW;
