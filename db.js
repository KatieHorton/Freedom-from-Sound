const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");

mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;

db.on('open', () => { console.log('Magically Connected to FFS') });
db.on('error', console.error.bind(console, 'FFS connection error'));


module.exports = db;
