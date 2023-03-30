const mongoose = require("mongoose");
// -------------- (MongoDb Connection) -------------
const connect = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

module.exports = connect;
