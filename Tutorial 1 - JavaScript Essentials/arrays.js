let arr0 = [1, "hp", { }, true, function() {}, [ ]];


// forEach() method
var arr = [1, 2, 3, 4];
arr.forEach(function(val) {
    console.log(val + " hello");
})


// map() method
var arr = [1, 2, 3, 4];
var newarr = arr.map(function(val) {
    return val * 10;
})
console.log(newarr);


// filter() method
var arr = [1, 2, 3, 4];
var newarr = arr.filter(function(val) {
    if (val >= 2) {
        return true;
    } else {
        return false;
    }
})
console.log(newarr);


// find() method
var arr = [1, 2, 3, 4];
var ans = arr.find(function(val) {
    if (val === 2) {
        return val;
    }
})
console.log(ans);


// indexOf() method
var arr = ["hi", "hey", "hello"];
console.log(arr.indexOf("hello"));
console.log(arr.indexOf(12));