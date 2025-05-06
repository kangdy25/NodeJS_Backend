//#########################################
// http 모듈 - event
//#########################################

// 웹 서버 생성과 실행
const http = require('http');
const server = http.createServer();

// 이벤트 연결
server.on('request', () => {
    console.log('Request');
})

server.on('connection', () => {
    console.log('Connection');
})

server.on('close', () => {
    console.log('Close');
})

server.listen(50000, () => {
    console.log('서버가 동작 중 ㅅㄱ, http://127.0.0.1:50000');
})
// 웹 서버 종료
const testClose = function() {
    server.close();
    console.log('서버 끔 ㅅㄱ, http://127.0.0.1:50000');
}
// 강제 서버 종료 
setTimeout(testClose, 5000);

//#########################################
// http 모듈 - response 객체
//#########################################

require('http').createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('Hello World!');
}).listen(50000, () => {
    console.log('서버가 동작 중 ㅅㄱ, http://127.0.0.1:50000');
})

//#########################################
// http 모듈 - response 객체, fs 모듈 활용 1
//#########################################

const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.readFile('./Library/02_HTTP/httpModule1.html', (error, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(50000, () => {
    console.log('서버가 동작 중임 ㅅㄱ, http://127.0.0.1:50000');
});

//#########################################
// http 모듈 - response 객체, fs 모듈 활용 2
//#########################################

const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.readFile('./Library/02_HTTP/img.jpg', (error, data) => {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data);
    });
}).listen(50001, () => {
    console.log('서버가 동작 중임 ㅅㄱ, http://127.0.0.1:50001');
});

http.createServer((req, res) => {
    fs.readFile('./Library/02_HTTP/music.mp3', (error, data) => {
        res.writeHead(200, {'Content-Type': 'audio/mp3'});
        res.end(data);
    });
}).listen(50002, () => {
    console.log('서버가 동작 중임 ㅅㄱ, http://127.0.0.1:50002');
})

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
        fs.readFile('./Library/02_HTTP/httpModule1.html', (error, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
            console.log(url.parse(req.url));
        });
    } else if (pathName === '/example') {
        fs.readFile('./Library/02_HTTP/httpModule2.html', (error, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
            console.log(url.parse(req.url));
        });
    }
}).listen(50000, () => {
    console.log('서버가 동작 중임 ㅅㄱ, http://127.0.0.1:50000');
})

//#########################################
// http 모듈 - request 객체, method 속성 GET
//#########################################

const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const get = url.parse(req.url, true).query;

    if (req.method === 'GET') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(`<h1>${JSON.stringify(get)}</h1>`);
        console.log(`${req.method}방식의 요청입니다.`);
    } else if (req.method === 'POST') {
        console.log(`${req.method}방식의 요청입니다.`);
    }
}).listen(50000, () => {
    console.log('서버가 동작 중임 ㅅㄱ, http://127.0.0.1:50000');
})

//#########################################
// http 모듈 - request 객체, method 속성 POST
//#########################################

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./Library/02_HTTP/POST.html', (error, data)=>{
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
            console.log(`${req.method}방식의 요청입니다.`);
        });
    } else if (req.method === 'POST') {
        req.on('data', (data)=>{
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
            console.log(`${req.method}방식의 요청입니다.`);
        })
    }
}).listen(50000, () => {
    console.log('서버가 동작 중임 ㅅㄱ, http://127.0.0.1:50000');
})

//#########################################
// http 모듈 - 쿠키(cookie) 생성
//#########################################

const http = require('http');

http.createServer((req, res) => {
    // Cookie
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' : ['latte = horse', 'maria = horse'],
    });
    // Cookie output
    res.end(`<h1>${req.headers.cookie}</h1>`);
    }).listen(50000, () => {
    console.log('서버가 동작 중임 ㅅㄱ, http://127.0.0.1:50000');
})

//#########################################
// http 모듈 - 쿠키(cookie) 추출
//#########################################

const http = require('http');

http.createServer((req, res) => {
    // Get Cookie
    if (req.headers.cookie) {
        const cookie = req.headers.cookie.split(';').map((element)=>{
            element = element.split('=');
            return {
                name: element[0],
                value: element[1],
            };
        });
        res.end(`<h1>${JSON.stringify(cookie)}</h1>`);
    } else {
        res.writeHead(200, {
            'Content-Type' : 'text/html',
            'Set-Cookie' : ['latte = horse', 'maria = horse'],
        });
        res.end(`<h1>${'쿠키 생성함'}</h1>`);
    }
    }).listen(50000, () => {
    console.log('서버가 동작 중임 ㅅㄱ, http://127.0.0.1:50000');
})