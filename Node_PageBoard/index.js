// index.js

let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let flash = require('connect-flash'); 
let session = require('express-session'); 
let passport = require('./config/passport'); 
let util = require('./util');
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
app.use(flash()); // 2
app.use(session({secret:'MySecret', resave:true, saveUninitialized:true})); //3

// Passport // 2
app.use(passport.initialize());
app.use(passport.session());

// Custom Middlewares // 3
app.use(function(req,res,next){
    res.locals.isAuthenticated = req.isAuthenticated();
    res.locals.currentUser = req.user;
    next();
});

// Routes
app.use('/', require('./routes/home'));
app.use('/posts', util.getPostQueryString, require('./routes/posts')); 
app.use('/users', require('./routes/users')); 
app.use('/comments', util.getPostQueryString, require('./routes/comments')); // 1

// Port setting
let port = 3000;
app.listen(port, function(){
    console.log('server on! http://localhost:'+port);
});
