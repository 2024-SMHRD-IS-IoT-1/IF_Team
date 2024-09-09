import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ReviewWrite() {
  const [preference1, setPreference1] = useState('');
  const [preference2, setPreference2] = useState('');
  const [preference3, setPreference3] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    // 서버에 로그인 상태 확인 요청
    axios.post('http://localhost:5000/ReviewWrite', { withCredentials: true })
      .then(response => {
        console.log('Server response:', response.data); // 서버 응답 출력
        if (!response.data.user_id) {
          alert("Please login.");
          navigate('/Login');  // 로그인 페이지로 이동
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          alert("Please login.");
          navigate('/Login');  // 로그인 페이지로 이동
        } else {
          alert('Error')
          console.error('Error fetching review write page:', error);
        }
      });
  }, [navigate]);

  const handlePreferenceClick = (setPreference, value) => {
    setPreference(value); //선택된 값으로 상태를 업데이트
  };

  return (
    <div className='reviewwrite-container'>
      <div className='reviewwrite-header'>
        <h1 className='reviewwrite-title'>Review 작성하기</h1>
      </div>
      
      <div className='reviewwrite-contents'>
        {/* 리뷰 필수 작성 */}
        <div className='requisite-contents'>
          <div className='reviewwrite-rating'>별점 구현</div>
          <div className='reviewwrite-text'>Review 내용 작성하기</div>
        </div>
        <hr />
        
        {/* 리뷰 선택 작성 */}
        <div className='chioce-contents'>
          <h1 className='reviewwrite-preference'>선호도 조사 (선택)</h1>
        
          {/* 질문 1 */}
          <div className='question'>
            <p>제품 사용 후 변화가 있었나요?</p>
            <label>
              <input
                type='radio'
                value='만족'
                checked={preference1 === '만족'}
                onChange={() => handlePreferenceClick(setPreference1, '만족')}
              />
              만족
            </label>
            <label>
              <input
                type='radio'
                value='보통'
                checked={preference1 === '보통'}
                onChange={() => handlePreferenceClick(setPreference1, '보통')}
              />
              보통
            </label>
            <label>
              <input
                type='radio'
                value='불만족'
                checked={preference1 === '불만족'}
                onChange={() => handlePreferenceClick(setPreference1, '불만족')}
              />
              불만족
            </label>
          </div>

          {/* 질문 2 */}
          <div className='question'>
            <p>제품 디자인에 만족하나요?</p>
            <label>
              <input
                type='radio'
                value='만족'
                checked={preference2 === '만족'}
                onChange={() => handlePreferenceClick(setPreference2, '만족')}
              />
              만족
            </label>
            <label>
              <input
                type='radio'
                value='보통'
                checked={preference2 === '보통'}
                onChange={() => handlePreferenceClick(setPreference2, '보통')}
              />
              보통
            </label>
            <label>
              <input
                type='radio'
                value='불만족'
                checked={preference2 === '불만족'}
                onChange={() => handlePreferenceClick(setPreference2, '불만족')}
              />
              불만족
            </label>
          </div>

          {/* 질문 3 */}
          <div className='question'>
            <p>제품 기능에 만족하나요?</p>
            <label>
              <input
                type='radio'
                value='만족'
                checked={preference3 === '만족'}
                onChange={() => handlePreferenceClick(setPreference3, '만족')}
              />
              만족
            </label>
            <label>
              <input
                type='radio'
                value='보통'
                checked={preference3 === '보통'}
                onChange={() => handlePreferenceClick(setPreference3, '보통')}
              />
              보통
            </label>
            <label>
              <input
                type='radio'
                value='불만족'
                checked={preference3 === '불만족'}
                onChange={() => handlePreferenceClick(setPreference3, '불만족')}
              />
              불만족
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewWrite;
