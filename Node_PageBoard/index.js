// index.js

let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let app = express();

// DB setting
mongoose.connect('mongodb+srv://PageBoard:kangdy4173@cluster0.rl3qy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
let db = mongoose.connection;
db.once('open', function(){
    console.log('DB connected');
});
db.on('error', function(err){
    console.log('DB ERROR : ', err);
});

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// Routes
app.use('/', require('./routes/home'));
app.use('/posts', require('./routes/posts')); // 1

// Port setting
let port = 3000;
app.listen(port, function(){
    console.log('server on! http://localhost:'+port);
});