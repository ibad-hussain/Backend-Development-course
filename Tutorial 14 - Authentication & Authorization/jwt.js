const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

// Use the cookie-parser middleware
app.use(cookieParser());


// Encrypt the email (data), Set email as jwt token and Set it up as a cookie on the browser
app.get("/", function(req, res) {
    let token = jwt.sign({email: "johndoe@abc.com"}, "secret");
    res.cookie("token", token);
    console.log(token);
    res.send("done");
});


// Read the cookie (sent by the browser) and Decrypt it to get the email (data)
app.get("/read", function(req, res) {
    let data = jwt.verify(req.cookies.token, "secret");
    // console.log(req.cookies.token);
    console.log(data);
});

app.listen(3000);