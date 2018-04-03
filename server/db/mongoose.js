var mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient;

mongoose.Promise = global.Promise;

var databaseUri;
if (process.env.PROD_MONGODB) {
  console.log('ENV VAR TRUE ' + process.env.PROD_MONGODB);
  databaseUri = process.env.PROD_MONGODB;
} else {
  console.log('ENV VAR FALSE');
  databaseUri = 'mongodb://localhost:27017/NLCO';
}

console.log('PROD_MONGODB = ' + databaseUri);

mongoose.connect(databaseUri, {
  useMongoClient: true
});

module.exports = {mongoose};
