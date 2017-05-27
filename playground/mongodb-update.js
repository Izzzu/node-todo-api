const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mogodb server');


  db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID("59298a43a115a6bfc32afdd5")
    }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }).then((result) => {
    console.log(result);
  })

  //change name w users + increment age w users

  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("5927581c571ecfb8c8ca40ba")
    }, {
      $set: {
        name: 'Stefan'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
    console.log(result);
  })


  db.close();
});
