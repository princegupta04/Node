require("./xyz")
const {calculateSum  , calculateMultiply, secondVariable} =require( "./calculate")
var a = 5;
var b = 6;
calculateSum(a,b);
calculateMultiply(a,b);
console.log(secondVariable)
console.log("this is a main file ...")
console.log(global === globalThis)