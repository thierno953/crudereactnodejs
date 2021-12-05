const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

// how our document look like
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const User = mongoose.model('User', userSchema);

module.exports = User;