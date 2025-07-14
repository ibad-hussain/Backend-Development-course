// DATA ASSOCIATION IN MONGODB

const express = require('express');
const app = express();


// Import the created models/collections "users" and "posts"
const userModel = require('./models/user');
const postModel = require('./models/post');


// Create a '/' route
app.get("/", function(req, res) {
    res.send("hello");
});


// Create a '/create' route to create a user
app.get("/create", async function(req, res) {
    let user = await userModel.create({
        username: "ali",
        email: "ali@abc.com",
        age: 25,
    });
    res.send(user);
});


// Create a '/post/create' route to create a post
app.get("/post/create", async (req, res) => {
    let post = await postModel.create({
        postdata: "How are you?",
        user: "67a3978c89a94efb5118edf1"
    });

    let user = await userModel.findOne({_id: "67a3978c89a94efb5118edf1"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
});


// Create a '/users' route to see all the users
app.get("/users", async (req, res) => {
    let users = await userModel.find();
    res.send(users);
});


app.listen(3000);