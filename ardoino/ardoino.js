// 모듈 가져오기
const express = require('express');
const app = express();
const bp = require("body-parser");
// routes 경로에 있는 파일 호출
const ardoinoRouter = require("./routes/ardoinoRouter");
const session = require('express-session');
const fileStore = require('session-file-store')(session);

// cors 설정 ( 도메인 주소가 달라도 일치 시킬 수 있음)
const cors = require('cors')
app.use(cors());
app.use(bp.urlencoded({extended : true})); 
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: new fileStore(),
    cookie: {
        httpOnly: true,          // 클라이언트 측에서 쿠키에 접근하지 못하도록 설정
        maxAge: 60 * 60 // 1시간 동안 쿠키 유효 
    }
}));

// 리액트 프로젝트 경로 설정 
const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// 라우터 불러올때는 포트설정하기 직전에 하는게 좋음 
// 이거 다른곳으로 옮기면 안되니까 주의 할 것 
app.use("/user",ardoinoRouter);
// 포트 설정 

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), ()=>{
    console.log(`Server is running on ${app.get('port')}`);
})

