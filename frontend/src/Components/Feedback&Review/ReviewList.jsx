import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/reviewlist.css'; // 스타일을 위한 CSS 파일을 불러옵니다.

const ReviewList = () => {
  const [reviews, setReviews] = useState([]); // 리뷰 데이터를 저장할 상태 변수
  const [filter, setFilter] = useState('latest'); // 기본 정렬 기준은 '최신순'
  const [showPhotoReviews, setShowPhotoReviews] = useState(false); // 포토/동영상 리뷰만 보기 옵션의 상태 변수
  const [posts,setPosts] = useState('');
  const [loading,setLoading]= useState('');

  useEffect(() => {
    const fetchReviews=async()=>{
      try{
        console.log('asdfasdf')
        const response =await
      // backend의 리뷰 데이터를 가져오기
      axios
        .get('http://localhost:5000/user/ReviewList')
        console.log('success')
        setPosts(response.data.data);
      }
        catch(error){console.error(' error occurred while loading reviews.',error);
        }finally{
          setLoading(false); //로딩받아오면 로딩 해제 
        }};
        fetchReviews();
      },[]);


  const handleFilterChange = (filter) => {
    setFilter(filter); // 선택한 필터로 상태를 업데이트합니다.
    // 추가적으로 정렬을 처리하는 로직을 여기에 추가할 수 있습니다.
  };

  const togglePhotoReviews = () => {
    setShowPhotoReviews(!showPhotoReviews); // 포토/동영상 리뷰 모드 토글
  };

  return (
    <div className="review-list-container">
      <h2>리뷰 {reviews.length}</h2>
      <div className="review-filter">
        <label>
          <input
            type="checkbox"
            checked={showPhotoReviews}
            onChange={togglePhotoReviews}
          />
          포토/동영상 리뷰 모아보기
        </label>
        <button onClick={() => handleFilterChange('recommendation')}>추천순</button>
        <button onClick={() => handleFilterChange('latest')}>최신순</button>
        <button onClick={() => handleFilterChange('highest')}>별점 높은 순</button>
      </div>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <div className="review-stars">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
            <div className="review-user">
              {review.username.slice(0, 1)}**
            </div>
            
            <div className="review-date">{review.created_at}</div>
            <div className="review-content">{review.content}</div>
            <div className="review-actions">
              <span>1</span>
              <button>신고</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewList;
