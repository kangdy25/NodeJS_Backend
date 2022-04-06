// routes/posts.js

let express  = require('express');
let router = express.Router();
let Post = require('../models/Post');
let util = require('../util'); 

// Index
router.get('/', async function(req, res){ 
    let page = Math.max(1, parseInt(req.query.page));   
    let limit = Math.max(1, parseInt(req.query.limit)); 
    page = !isNaN(page)?page:1;                         
    limit = !isNaN(limit)?limit:10;                     

    let searchQuery = createSearchQuery(req.query); 

    let skip = (page-1)*limit; 
    let count = await Post.countDocuments(searchQuery);
    let maxPage = Math.ceil(count/limit); 
    let posts = await Post.find(searchQuery) 
        .populate('author')
        .sort('-createdAt')
        .skip(skip)  
        .limit(limit)
        .exec();
    
    res.render('posts/index', {
        posts:posts,
        currentPage:page, 
        maxPage:maxPage,  
        limit:limit,
        searchType:req.query.searchType, 
        searchText:req.query.searchText         
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
            return res.redirect('/posts/new'+res.locals.getPostQueryString());
        }
        res.redirect('/posts'+res.locals.getPostQueryString(false, {page:1, searchText:''}));
    });
});

function createSearchQuery(queries){ 
    let searchQuery = {};
    if(queries.searchType && queries.searchText && queries.searchText.length >= 2){
        let searchTypes = queries.searchType.toLowerCase().split(',');
        let postQueries = [];
        if(searchTypes.indexOf('title')>=0){
            postQueries.push({ title: { $regex: new RegExp(queries.searchText, 'i') } });
        }
        if(searchTypes.indexOf('body')>=0){
            postQueries.push({ body: { $regex: new RegExp(queries.searchText, 'i') } });
        }
        if(postQueries.length > 0) searchQuery = {$or:postQueries};
    }
    return searchQuery;
}

// show
router.get('/:id', function(req, res){
    Post.findOne({_id:req.params.id}) 
        .populate('author')             
        .exec(function(err, post){      
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
            return res.redirect('/posts/'+req.params.id+'/edit'+res.locals.getPostQueryString());
        }
        res.redirect('/posts/'+req.params.id+res.locals.getPostQueryString());
    });
});

// destroy
router.delete('/:id', util.isLoggedin, checkPermission, function(req, res){
    Post.deleteOne({_id:req.params.id}, function(err){
        if(err) return res.json(err);
        res.redirect('/posts'+res.locals.getPostQueryString()); 
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