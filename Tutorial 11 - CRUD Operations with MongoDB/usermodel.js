// Require Mongoose
const mongoose = require('mongoose');

// Connecting to the MongoDB database
mongoose.connect('mongodb://localhost:27017/mongopractice');

// Creating Schema for documents
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})

// Creating Collection "users" and exporting it so that we can use anywhere
module.exports = mongoose.model("user", userSchema);