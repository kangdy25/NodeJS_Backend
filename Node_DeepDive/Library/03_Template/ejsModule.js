// ejs 템플릿 사용법

// 1. ejs 모듈은 웹 페이지를 동적으로 처리하는 템플릿 엔진 모듈이다.
// 2. 특정 형식의 문자열을 HTML 형식 문자열로 변환해준다.

// ejs 템플릿 문법
// <% CODE %> :  JavaScript 코드 입력
// <% VALUE %> : 데이터 출력
// .render(): ejs 문자열을 HTML 문자열로 변경한다.

const ejs = require("ejs");
const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
    fs.readFile("./ejs_example.ejs", "utf-8", (error, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(ejs.render(data, {
            table_name: 'Multiplication table 19 X ?', // 매개변수 전달
            number: '19', // 매개변수 전달 2
        }));
    });
}).listen(50000, () => {
    console.log("서버가 동작 중입니다. http://127.0.0.1:50000");
});
