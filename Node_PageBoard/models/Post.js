// models/Post.js

let mongoose = require('mongoose');

// schema
let postSchema = mongoose.Schema({ // 1
    title:{type:String, required:[true,'Title is required!']}, // 1
    body:{type:String, required:[true,'Body is required!']},   // 1,
    author:{type:mongoose.Schema.Types.ObjectId, ref:'user', required:true}, // 1
    createdAt:{type:Date, default:Date.now}, // 2
    updatedAt:{type:Date},
});

// model & export
let Post = mongoose.model('post', postSchema);
module.exports = Post;