// Requiring config file for environment fixed problem of process.env.MONGODB_URI being undefined
require('../config/config');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose
};