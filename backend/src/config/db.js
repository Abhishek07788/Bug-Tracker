const mongoose = require("mongoose");
// -------------- (MongoDb Connection) -------------
const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/bugs_tracker");
};

module.exports = connect;
