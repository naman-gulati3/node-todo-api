var express=require ('express');
var bodyparser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');
var app = express();
app.use(bodyparser.json());
app.post('/todos',(req,res)=>{
var todo = new Todo({
text: req.body.text
});
todo.save().then((doc)=>{
res.send(doc);
},(e) =>{
re.status(400).send(e);
});

});

app.listen(3000,()=>{
console.log('started on port 3000');
});