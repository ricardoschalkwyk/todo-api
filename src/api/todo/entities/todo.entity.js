const mongoose = require("mongoose");

// Creating a shema with mongoose

// This is the structure of a todo

const todoSchema = new mongoose.Schema({
  title: String,

  // This userId is added to every todo so that it can be traced to
  // the user that made it
  userId: String,
});

module.exports = mongoose.model("todo", todoSchema);
