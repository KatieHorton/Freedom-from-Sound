require ./db;
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  displayName: String,
  description: String,
  created: { type: Date, default: Date.now }

},
  { timestamps: true }
})

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

const User = mongoose.model('User', userSchema);

module.exports = User;
