const express = require('express');
const app = express();

app.use('/' ,express.static(`${__dirname}/public`));
app.use((req, res)=>{
    res.writeHead('200', {'Content-Type' : 'text/html;charset=utf8'});
    res.end(`<img src='./ballon.jpg'/>`);
});

app.listen(3000, ()=>{
    console.log('연결됨 ㅅㄱ');
})
