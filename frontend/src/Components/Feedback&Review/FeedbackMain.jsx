import React, {useState, useEffect}from 'react'
import { BrowserRouter } from 'react-router-dom';
import { navigate,useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
// css 불러옴
import '../../css/feedbackmain.css';
import '../../App.css';

// 페이지 이동
function FeedbackMain() {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const handleReviewListClick = () => {
    navigate('/ReviewList'); 
  }
  

  return (
    <div className="feedbackmain-container">
      <header className="feedbackmain-header">
        <h1>Review</h1>
        <p>사용자들의 다양한 후기를 들어보세요 🌈</p>
        <div onClick={handleReviewListClick} className="feedbackmain-link"> 더 많은 사용자 후기 보러가기 ▶ </div>
      </header>
      
      <section className="review-list">
        <div className="review-item">
          <div className="review-avatar">
            <img src="https://via.placeholder.com/80" alt="User Avatar" />
          </div>
          <div className="review-content">
            <h3>Apple 에서 결제가 되었는데 이게 뭔가요?</h3>
            <p>"Apple 에서 결제가 되었다는 문자를 받았거나 내역을 확인했는데 무엇인지 모르시겠으면 당황하지 마시고 아래 내용을 통해서 확인해 봐 주세요. 용구 항목을 확인하는 방법 구입 내역을 확인하시면..."</p>
            <p className="review-author">Sang_H.<span>커뮤니티 관리자</span></p>
            <a href="#read-more" className="read-more-link">게시글 전문 읽기 &gt;</a>
          </div>
        </div>

        <div className="review-item">
          <div className="review-avatar">
            <img src="https://via.placeholder.com/80" alt="User Avatar" />
          </div>
          <div className="review-content">
            <h3>좋은 답변 제공하기</h3>
            <p>"좋은 답변을 제공하려면 어떻게 해야 할까요? 여기에 어떤 정해진 것이 있는 게 아니라면, 지금까지 수년간 여러 곳에서 다양한 사람들과 경험을 쌓는 답변을 제공할 때 다음과 같이 생각해보라..."</p>
            <p className="review-author">junsungE<span>포인트: 5,182</span></p>
            <a href="#read-more" className="read-more-link">게시글 전문 읽기 &gt;</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeedbackMain;
