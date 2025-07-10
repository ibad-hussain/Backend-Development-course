// SERVER SIDE RENDERING WITH EJS AND NODEJS

// Import Modules
const express = require('express');
const app = express();
const path = require('path');


// Import the created model/collection "users"
const userModel = require('./models/user');


// Setting up ejs as view engine
app.set("view engine", "ejs");


// Setting up parsers for form
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Setting up a middleware for accessing public static files
app.use(express.static(path.join(__dirname, "public")));


// Create a '/' route to render index.ejs and for form submission
app.get("/", (req, res) => {
    res.render("index");
});


// Create a '/create' route for CREATE Operation using form submission
app.post("/create", async (req, res) => {
    let {name, email, image} = req.body;
    let createdUser = await userModel.create( {
        name,       // name: name,
        email,      // email: email,
        image       // image: image
    });
    res.redirect("/all-users");
});

// Alternative method for above '/create' route
    // app.post("/create", (req, res) => {
    //     let createdUser = userModel.create( {
    //         name: req.body.name,
    //         email: req.body.email,
    //         image: req.body.image
    //     });
    //     res.redirect("/");
    // });


// Create a '/all-users' route for READ Operation and render all-users.ejs
app.get("/all-users", async (req, res) => {
    let users = await userModel.find();
    res.render("all-users", {users});
});


// Create a '/delete' route for DELETE Operation
app.get("/delete/:userid", async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({_id: req.params.userid});
    res.redirect("/all-users");
});


// /Create a '/edit' route to render edit.ejs and for form submission
app.get("/edit/:userid", async (req, res) => {
    let user = await userModel.findOne({_id: req.params.userid});
    res.render("edit", {user});
});


// Create a '/update' route for UPDATE Operation using form submission
app.post("/update/:userid", async (req, res) => {
    let {name, email, image} = req.body;
    let updatedUser = await userModel.findOneAndUpdate({_id: req.params.userid}, {name, email, image}, {new: true});
    res.redirect("/all-users");
});


// Setup port for server
app.listen(3000);



// Image URLs
    // https://img.freepik.com/premium-vector/character-guy-avatar-internet_24877-17026.jpg?w=740
    // https://img.freepik.com/premium-vector/character-guy-avatar-internet_24877-17028.jpg?w=740
    // https://img.freepik.com/premium-vector/character-guy-avatar-internet_24877-17032.jpg?w=740
    // https://img.freepik.com/premium-vector/character-guy-avatar-internet_24877-17025.jpg?w=740
    // https://img.freepik.com/premium-vector/character-guy-avatar-internet_24877-17034.jpg?w=740
    // https://img.freepik.com/premium-vector/person-design_24911-25401.jpg?w=740
    // https://img.freepik.com/premium-vector/young-man-avatar-isolated-icon-vector-illustration-design_24877-15466.jpg?w=740