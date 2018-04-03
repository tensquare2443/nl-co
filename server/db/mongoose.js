var mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient;

mongoose.Promise = global.Promise;

var databaseUri;
if (process.env.PROD_MONGODB) {
  databaseUri = process.env.PROD_MONGODB;
} else {
  databaseUri = 'mongodb://localhost:27017/NLCO';
}

mongoose.connect(databaseUri, {
  useMongoClient: true
});

module.exports = {mongoose};
