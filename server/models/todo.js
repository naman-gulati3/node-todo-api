var mongoose = require('mongoose');
var Todo = mongoose.model('Todo',{
    text:{
    type:String,
    required: true,
    minlength:1
    },
    completed:{
    type:Boolean,
    default:false
    },
    completedAt:{
    type:Number
    }
    });
    var newtodo = new Todo({
    text:'Cook'
    });
    var newdo = new Todo({
    text:'Exercise',
    completed:false,
    completedAt:1142
    });
    module.exports = {Todo};
    