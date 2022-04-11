// models/Counter.js

let mongoose = require('mongoose');

// schema
let counterSchema = mongoose.Schema({
    name:{type:String, required:true},
    count:{type:Number, default:0},
});

// model & export
let Counter = mongoose.model('counter', counterSchema);
module.exports = Counter;