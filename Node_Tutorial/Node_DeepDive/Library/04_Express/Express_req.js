// 요청 메소드
const express = require('express');
const app = express();

app.use((req, res)=>{
    const agent = req.header('User-Agent');
    const paramName = req.query.name;
    const browserChrome = 'Hello Chrome';
    const browserOthers = 'Hello Others';

    console.log(req.headers);
    console.log(req.baseUrl);
    console.log(req.hostname);
    console.log(req.protocol);

    if (agent.toLowerCase().match(/chrome/)) {
        res.write(`<div><p>${browserChrome}</p></div>`);
    } else {
        res.write(`<div><p>${browserOthers}</p></div>`);
    }
    res.write(`<div><p>${agent}</p></div>`);
    res.write(`<div><p>${paramName}</p></div>`);
    res.end();
});

app.listen(3000, ()=>{
    console.log('Server is running port 3000')
})

// Request 객체의 메소드와 속성

// headers: 요청 헤더의 추출
// Header(): 요청 헤드의 속성 지정 또는 추출
// query: GET 방식으로 요청한 매개변수 확인
// body: POST 방식으로 요청한 매개변수 확인
// params: 라우팅 매개변수 추출