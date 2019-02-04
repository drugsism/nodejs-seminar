// 객테 리터럴
// const obj = {
//     a: 1,
//     b: 2,
// };

// old
var sayNode = function() {
    console.log('node');
};

var es = 'ES';
var oldObject = {
    sayJs: function() {
        console.log('JS');
    },
    sayNode: sayNode,
};

oldObject[es + 6] = 'Most Usual JS script';
oldObject.sayJs();
console.log(oldObject.ES6);


// ES6
const newObject = {
    sayJs() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Most Usual JS script',
}
newObject.sayJs();
console.log(newObject.ES6);