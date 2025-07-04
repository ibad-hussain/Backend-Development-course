// Setting up public static files
    // Files include images, videos, css files, vanilla javascript


const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')

app.get("/", function(req, res) {
    res.render("index");
})

app.listen(3000, function() {
    console.log("Server is running");
})

    
    
// what is __dirname
// console.log(__dirname)