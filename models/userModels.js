const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  breed: {
    type: String,
    default:'Desi',
  },
  age: {
    type: Number,
    required: false,
  },
  
  age: {
    type: Boolean,
    default: false,
  },
  
  healthstatus: {
    type: Array,
    default: [],
  },
  
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
