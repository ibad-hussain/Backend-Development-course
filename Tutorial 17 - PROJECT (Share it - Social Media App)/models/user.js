const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shareit");

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    age: Number,
    profilepic: {
        type: String,
        default: "default.jpg"
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }]
});

module.exports = mongoose.model("user", userSchema);

