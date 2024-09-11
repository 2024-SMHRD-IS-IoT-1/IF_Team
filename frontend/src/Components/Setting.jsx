import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
// import TempHum from '../../../ardoino/templates/TempHum.html'
// import TempHum_Ardo from '../../../ardoino/ardo/t_h_sensor.ino'
import axios from 'axios';
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


  //  현재 위치에 따른 날씨 데이터
  const [temp, setTemp] = useState('0')
  const [icon, setIcon] = useState('')
  const [cloud, setCloud] = useState('')

 
  const getData = (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=603aa562f93c1b6e5fb4e7596aa820d5`;
    
    axios
    .get(url)
    .then((res) => {
         console.log(res);
         // 구름의 양 -> 값 확인
         console.log(res.data.clouds.all);
         
         // 켈빈 온도 - 273 = 섭씨 온도
         // 온도-> temp
         setTemp(parseInt(res.data.main.temp-273));
         
         // 아이콘 셋팅
         // 주소 값으로 셋팅
         setIcon(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)
         let clouds = res.data.clouds.all
         if (clouds > 90){
             setCloud('매우 흐림')
         } else if (clouds > 60){
             setCloud('흐림')
         } else if (clouds > 30){
             setCloud('약간 흐림')
         } else {
             setCloud('맑음')
         }
    })
 }

 useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        getData(latitude, longitude); // 위치를 기반으로 데이터 가져오기
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}, []);

  // 수면환경의 값
  const [result, setResult] = useState(
    axios
    .get("192.168.219.68:6000")
  ) 

  return (

   

    <div className='setting-container'>
        <div className='setting-header'>
            <h1 id='setting-title1'>MOOD LIGHT</h1>
            <h2 id='setting-title2'> Setting </h2>
        </div>
        <div className='setting-today-weather'>
          <div className='weater-box'>
            <h4>오늘의 날씨</h4 >
            <div className='weather-data'>
            <img src={icon}></img>
            <h1>{temp}ºC</h1>
            <h4>{cloud}</h4>
            </div>
          </div>
        </div>

        <h2>나의 수면환경은?</h2>
        <div className='setting-menubox'>
            <div className='setting-temp' >Temperpature : ºC</div>
            <div className='setting-hum'>Humidity : </div>
            <div className='setting-led'>
              <h4>LED 조절</h4>

              </div>
        </div>
        <div>
         
          <div>시간별 온도,습도,조도 측정 통계</div>
        </div>
      </div>
  
  )
}

export default Setting;

