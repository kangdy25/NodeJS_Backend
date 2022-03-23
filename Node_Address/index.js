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

// DB schema
let contactSchema = mongoose.Schema({
    name:{type:String, required:true, unique:true},
    email:{type:String},
    phone:{type:String}
});
let Contact = mongoose.model('contact', contactSchema);

// Routes
// Home
app.get('/', function(req, res){
    res.redirect('/contacts');
});
// Contacts - Index
app.get('/contacts', function(req, res) {
    Contact.find({}, function(err, contacts) {
        // if(err) return res.json(err); 혹시 몰라서 지우진 않는다!!
        res.render('contacts/index', {contacts:contacts});
    });
});
// Contacts - New
app.get('/contacts/new', function(req, res) {
    res.render('contacts/new');
});
// Contacts - create
app.post('/contacts', function(req, res) {
    Contact.create(req.body, function(err, contact) {
        if(err) return res.json(err);
        res.redirect('/contacts');
    });
});
// Contacts - show 
app.get('/contacts/:id', function(req, res) {
    Contact.findOne({_id:req.params.id}, function(err, contact) {
        // if(err) return res.json(err); 혹시 몰라서 지우진 않는다!! 
        res.render('contacts/show', {contact:contact});
    });
});
// Contacts - edit 
app.get('/contacts/:id/edit', function(req, res) {
    Contact.findOne({_id:req.params.id}, function(err, contact) {
        // if(err) return res.json(err); 혹시 몰라서 지우진 않는다!!
        res.render('contacts/edit', {contact:contact});
    });
});
// Contacts - update 
app.put('/contacts/:id', function(req, res) {
    Contact.findOneAndUpdate({_id:req.params.id}, req.body, function(err, contact){
        // if(err) return res.json(err); 혹시 몰라서 지우진 않는다!!
        res.redirect('/contacts/'+req.params.id);
    });
});
// Contacts - destroy 
app.delete('/contacts/:id', function(req, res) {
    Contact.deleteOne({_id:req.params.id}, function(err){
        // if(err) return res.json(err); 혹시 몰라서 지우진 않는다!!
        res.redirect('/contacts');
    });
});

// Port setting
let port = 3000;
app.listen(port, function() {
    console.log('server on! http://localhost:'+port);
});