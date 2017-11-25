var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/sample";

MongoClient.connect(url, (err, db) => {
  db.createCollection("test", (err, collection) => {
    console.log(collection.collectionName);
    db.close();    
  });
});

// 一覧表示
db.listCollections().toArray((err, items) => {
  for (let item of items) {
    console.log(item.name);
  }
});

// collection名の変更
db.renameCollection("test", "test_new", (err, collection) => {
  console.log(collection.collectionName);
  db.close();
});

// collectionの削除
db.dropCollection("test_new", (error) => {
  db.close();
});
