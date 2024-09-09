import React from 'react'
// import TempHum from '../../../ardoino/templates/TempHum.html'
// import TempHum_Ardo from '../../../ardoino/ardo/t_h_sensor.ino'


export const setting = () => {
   
    
  return (
    <div>
        <div className='setting-container'>
            <div className='setting-header'>
                <h1 id='setting-title2'>MOOD LIGHT</h1>
                <h2 id='setting-title1'> Setting </h2>
            </div>
            <div className='setting-menu'>
                <div className='setting-text' >Temp</div>
                
            </div>
        </div>
    </div>
  )
}
export default setting;