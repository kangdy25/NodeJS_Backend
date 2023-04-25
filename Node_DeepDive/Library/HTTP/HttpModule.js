// node Library/HTTP/HttpModule.js

//#########################################
// http 모듈
//#########################################

// // 웹 서버 생성과 실행
// const http = require('http');
// const server = http.createServer();
// server.listen(50000, () => {
//     console.log('서버가 동작 중 ㅅㄱ, http://127.0.0.1:50000');
// })
// // 웹 서버 종료
// const testClose = function() {
//     server.close();
//     console.log('서버 끔 ㅅㄱ, http://127.0.0.1:50000');
// }
// // 강제 서버 종료 
// setTimeout(testClose, 5000);

//#########################################
// http 모듈 - event
//#########################################

// // 웹 서버 생성과 실행
// const http = require('http');
// const server = http.createServer();

// // 이벤트 연결
// server.on('request', () => {
//     console.log('Request');
// })

// server.on('connection', () => {
//     console.log('Connection');
// })

// server.on('close', () => {
//     console.log('Close');
// })

// server.listen(50000, () => {
//     console.log('서버가 동작 중 ㅅㄱ, http://127.0.0.1:50000');
// })
// // 웹 서버 종료
// const testClose = function() {
//     server.close();
//     console.log('서버 끔 ㅅㄱ, http://127.0.0.1:50000');
// }
// // 강제 서버 종료 
// setTimeout(testClose, 5000);

//#########################################
// http 모듈 - response 객체
//#########################################

// require('http').createServer((req, res) => {
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     res.end('Hello World!');
// }).listen(50000, () => {
//     console.log('서버가 동작 중 ㅅㄱ, http://127.0.0.1:50000');
// })

//#########################################
// http 모듈 - response 객체, fs 모듈 활용 1
//#########################################

// const fs = require('fs');
// const http = require('http');

// http.createServer((req, res) => {
//     fs.readFile('./Library/HTTP/httpModule1.html', (error, data) => {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end(data);
//     });
// }).listen(50000, () => {
//     console.log('서버가 동작 중임 ㅅㄱ, http://127.0.0.1:50000');
// });

//#########################################
// http 모듈 - response 객체, fs 모듈 활용 2
//#########################################

// const fs = require('fs');
// const http = require('http');

// http.createServer((req, res) => {
//     fs.readFile('./Library/HTTP/img.jpg', (error, data) => {
//         res.writeHead(200, {'Content-Type': 'image/jpeg'});
//         res.end(data);
//     });
// }).listen(50001, () => {
//     console.log('서버가 동작 중임 ㅅㄱ, http://127.0.0.1:50001');
// });

// http.createServer((req, res) => {
//     fs.readFile('./Library/HTTP/music.mp3', (error, data) => {
//         res.writeHead(200, {'Content-Type': 'audio/mp3'});
//         res.end(data);
//     });
// }).listen(50002, () => {
//     console.log('서버가 동작 중임 ㅅㄱ, http://127.0.0.1:50002');
// })

//#########################################
// http 모듈 - request 객체, url 속성 활용
//#########################################

const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    let pathName = url.parse(req.url);
    pathName = url.parse(req.url).pathName;

    if (pathName === '/') {
        fs.readFile('./Library/HTTP/httpModule1.html', (error, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
            console.log(url.parse(req.url));
        });
    } else if (pathName === '/example') {
        fs.readFile('./Library/HTTP/httpModule2.html', (error, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
            console.log(url.parse(req.url));
        });
    }
}).listen(50000, () => {
    console.log('서버가 동작 중임 ㅅㄱ, http://127.0.0.1:50000');
})