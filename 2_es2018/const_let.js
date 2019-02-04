// const, let
// const = 상수

if (true) {
    var x = 3;
}
console.log(x); //3


// function scope
if (true) {
    const y = 3;
}
console.log(y); // Uncaught ReferenceError: y is not defined

if(true) {
     let a = 3;
 }
console.log(a); // ReferenceError: a is not defined

//-----------------------------------------------------------

// const: constant 상수 
// let: variable 변수 
// var와 차이: 

// ** 기본적으로 const를 사용한다.

// 객체의 값은 변경 가능
const obj = { a: 1, b: 2, c: 3 };
obj.a = 5;