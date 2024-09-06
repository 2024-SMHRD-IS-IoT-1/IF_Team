import React, { useState } from 'react'


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
                <label id= 'Question_1' type = 'radio' value = '만족' checked = {preference1 === '만족' } onChange = {()=>handlePreferenceCilck(setPreference1, 만족)}> 제품 사용 후 변화가 있었나요? </label>
                <label id ='Question_2' type = 'radio' value = '보통' checked = {preference2 === '보통'} onChange = {()=>handlePreferenceCilck(setPreference1, 보통)}> 제품 디자인에 만족하나요? </label>
                <label id ='Question_3' type = 'radio' value = '불만족' checked = {preference3 === '불만족'} onChange = {()=>handlePreferenceCilck(setPreference1, 불만족)}> 제품 기능에 만족하나요? </label>
            </div>
        </div>
        
    </div>
   

  )
}
export default ReviewWrite; 
