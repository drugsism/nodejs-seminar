// 
// 함수 선언문
function add1(x, y) {
    return x + y;
}

// 함수 표현식
var add2 = function (x, y) {
    return x + y;
}

console.log(add1(2, 3));
console.log(add2(2, 3));

const add3 = (x, y) => {
    return x + y;
}

const add4 = (x, y) => x + y;

console.log(add3(2, 3));
console.log(add4(2, 3));

// function과 =>(arrow function) 의 차이
// this의 scope 차이가 있다

var object = {
    name: 'James',
    classes: ['javascript', 'nodejs', 'react'],
    metod: function() {
        var that = this;
        this.classes.forEach(function(classjs) {
            console.log(that.name + ' study', classjs);
        });
    } 

};

const object_arrow = {
    name: 'James',
    classes: ['javascript', 'nodejs', 'react'],
    metod() {
        this.classes.forEach(classjs => {
            console.log(`${this.name} study`, classjs);
        });
    } 
};

object.metod();
object_arrow.metod();