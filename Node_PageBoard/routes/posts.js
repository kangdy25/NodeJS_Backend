// routes/posts.js

let express  = require('express');
let router = express.Router();
let Post = require('../models/Post');
let util = require('../util'); 

// Index
router.get('/', async function(req, res){ // 1
    let page = Math.max(1, parseInt(req.query.page));   // 2
    let limit = Math.max(1, parseInt(req.query.limit)); // 2
    page = !isNaN(page)?page:1;                         // 3
    limit = !isNaN(limit)?limit:10;                     // 3

    let skip = (page-1)*limit; // 4
    let count = await Post.countDocuments({}); // 5
    let maxPage = Math.ceil(count/limit); // 6
    let posts = await Post.find({}) // 7
        .populate('author')
        .sort('-createdAt')
        .skip(skip)   // 8
        .limit(limit) // 8
        .exec();
    
    res.render('posts/index', {
        posts:posts,
        currentPage:page, // 9
        maxPage:maxPage,  // 9
        limit:limit       // 9
    });
});

// New
router.get('/new', util.isLoggedin, function(req, res){
    let post = req.flash('post')[0] || {};
    let errors = req.flash('errors')[0] || {};
    res.render('posts/new', { post:post, errors:errors });
});

  // create
router.post('/', util.isLoggedin, function(req, res){
    req.body.author = req.user._id;
    Post.create(req.body, function(err, post){
        if(err){
            req.flash('post', req.body);
            req.flash('errors', util.parseError(err));
            return res.redirect('/posts/new');
        }
        res.redirect('/posts');
    });
});

// show
router.get('/:id', function(req, res){
    Post.findOne({_id:req.params.id}) // 3
      .populate('author')             // 3
      .exec(function(err, post){      // 3
        if(err) return res.json(err);
        res.render('posts/show', {post:post});
    });
});

// edit
router.get('/:id/edit', util.isLoggedin, checkPermission, function(req, res){
    let post = req.flash('post')[0];
    let errors = req.flash('errors')[0] || {};
    if(!post){
        Post.findOne({_id:req.params.id}, function(err, post){
            if(err) return res.json(err);
            res.render('posts/edit', { post:post, errors:errors });
        });
    }
    else {
        post._id = req.params.id;
        res.render('posts/edit', { post:post, errors:errors });
    }
});

  // update
router.put('/:id', util.isLoggedin, checkPermission, function(req, res){
    req.body.updatedAt = Date.now();
    Post.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true}, function(err, post){
        if(err){
            req.flash('post', req.body);
            req.flash('errors', util.parseError(err));
            return res.redirect('/posts/'+req.params.id+'/edit');
        }
        res.redirect('/posts/'+req.params.id);
    });
});

// destroy
router.delete('/:id', util.isLoggedin, checkPermission, function(req, res){
    Post.deleteOne({_id:req.params.id}, function(err){
        if(err) return res.json(err);
        res.redirect('/posts');
    });
});

module.exports = router;

// private functions // 1
function checkPermission(req, res, next){
    Post.findOne({_id:req.params.id}, function(err, post){
        if(err) return res.json(err);
        if(post.author != req.user.id) return util.noPermission(req, res);
    
        next();
    });
}