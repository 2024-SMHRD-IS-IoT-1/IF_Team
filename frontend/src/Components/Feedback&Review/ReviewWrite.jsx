import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; 
import { FaStar, FaStarHalf } from "react-icons/fa";
import '../../css/reviewwrite.css';

function ReviewWrite() {
  const navigate = useNavigate();

  // 별점 상태 관리
  const [rating, setRating] = useState(0);

  // 사용자 로그인 여부 및 사용자 ID 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  // 별점 선택 처리 
  const handleStarClick = (value) => {
    setRating(value);
  };

  // 별점 렌더링 함수
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push(
          <FaStar key={i} onClick={() => handleStarClick(i + 1)} color="#FFD700" style={{ cursor: 'pointer' }} />
        );
      } else if (rating > i) {
        stars.push(
          <FaStarHalf key={i} onClick={() => handleStarClick(i + 1)} color="#FFD700" style={{ cursor: 'pointer' }} />
        );
      } else {
        stars.push(
          <FaStar key={i} onClick={() => handleStarClick(i + 1)} color="#e4e5e9" style={{ cursor: 'pointer' }} />
        );
      }
    }
    return stars;
  };

  // 리뷰 내용 상태 관리
  const [reviewContent, setReviewContent] = useState('');

  // JWT 토큰 가져오기
  const token = localStorage.getItem('token');
  // JWT가 유효한지 체크하여 로그인 상태 설정 및 사용자 ID 추출
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // 현재 시간 (초 단위)
        if (decodedToken.exp > currentTime) {
          setIsLoggedIn(true);
          setUserId(decodedToken.user_id); // 토큰에서 사용자 ID 추출 및 설정
        } else {
          localStorage.removeItem('token'); // 토큰이 만료되면 제거
        }
      } catch (error) {
        console.error("Invalid token");
        localStorage.removeItem('token');
      }
    }
  }, [token]);

  // 선호도 조사(preference)에 대한 상태
  const [preference1, setPreference1] = useState('');
  const [preference2, setPreference2] = useState('');
  const [preference3, setPreference3] = useState('');

  // 리뷰 선호도 조사 질문 선택 처리
  const handlePreferenceCilck = (setPreference, value) => {
    setPreference(value); // 선택된 값으로 상태를 업데이트
  };

  // 리뷰 저장 처리 함수
  const handleSaveReview = () => {
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/Login');
      return;
    }

    // 리뷰 작성 내용 저장
    const newReview = {
      user_id: userId, // 사용자 ID 추가
      rating : rating,
      content: reviewContent
    };

    // JWT를 헤더에 포함하여 API 요청
    axios.post('http://localhost:5000/user/ReviewWrite', newReview, {
      headers: {
        'Authorization': `${token}`
      }
    })
      .then(()=> {
        alert('리뷰가 작성되었습니다!');
        navigate('/ReviewList'); // 리뷰 목록 페이지로 이동
      })
      .catch(error => {
        console.error('리뷰 저장 실패:', error);
        alert('리뷰저장 실패 ')
      });
  }

  return (
    <div className='reviewwrite-container'>
      {isLoggedIn ? (
        <>
          <div className='reviewwrite-header'>
            <h1 className='reviewwrite-title'>Review 및 평가</h1>
            <p>로그인된 사용자: {userId}</p> {/* 로그인된 사용자 ID 표시 */}
          </div>
          <div className='reviewwrite-contents'>
            {/* 리뷰 필수 작성 */}
            <div className='requisite-contents'>
              <div className='reviewwrite-rating'>
                <p>별점을 선택해주세요. ({rating}/5)</p>
                <div className="star-container">
                  {renderStars()}
                </div>
              </div>

              <div className='reviewwrite-content'>
                <textarea
                  id='reviewwrite-content-text'
                  placeholder='내용을 입력하세요.'
                  value={reviewContent}
                  onChange={(e) => setReviewContent(e.target.value)}
                />
              </div>
            </div>
            <hr />
            {/* 리뷰 선택 작성 */}
            <div className='chioce-contents'>
              <h2 className='reviewwrite-preference'>스마트 플랜테리어 무드등 선호도 조사</h2>
              {/* 질문 1 */}
              <div className='question'>
                <p>제품 사용 후 변화가 있었나요?</p>
                <label>
                  <input
                    type='radio'
                    value='만족'
                    checked={preference1 === '만족'}
                    onChange={() => handlePreferenceCilck(setPreference1, '만족')}
                  />
                  만족
                </label>
                <label>
                  <input
                    type='radio'
                    value='보통'
                    checked={preference1 === '보통'}
                    onChange={() => handlePreferenceCilck(setPreference1, '보통')}
                  />
                  보통
                </label>
                <label>
                  <input
                    type='radio'
                    value='불만족'
                    checked={preference1 === '불만족'}
                    onChange={() => handlePreferenceCilck(setPreference1, '불만족')}
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
                    onChange={() => handlePreferenceCilck(setPreference2, '만족')}
                  />
                  만족
                </label>
                <label>
                  <input
                    type='radio'
                    value='보통'
                    checked={preference2 === '보통'}
                    onChange={() => handlePreferenceCilck(setPreference2, '보통')}
                  />
                  보통
                </label>
                <label>
                  <input
                    type='radio'
                    value='불만족'
                    checked={preference2 === '불만족'}
                    onChange={() => handlePreferenceCilck(setPreference2, '불만족')}
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
                    onChange={() => handlePreferenceCilck(setPreference3, '만족')}
                  />
                  만족
                </label>
                <label>
                  <input
                    type='radio'
                    value='보통'
                    checked={preference3 === '보통'}
                    onChange={() => handlePreferenceCilck(setPreference3, '보통')}
                  />
                  보통
                </label>
                <label>
                  <input
                    type='radio'
                    value='불만족'
                    checked={preference3 === '불만족'}
                    onChange={() => handlePreferenceCilck(setPreference3, '불만족')}
                  />
                  불만족
                </label>
              </div>
            </div>
          </div>

          <div className='button-container'>
            <button id='save-btn' onClick={handleSaveReview}>저장</button>
            <button id='cancel-btn' onClick={() => navigate('/reviewlist')}>취소</button>
          </div>
        </>
      ) : (
        <button onClick={()=>navigate('/Login')}>로그인이 필요합니다 </button>
      )}
    </div>
  );
}

export default ReviewWrite;


