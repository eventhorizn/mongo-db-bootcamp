const mongodb = require('mongodb');
const { call } = require('body-parser');
const MongoClient = mongodb.MongoClient;
const mongoDbUrl = 'mongodb+srv://garyRW:gary@testcluster.ntaj6.azure.mongodb.net/shop?retryWrites=true&w=majority';

let _db;

const initDb = callback => {
    if (_db) {
        console.log('Database is already initialized');
        return callback(null);
    }

    MongoClient.connect(mongoDbUrl)
        .then(client => {
            _db = client;
            callback(null, _db);
        })
        .catch(err => {
        callback(err);
    });
};

const getDb = () => {
    if (!_db) {
        throw Error('Database not initialized');
    }

    return _db;
};

module.exports = {
    initDb,
    getDb
};