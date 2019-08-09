const config = require('../../config')
const mongoose = require('mongoose');

let cachedDb = null;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://user-dev-lake:wtrY1UeUkSG9i3ax@devlake-shard-00-00-r1ynp.mongodb.net:27017,devlake-shard-00-01-r1ynp.mongodb.net:27017,devlake-shard-00-02-r1ynp.mongodb.net:27017/test?ssl=true&replicaSet=DevLake-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function (err, client) {
    console.log(err);
    console.log(client);
});

module.exports = connectToDatabase = () => {
    console.log('=> connect to database', cachedDb);

    if (cachedDb) {
        console.log('=> using cached database instance');
        return Promise.resolve(cachedDb);
    }

    return mongoose.createConnection(config.mongodb.uri)
        .then(db => {
            console.log(db);
            cachedDb = db;
            return cachedDb;
        }).catch(err => {
            console.log(err);
        })
}
