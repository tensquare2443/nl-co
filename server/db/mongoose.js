var mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient;

mongoose.Promise = global.Promise;

var databaseUri;
if (process.env.MONGODB_URI) {
  databaseUri = process.env.MONGODB_URI;
} else {
  databaseUri = 'mongodb://localhost:27017/NLCO';
}

mongoose.connect(databaseUri, {
  useMongoClient: true
});

module.exports = {mongoose};
