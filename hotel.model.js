require ./db;
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const hotelSchema = new mongoose.Schema({
  hotelName: String,
  address: String,
  phone: String,
  quietRank: Num,
  description: String,
  created: { type: Date, default: Date.now },
  author: String
},
  { timestamps: true }
})

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
