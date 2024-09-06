// 모듈 가져오기
const express = require('express');
const app = express();
const bp = require("body-parser");
// routes 경로에 있는 파일 호출
const userRouter = require("./routes/userRouter");
const session = require('express-session');
const fileStore = require('session-file-store')(session);

// cors 설정 ( 도메인 주소가 달라도 일치 시킬 수 있음)
const cors = require('cors')
app.use(cors());
app.use(bp.urlencoded({extended : true})); 
app.use(express.json());
app.use("/user",userRouter);
app.use(session({
    httpOnly: true,
    resave: false,
    secret: 'secret',
    store: new fileStore(),
    saveUninitialized: false,
    expires: new Date(Date.now() + (60 * 60 * 1 ))
}));


// 메인페이지 경로 설정 
/*const Router = require('./routes/userRouter')
app.use('/', Router);*/
// // 세션 등록하기! 
// app.use(session({
//     httpOnly : true, //http로 들어온 요청만 처리하겠다. 
//     resave : false, //세션을 항상 재저장 할 지 확인
//     secret : "secret", //암호화할때 사용된 키 값
//     store : new fileStore(), //세션을 저장할 공간을 할당 
//     saveUninitialized : false // 세션이 비어있더라도 저장 할거냐!🚧(중요)
// }))
// app.use("/",userRouter);
// app.use("/cookie",cookie);
// 리액트 프로젝트 경로 설정 
const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));


// 포트 설정 
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), ()=>{
    console.log(`Server is running on ${app.get('port')}`);
    

})



