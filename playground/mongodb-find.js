const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mogodb server');

  // db.collection('Todos').find({
  //   //completed: false
  //   _id: new ObjectID('592755c48e9ebfb8b7dd0970')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos.', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log('Todos count', count);
  }, (err) => {
    console.log('Unable to fetch todos.', err);
  });
  db.close();
});

// http://mongodb.github.io/node-mongodb-native/2.0/api/

//query all users that has name ...
