// models/Post.js

let mongoose = require('mongoose');
let Counter = require('./Counter');

// schema
let postSchema = mongoose.Schema({ // 1
    title:{type:String, required:[true,'Title is required!']}, // 1
    body:{type:String, required:[true,'Body is required!']},   // 1,
    author:{type:mongoose.Schema.Types.ObjectId, ref:'user', required:true}, // 1
    views:{type:Number, default:0}, // 1
    numId:{type:Number}, // 2
    createdAt:{type:Date, default:Date.now}, // 2
    updatedAt:{type:Date}
});

postSchema.pre('save', async function (next){ // 3
    let post = this;
    if(post.isNew){
        counter = await Counter.findOne({name:'posts'}).exec();
        if(!counter) counter = await Counter.create({name:'posts'});
        counter.count++;
        counter.save();
        post.numId = counter.count;
    }
    return next();
});

// model & export
let Post = mongoose.model('post', postSchema);
module.exports = Post;