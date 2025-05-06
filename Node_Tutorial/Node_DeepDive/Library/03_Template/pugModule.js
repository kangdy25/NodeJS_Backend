// pug 템플릿 사용법

// 1. pug 모듈은 웹 페이지를 동적으로 처리하는 템플릿 엔진 모듈이다.
// 2. 특정 형식의 문자열을 HTML 형식 문자열로 변환해준다.

// pug 템플릿 문법
// pug 문법에서는 띄어쓰기가 가장 중요하다. 아래가 pug의 기본 형식이다.

// html
//     head
//         title
//     body
//         h1
//         h2
//         a

// .compile(): pug 문자열을 HTML 문자열로 변경한다.
// style. : style 태그를 입력할 때 사용한다.
// script. : script 태그를 입력할 떄 사용한다.
// # : div 태그
// . : div class 속성
// #{VALUE} : 데이터를 출력할 때 사용한다.
// - : JavaScript를 입력할 때 사용한다.

const pug = require('pug');
const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
    fs.readFile("./pug_example.pug", "utf-8", (error, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        const fn = pug.compile(data);
        res.end(fn({
            table_name: 'Multiplication Table 19 X ?',
            number: '19',
        }));
    });
}).listen(50000, () => {
    console.log("서버가 동작 중입니다. http://127.0.0.1:50000");
});
