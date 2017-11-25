// document 作成
db.collection("products", (error, collection) => {
  collection.insertMany([
    { name: "pen", price: 120 },
    { name: "note", price: 100 }
  ], (error, result) => {
    db.close();
  });
 });

 // document 検索
 db.collection("products", (error, collection) => {
  collection
    .find({ name: { $regex: /e/g } })
    .toArray((err, items) => {
      for (let item of items) {
        console.log(item.name);
      }
      db.close();
    });
 });

 // document 更新
 db.collection("products", (error, collection) => {
  collection.updateMany(
    { name: /e/g },
    { $inc: { price: 20 } }, // 20円プラス
    (error, result) => {
      db.close();
    }
  );
 });