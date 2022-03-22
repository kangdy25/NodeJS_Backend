// index.js

let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser'); // 1
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// DB schema 
let contactSchema = mongoose.Schema({
    name:{type:String, required:true, unique:true},
    email:{type:String},
    phone:{type:String}
});
let Contact = mongoose.model('contact', contactSchema); // 5

// Routes
// Home // 6
app.get('/', function(req, res){
    res.redirect('/contacts');
});
  // Contacts - Index // 7
app.get('/contacts', function(req, res){
    Contact.find({}, function(err, contacts){
        if(err) return res.json(err);
        res.render('contacts/index', {contacts:contacts});
    });
});
  // Contacts - New // 8
app.get('/contacts/new', function(req, res){
    res.render('contacts/new');
});
  // Contacts - create // 9
app.post('/contacts', function(req, res){
    Contact.create(req.body, function(err, contact){
        if(err) return res.json(err);
        res.redirect('/contacts');
    });
});

// Port setting
let port = 3000;
app.listen(port, function(){
    console.log('server on! http://localhost:'+port);
});