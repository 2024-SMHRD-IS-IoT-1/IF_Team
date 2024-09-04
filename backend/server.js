// 모듈 가져오기
const express = require('express');
const app = express();
const bp = require("body-parser");
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3000', // React 앱의 주소를 여기에 설정
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
app.use(bp.urlencoded({extended : true})); 
app.use(express.json());
// 리액트 프로젝트 경로 설정 
const path = require('path');
app.use(express.static(path.join(__dirname, '..','frontend', 'build')));
app.use(express.json());

// routes 경로에 있는 파일 호출
const userRouter = require("./routes/userRouter");
app.use("/user",userRouter);
// cors 설정 ( 도메인 주소가 달라도 일치 시킬 수 있음)


// 포트 설정 
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), ()=>{
    console.log(`Server is running on ${app.get('port')}`);
})