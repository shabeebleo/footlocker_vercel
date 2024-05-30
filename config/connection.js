const { MongoClient } = require('mongodb');
 
const state = {
    db: null
};

module.exports.connect = function (done) {
    const MONGO_URL = process.env.MONGO_URL;
    const dbname = 'AllIndb';

    // Use new MongoClient constructor
    const client = new MongoClient(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    client.connect((err) => {
        if (err) {
            return done(err);
        }
        console.log('Connected successfully to server');

        const db = client.db(dbname);
        state.db = db;
        done();
    });
};

module.exports.get = function () {
    return state.db;
};
