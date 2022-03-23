// models/Contact.js

let mongoose = require('mongoose');

let contactSchema = mongoose.Schema({
    name:{type:String, required:true, unique:true},
    email:{type:String},
    phone:{type:String}
});

let Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;