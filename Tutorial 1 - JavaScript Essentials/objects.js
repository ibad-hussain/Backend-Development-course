var obj = {
    name: "ahmed",
    age: 20
}
console.log(obj);


// accessing key:value pair of an object
var obj = {
    name: "ahmed",
    age: 20
}
console.log(obj.name);
console.log(obj['age']);


// changing value of a key in an object
var obj = {
    name: "ahmed",
    age: 20
}
obj.age = 23;
console.log(obj);


// freezing an object so that it cant be change
var obj = {
    name: "ahmed",
    age: 20
}
Object.freeze(obj);
obj.age = 23;
console.log(obj);