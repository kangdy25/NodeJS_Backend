// models/File.js

let mongoose = require('mongoose');
let fs = require('fs'); 
let path = require('path');

// schema
let fileSchema = mongoose.Schema({ 
    originalFileName:{type:String},
    serverFileName:{type:String},
    size:{type:Number},
    uploadedBy:{type:mongoose.Schema.Types.ObjectId, ref:'user', required:true},
    postId:{type:mongoose.Schema.Types.ObjectId, ref:'post'},
    isDeleted:{type:Boolean, default:false},
});

// instance methods // 3
fileSchema.methods.processDelete = function(){ 
    this.isDeleted = true;
    this.save();
};

fileSchema.methods.getFileStream = function(){
    let stream;
    let filePath = path.join(__dirname,'..','uploadedFiles',this.serverFileName); // 5-1
    let fileExists = fs.existsSync(filePath); 
    if(fileExists){ // 5-3
        stream = fs.createReadStream(filePath);
    }
    else { // 5-4
        this.processDelete();
    }
      return stream; // 5-5
};

// model & export
let File = mongoose.model('file', fileSchema);

// model methods
File.createNewInstance = async function(file, uploadedBy, postId){ // 2
    return await File.create({
        originalFileName:file.originalname,
        serverFileName:file.filename,
        size:file.size,
        uploadedBy:uploadedBy,
        postId:postId,
    });
};

module.exports = File;