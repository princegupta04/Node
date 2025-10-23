const crypto =  require("crypto");
const { connected, constrainedMemory } = require("process");

console.log("hello world ..");

// sync function  -> blocks the main thread .
// sync function does not have callback function since it does not offloads to libuv
const syncResKey = crypto.pbkdf2Sync("pass" , "salt" , 5000000 , 50 ,"sha256" );
console.log("sync function ",syncResKey);


// async function 
// password base derivative function ....
// never use synchronous functions .. because it blocks the main thread . 
crypto.pbkdf2("pass@123", "salt", 50000 , 50 , "sha512" ,(err,key)=>{
    console.log("password generated",key);
});

function multiply(a , b){
    return a*b;
}
const ans = multiply(5, 6);
console.log("ans " , ans);