let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
var methodOverride = require('method-override'); 
let app = express();

// DB setting
mongoose.connect('mongodb+srv://kangdy25:kangdy4173@cluster0.rl3qy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority;');
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
app.use('/', require('./routes/home')); // 1
app.use('/contacts', require('./routes/contacts')); // 2

// Port setting
let port = 3000;
app.listen(port, function() {
    console.log('server on! http://localhost:'+port);
});