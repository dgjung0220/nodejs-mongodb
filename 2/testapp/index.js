var MongoClient = require('mongodb').MongoClient;

var connectionUrl = 'mongodb://127.0.0.1:27017/myproject', sampleColletion = 'chapters';

var chapters = [
  {
    'Title' : '데이터베이스 시스템',
    'Author' : '이석호'
  },
  {
    'Title' : '국가란 무엇인가',
    'Author' : '유시민'
  }
];

MongoClient.connect(connectionUrl, function(err,db){
  console.log("Connected correctly to server.");

  var collection = db.collection(sampleColletion);
  collection.insert(chapters, function(error, result) {
    if(!error) {
      console.log("Success :"+result.ops.length+" chapters inserted!");
    } else {
      console.log("Some error was encountered!");
    }
    db.close();
  })
})