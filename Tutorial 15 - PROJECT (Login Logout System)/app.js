// Import Modules
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Import the created model/collection "users"
const userModel = require('./models/user');


// Setting up ejs as view engine
app.set("view engine", "ejs");


// Setting up parsers for form
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Setting up a middleware for accessing public static files
app.use(express.static(path.join(__dirname, "public")));


// Use the cookie-parser middleware
app.use(cookieParser());


// Create a '/' route to render index.ejs and for form submission
app.get("/", (req, res) => {
    res.render("index");
});


// Create a '/create' route for CREATE Operation using form submission, Also creating hash from the password using bcrypt, Also setting cookie using jwt, Also rendering profile.ejs
app.post("/create", (req, res) => {
    let {username, email, password, age} = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createdUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            });

            let token = jwt.sign({email}, "secret");
            res.cookie("token", token);
            res.render("profile", {lowerName: req.body.username.replaceAll(' ', '').toLowerCase(), username, email, password, age});
        });
    });

});


// Create a '/logout' route to get logout from the account, Also resetting the cookie to none, Also rendering logout.ejs
app.get("/logout", (req, res) => {
    res.cookie("token", "");
    res.render("logout");
});


// Create a '/login' to render login.ejs
app.get("/login", (req, res) => {
    res.render("login");
});


// Create a '/login' to login in the account (previously created) checking email and password to be correct from the database, Also setting cookie using jwt, Also rendering profile.ejs, Also rendering error.ejs if email/password is wrong
app.post("/login", async (req, res) => {
    let user = await userModel.findOne({email: req.body.email});
    // console.log(user);
    if (!user) return res.render("error");
    // console.log(user.password, req.body.password);
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        // console.log(result);
        if (result) {
            let token = jwt.sign({email: user.email}, "secret");
            res.cookie("token", token);
            res.render("profile", {lowerName : user.username.replaceAll(' ', '').toLowerCase(), username: user.username, email: user.email, password: user.password, age: user.age})
        }
        else {
            res.render("error");
        }
    })

});


// Create a '/users' route to check all the registered users
app.get("/users", async (req, res) => {
    let users = await userModel.find();
    res.send(users);
});


// Setup port for server
app.listen(3000);