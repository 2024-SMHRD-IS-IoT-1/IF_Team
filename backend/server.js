// 모듈 가져오기
const express = require('express');
const app = express();
const bp = require("body-parser");
// routes 경로에 있는 파일 호출
const userRouter = require("./routes/userRouter");

// cors 설정 ( 도메인 주소가 달라도 일치 시킬 수 있음)
const cors = require('cors')
const router = express.Router();
  router.get("/checkAuth", (req, res) => {
    if (req.session.user_id) {
        res.json({ loggedIn: true, user_id: req.session.user_id });
    } else {
        res.json({ loggedIn: false });
    }
  });
app.use(cors());
app.use(bp.urlencoded({extended : true})); 
app.use(express.json());
app.use("/user",userRouter);

// 메인페이지 경로 설정 
/*const Router = require('./routes/userRouter')
app.use('/', Router);*/

// 리액트 프로젝트 경로 설정 
const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));


// 포트 설정 
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), ()=>{
    console.log(`Server is running on ${app.get('port')}`);
})