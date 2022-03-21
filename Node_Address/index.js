// index.js

let express = require('express');
let mongoose = require('mongoose');
let app = express();

// DB setting
mongoose.connect('mongodb+srv://kangdy25:kangdy4173@cluster0.rl3qy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority;') // 1
let db = mongoose.connection; //2
//3
db.once('open', function(){
    console.log('DB connected');
});
//4
db.on('error', function(err){
    console.log('DB ERROR : ', err);
});

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

// Port setting
let port = 3000;
app.listen(port, function(){
    console.log('server on! http://localhost:'+port);
});