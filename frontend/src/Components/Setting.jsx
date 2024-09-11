import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
// import TempHum from '../../../ardoino/templates/TempHum.html'
// import TempHum_Ardo from '../../../ardoino/ardo/t_h_sensor.ino'
import '../css/setting.css'

const Setting = () => {

  // 사용자 로그인 여부 및 사용자 ID 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
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

  return (
   
    <div className='setting-container'>
        <div className='setting-header'>
            <h1 id='setting-title2'>MOOD LIGHT</h1>
            <h2 id='setting-title1'> Setting </h2>
        </div>
        <div className='setting-today-weather'>
          <div className='weater-box'>
            <h4>오늘의 날씨</h4 >
            {/* <div className='weather-data'>
            <img src={icon}></img>
            <h1>{temp}</h1>
            <h4>{cloud}</h4>
            </div> */}
          </div>
        </div>
        <div className='setting-menubox'>
            <div className='setting-temp' >Temperpature</div>
            <div className='setting-hum'>Humidity</div>
            <div className='setting-led'>LED 조절</div>
        </div>
        <div>
          <h2>나의 수면환경은?</h2>
          <div>시간별 온도,습도,조도 측정 통계</div>
        </div>
      </div>
  
  )
}
export default Setting;

