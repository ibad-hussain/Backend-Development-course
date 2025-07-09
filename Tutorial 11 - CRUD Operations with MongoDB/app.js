const express = require('express');
const app = express();

// Import the created model/collection "users"
const userModel = require('./usermodel');

app.get("/", (req, res) => {
    res.send("hey");
});


// Create Operation
app.get("/create", async (req, res) => {
    let createdUser = await userModel.create({
        name: "ali",
        username: "ibad1",
        email: "ibad@ibad.com"
    });
    
    res.send(createdUser);
});


/// Update Operation
app.get("/update", async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({username: "ibad1"}, {name: "saad"}, {new: true});
    res.send(updatedUser);
});


// Read Operation
app.get("/read", async (req, res) => {
    let users = await userModel.find();
    res.send(users);
});

app.get("/read", async (req, res) => {
    let users = await userModel.find({name: "saad"});
    res.send(users);
});

app.get("/read", async (req, res) => {
    let users = await userModel.findOne();
    res.send(users);
});

app.get("/read", async (req, res) => {
    let users = await userModel.findOne({name: "saad"});
    res.send(users);
});


// Delete Operation
app.get("/delete", async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({name: "saad"});
    res.send(deletedUser);
});

app.listen(3000);