const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.get("/", function(req, res) {

    // bcrypt Function (1) for Encryption
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("password", salt, function(err, hash) {
            console.log(salt);
            console.log(hash);
        });
    });

    // bcrypt Function (2) for Encryption
    bcrypt.hash("password", 10, function(err, hash) {
        console.log(hash);
    });

    // bcrypt Function for Decryption
    bcrypt.compare("password", "$2b$10$LexsgClmvBSljj/TIA5xw.SNEWg0H1Ewn3v2UQI.nu/snhTWH5XJC", function(err, result) {
        console.log(result);
    });
    
});

app.listen(3000);