// Dynamic routing
    // Portion of a URL that changes dynamically can be handled at the backend


const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("Hello world");
})

app.get("/profile/:username", function(req, res) {
    res.send(`welcome, ${req.params.username}`);
})

app.get("/profile/:username/:age", function(req, res) {
    res.send(`welcome, ${req.params.username} of age ${req.params.age}`);
})

app.get("/profile/:username/:age/:gender", function(req, res) {
    res.send(req.params);
})

app.listen(3000, function() {
    console.log("Server is running");
})