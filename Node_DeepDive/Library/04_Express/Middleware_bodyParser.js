const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// application/x=www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended: false}));

// application/json 파싱
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/login`));

app.use((req, res) => {
    const userId = req.body.userid || req.query.userid;
    const userPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type' : 'text/html;charset=utf8'});
    res.write('<h1>Login ID와 PW 결과 값입니다.</h1>');
    res.write(`<div><p>${userId}</p></div>`);
    res.write(`<div><p>${userPassword}</p></div>`);
    res.end(JSON.stringify(req.body, null, 2));
});

app.listen(3000, ()=>{
    console.log('Server is running port 3000!')
})