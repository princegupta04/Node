const fs = require('fs');
const https =  require('https');

console.log("hello prince gupta");

var a =898989;
var b = 9090909;

https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("data fetch successfully")
})

setTimeout(()=>{
    console.log("this is set time out function ")
},5000);


fs.readFile("./file.txt", "utf8", (data)=>{
    console.log("file contains data",data);
})

function multiply(a, b){
    return a*b;
};

var c =  multiply(a, b);
console.log(c);