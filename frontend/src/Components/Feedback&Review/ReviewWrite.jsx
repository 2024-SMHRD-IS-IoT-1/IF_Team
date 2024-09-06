import React from 'react'


function ReviewWrite() {
    const handleReviewWriteSubmit = (e) => {
     e.preventDefault();
     const reviewdata = {
    
     }
     console.log(reviewdata)
     axios.post('http://localhost:5000/user/Login', reviewdata)
    }
  return (
    <div className='reviewwrite-container'>
        <div className='reviewwrite-header'>
            <h1 className='reviewwrite-title'>Review 작성하기</h1>
        </div>
        
        <div className='reviewwrite-contents'>
            {/* 리뷰 필수 작성*/}
            <div className='requisite-contents'>
                <div className='reviewwrite-rating'>별점 구현</div>
                <div className='reviewwrite-text'>Review 내용 작성하기</div>
            </div>  
            <hr />
            {/* 리뷰 선택 작성  */}
            <div className='chioce-contents'>
                <h1 className='reviewwrite-preference'>선호도 조사 (선택)</h1>
                
                <div id='Question_1'> 제품 사용 후 변화가 있었나요? </div>
                <div id = 'Question_2'> 제품 디자인에 만족하나요? </div>
                <div id = 'Question_3'> 제품 기능에 만족하나요? </div>
                <div id = 'Question_4'> 제품에 ? </div>
            </div>
        </div>
        
    </div>
   

  )
}
