```javascript
//Correct usage of $inc operator to decrement
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { sequence: 1 }, $setOnInsert: { sequence: 999 } }, { upsert: true });
```