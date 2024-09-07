import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaStarHalf } from "react-icons/fa";

import '../../css/reviewwrite.css';

function ReviewWrite() {
  const navigate = useNavigate();

  // 별점 상태 관리
  const [rating, setRating] = useState(0);

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

  // 사용자 로그인 여부 체크
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
{/*
  // 로그인 상태 체크
  useEffect(() => {
    // 예: 사용자 인증 API 호출
    axios.get('/api/check-auth') // 실제 API 경로로 변경 필요
      .then(response => {
        setIsLoggedIn(response.data.isAuthenticated);
      })
      .catch(error => {
        console.error('로그인 상태 확인 실패:', error);
        setIsLoggedIn(false);
      });
  }, []);
  */}
  // 리뷰 저장 처리 함수
  const handleSaveReview = () => {
    // if (!isLoggedIn) {
    //   alert('로그인이 필요합니다.');
    //   return;
    }

    const newReview = {
      rating,
      content: reviewContent,
      date: new Date().toLocaleDateString()
    };

    // 리뷰 저장 API 호출
    axios.post('/api/save-review', newReview) // 실제 API 경로로 변경 필요
      .then(response => {
        alert('리뷰가 저장되었습니다!');
        navigate('/reviewlist'); // 리뷰 목록 페이지로 이동
      })
      .catch(error => {
        console.error('리뷰 저장 실패:', error);
      });
 

 

  return (
    <div className='reviewwrite-container'>
      {/* {isLoggedIn ? ( */}
        <>
          <div className='reviewwrite-header'>
            <h1 className='reviewwrite-title'>Review 및 평가</h1>
          </div>
          <div className='reviewwrite-contents'>
            {/* 리뷰 필수 작성*/}
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
            {/* 선택 질문 생략 (필요시 추가) */}
          </div>
          <div className='button-container'>
            <button id='save-btn' onClick={handleSaveReview}>저장</button>
            <button id='cancel-btn' onClick={() => navigate('/reviewlist')}>취소</button>
          </div>
        </>
      {/* ) : (
        <div>로그인이 필요합니다. 로그인 후 리뷰를 작성하세요.</div>
      )} */}
    </div>
  );
}

export default ReviewWrite;
