// Intoduction to Express JS


// Routing

const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("Hello world");
})
app.get("/profile", function(req, res) {
    res.send("Welcome to your profile");
})
app.listen(3000);



// Middleware

const express = require('express');
const app = express();

app.use(function(req, res, next) {
    console.log("Request received by middleware #1");
    next();
})
app.use(function(req, res, next) {
    console.log("Request received by middleware #2");
    next();
})
app.get("/", function(req, res) {
    res.send("Hello world");
})
app.listen(3000);



// Error handling

const express = require('express');
const app = express();

app.use(function(req, res, next) {
    console.log("Request received by middleware");
    next();
})
app.get("/profile", function(req, res, next) {
    return next(new Error("Something went wrong"));
})
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Page not found");
})
app.listen(3000);
