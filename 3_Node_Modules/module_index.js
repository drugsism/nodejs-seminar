const { odd, even } = require('./module_var');
const checkNumber = require('./module_func');

function checkStringOddOrEven(str) {
    if (str.length % 2) { //odd
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('Hello'));

// result
// node .\3_Node_modules\index.js
// This is even.
// This is odd.