// Setting up ejs for ejs pages
    // install ejs from npm
    // set up ejs as a view engine


const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("index");
})

app.listen(3000, function() {
    console.log("Server is running");
})