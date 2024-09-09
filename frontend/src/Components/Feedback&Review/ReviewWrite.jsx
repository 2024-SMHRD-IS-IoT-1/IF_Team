import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaStarHalf } from "react-icons/fa";

import '../../css/reviewwrite.css';

function ReviewWrite() {
    // 선호도 조사(preference)에 대한 상태
    const [preference1, setPreference1] = useState('');
    const [preference2, setPreference2] = useState('');
    const [preference3, setPreference3] = useState('');

    const handlePreferenceCilck = (setPreference, value) => {
        setPreference(value); //선택된 값으로 상태를 업데이트
    };
    

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
              {/* 리뷰 선택 작성  */}
    <div className='chioce-contents'>
      <h2 className='reviewwrite-preference'>스마트 플랜테리어 무드등선호도 조사</h2>
      <h1 className='reviewwrite-preference'>선호도 조사</h1>
         
<<<<<<< HEAD
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
=======
      {/* 질문 1 */}
      <div className='question'>
        <p>제품 사용 후 변화가 있었나요?</p>
        <label>
        <input
          type='radio'
          value='만족'
          checked={preference1 === '만족'}
          onChange={() => handlePreferenceCilck(setPreference1, '만족')}
>>>>>>> ebed2e02f54a2520cf36ab5824e242c5f5032154
          />
          만족
        </label>
        <label>
<<<<<<< HEAD
          <input
            type='radio'
            value='불만족'
            checked={preference1 === '불만족'}
            onChange={() => handlePreferenceCilck(setPreference1, '불만족')}
          />
          불만족
=======
        <input
          type='radio'
          value='보통'
          checked={preference1 === '보통'}
          onChange={() => handlePreferenceCilck(setPreference1, '보통')}
        />
        보통
>>>>>>> ebed2e02f54a2520cf36ab5824e242c5f5032154
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
<<<<<<< HEAD
          />
          만족
        </label>
        <label>
          <input
=======
            />
            만족
            </label>
            <label>
            <input
>>>>>>> ebed2e02f54a2520cf36ab5824e242c5f5032154
            type='radio'
            value='보통'
            checked={preference3 === '보통'}
            onChange={() => handlePreferenceCilck(setPreference3, '보통')}
<<<<<<< HEAD
          />
          보통
        </label>
        <label>
          <input
=======
            />
            보통
            </label>
            <label>
            <input
>>>>>>> ebed2e02f54a2520cf36ab5824e242c5f5032154
            type='radio'
            value='불만족'
            checked={preference3 === '불만족'}
            onChange={() => handlePreferenceCilck(setPreference3, '불만족')}
<<<<<<< HEAD
          />
          불만족
        </label>
=======
            />
            불만족
            </label>
>>>>>>> ebed2e02f54a2520cf36ab5824e242c5f5032154
        </div>

    </div>
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
