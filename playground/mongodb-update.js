const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mogodb server');


  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  })

  //to samo z users


  db.close();
});
