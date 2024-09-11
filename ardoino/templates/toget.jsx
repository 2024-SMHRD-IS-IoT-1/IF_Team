import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [brightness, setBrightness] = useState(null);
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    // 서버에서 센서 데이터를 가져오는 함수
    const fetchSensorData = async () => {
      try {
        const response = await fetch('/get_sensor_data');
        const data = await response.json();
        setTemperature(data.temperature);
        setHumidity(data.humidity);
        setBrightness(data.brightness);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchSensorData();
  }, []);

  const handleColorChange = (event) => {
    const color = event.target.value;
    setColor(color);
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    setRgb({ r, g, b });
  };

  const sendColor = async () => {
    try {
      const response = await fetch('/send_rgb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rgb),
      });
      const data = await response.json();
      console.log('RGB value sent:', data);
    } catch (error) {
      console.error('Error sending RGB value:', error);
    }
  };

  return (
    <div className="App">
      <h1>센서 정보 및 색상 선택기</h1>
      
      <div className="sensor-container">
        <div className="sensor">
          <span className="label">온도:</span>
          <span className="value">{temperature !== null ? `${temperature} ℃` : 'Loading...'}</span>
        </div>
        <div className="sensor">
          <span className="label">습도:</span>
          <span className="value">{humidity !== null ? `${humidity} %` : 'Loading...'}</span>
        </div>
        <div className="sensor">
          <span className="label">밝기:</span>
          <span className="value">{brightness !== null ? `${brightness} lx` : 'Loading...'}</span>
        </div>
      </div>

      <div id="colorPickerContainer">
        <h2>RGB 색상 선택기</h2>
        <input
          type="color"
          id="colorPicker"
          value={color}
          onChange={handleColorChange}
        />
        <div
          id="colorDisplay"
          style={{ backgroundColor: color, width: '100px', height: '100px', margin: '20px auto', border: '2px solid black' }}
        ></div>
        <div id="colorValue">RGB({rgb.r}, {rgb.g}, {rgb.b})</div>
        <button onClick={sendColor}>색상 전송</button>
      </div>
    </div>
  );
}

export default App;
