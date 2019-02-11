const { odd, even } = require('./var');

function checkOddOrEven(num) {
    if (num % 2) { //odd
        return odd;
    } else {
        return even;
    }
}

// module.exports = { odd, even, checkOddOrEven };
module.exports = checkOddOrEven;