const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/dataassociation");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }]
});

module.exports = mongoose.model("user", userSchema);