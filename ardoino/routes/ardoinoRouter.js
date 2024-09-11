const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// MySQL 데이터베이스 연결 설정
const conn = mysql.createConnection({
    host : 'project-db-cgi.smhrd.com',
    port : 3307,
    user : 'campus_24IS_IoT1_P2_4',
    password : 'smhrd4',
    database : 'campus_24IS_IoT1_P2_4'
})

conn.connect((err) => {
    if (err) {
        console.error('MySQL 연결 오류: ', err);
        return;
    }
    console.log('MySQL에 성공적으로 연결되었습니다.');
});

// 데이터 저장 라우트
app.post('/save_data', (req, res) => {
    const { temperature, humidity, brightness, rgb } = req.body;
    const sql = 'INSERT INTO sensor_data (temperature, humidity, brightness, r, g, b) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [temperature, humidity, brightness, rgb.r, rgb.g, rgb.b];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('데이터 저장 오류: ', err);
            return res.status(500).json({ status: 'error', message: err.message });
        }
        res.status(200).json({ status: 'success', message: 'Data saved successfully' });
    });
});

// 데이터 가져오기 라우트 (옵션)
app.get('/get_data', (req, res) => {
    const sql = 'SELECT * FROM sensor_data';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('데이터 조회 오류: ', err);
            return res.status(500).json({ status: 'error', message: err.message });
        }
        res.status(200).json(results);
    });
});

// 서버 실행
app.listen(6000, () => {
    console.log('Server is running on port 6000');
});
