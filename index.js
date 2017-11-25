var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/sample";

MongoClient.connect(url, (err, db) => {
 db.collection("products", (error, collection) => {
  collection.deleteMany(
    { name: /e/g },
    (error, result) => {
      db.close();
    }
  );
 });
});