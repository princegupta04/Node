// modules protect their variables and function from leakings
var secondVariable = "hey"
function calculateSum(a,b){
    const c = a + b;
    console.log("sum is ",c)
}
module.exports = {secondVariable, calculateSum};