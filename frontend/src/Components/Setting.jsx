import React, {useState, useEffect} from 'react'
// import TempHum from '../../../ardoino/templates/TempHum.html'
// import TempHum_Ardo from '../../../ardoino/ardo/t_h_sensor.ino'
import axios from 'axios'

export const setting = () => {

  return (
    <div>
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
    </div>
  )
};

export default setting;