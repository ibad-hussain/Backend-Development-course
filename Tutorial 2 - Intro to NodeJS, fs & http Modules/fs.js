// Working with fs (File System) module


const fs = require('fs');


// Create a file
fs.writeFile("hi.txt", "Hi, how are you?", function(err) {
    if(err) console.error(err);
    else console.log("File created");
})


// Append in a file
fs.appendFile("hi.txt", " Are you free tomorrow?", function(err) {
    if(err) console.error(err);
    else console.log("Content appended");
})
fs.appendFile("hi2.txt", " Are you free tomorrow?", function(err) {
    if(err) console.error(err);
    else console.log("Content appended");
})


// Rename a file
fs.rename("you.txt", "me.txt", function(err) {
    if(err) console.error(err);
    else console.log("File renamed");
})
fs.rename("you1.txt", "me1.txt", function(err) {
    if(err) console.error(err);
    else console.log("File renamed");
})


// Copy a file
fs.copyFile("hi.txt", "./copy/copy.txt", function(err) {
    if(err) console.error(err);
    else console.log("File copied");
})
fs.copyFile("hi.txt", "./copy2/copy.txt", function(err) {
    if(err) console.error(err);
    else console.log("File copied");
})
fs.copyFile("hi3.txt", "./copy/copy.txt", function(err) {
    if(err) console.error(err.message);
    else console.log("File copied");
})


// Read a file
fs.readFile("hi.txt", "utf-8", function(err, data) {
    if(err) console.error(err);
    else {
        console.log("Read a file");
        console.log(data);
    }
})
fs.readFile("hi.txt", function(err, data) {
    if(err) console.error(err);
    else {
        console.log("Read a file");
        console.log(data);
    }
})


// Delete a file
fs.unlink("hi3.txt", function(err) {
    if(err) console.error(err);
    else console.log("File deleted");
})
fs.unlink("hi4.txt", function(err) {
    if(err) console.error(err);
    else console.log("File deleted");
})


// Create a folder
fs.mkdir("newFolder", function(err) {
    if(err) console.error(err);
    else console.log("Folder created");
})
fs.mkdir("./new/newFolder", function(err) {
    if(err) console.error(err);
    else console.log("Folder created");
})
fs.mkdir("./one/newFolder2", {recursive: true}, function(err) {
    if(err) console.error(err);
    else console.log("Folder created");
})
fs.mkdir("./one/two/newFolder2", {recursive: true}, function(err) {
    if(err) console.error(err);
    else console.log("Folder created");
})


// Read a folder
fs.readdir("example", function(err, files) {
    if(err) console.error(err);
    else {
        console.log("Read a folder");
        console.log(files);
    }
})


// Delete a folder
fs.rmdir("./empty", function(err) {
    if(err) console.error(err);
    else console.log("Folder deleted");
})
fs.rmdir("./non-empty", function(err) {
    if(err) console.error(err);
    else console.log("Folder deleted");
})
fs.rmdir("./non-empty", {recursive: true}, function(err) {
    if(err) console.error(err);
    else console.log("Folder deleted");
})
fs.rm("./empty", function(err) {
    if(err) console.error(err);
    else console.log("Folder deleted");
})
fs.rm("./non-empty", {recursive: true}, function(err) {
    if(err) console.error(err);
    else console.log("Folder deleted");
})
