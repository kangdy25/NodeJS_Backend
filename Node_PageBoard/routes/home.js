// routes/home.js

let express = require('express');
let router = express.Router();

// Home
router.get('/', function(req, res){
    res.render('home/welcome');
});
router.get('/about', function(req, res){
    res.render('home/about');
});

module.exports = router;