// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{
if(err)
{
   return console.log('unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

const db = client.db('ToDoApp')
// db.collection('ToDos').insertOne({
// text:'Something to do',
// completed:false
// },(err,result)=>{
//    if(err){
//        return console.log('unable to insert todo',err);
//    }
//    console.log(JSON.stringify(result.ops,undefined,2))
// });
// db.collection('users').insertOne({
// name:'Naman',
// Age:21,
// Location:'Roorkee'
// },(err,result)=>{
//     if(err){
//        return console.log('Unable to insert to database');
//     } 
// console.log(JSON.stringify(result.ops,undefined,2));
// });
// db.collection('ToDos').find().count().then((count)=>{
// console.log(`ToDos count:${count}`);
// console.log(JSON.stringify(count,undefined,2));
// },(err)=>{
//     console.log('Unable to fetch todos',err);
// });
db.collection('users').find({
    name:'Naman'
}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
});
client.close();
});