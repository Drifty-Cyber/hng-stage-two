const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A person must have a name'],
    unique: true,
  },
  age: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
