const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// Use the cookie-parser middleware
app.use(cookieParser());

app.get("/", function(req, res) {
    res.cookie("name", "hero");     // use 'res.cookie' to set cookie
    res.send("done");
});

app.get("/read", function(req, res) {
    console.log(req.cookies);       // use 'req.cookies' to read cookie
    res.send("Read page");
});

app.listen(3000);