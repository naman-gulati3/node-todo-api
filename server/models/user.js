
var mongoose = require('mongoose');
var user = mongoose.model('users',{
    text:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
    });
    module.exports={user}