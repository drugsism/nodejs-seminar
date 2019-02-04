//Call Stack
function first() {
    second();
    console.log('first func execute')
};
function second() {
    third();
    console.log('second func execute')
};
function third() {
    console.log('third func execute')
}
first();


//None Blocking
//Event Loop
// setTimeout setInterval setImmediate
// Promise(resolve, reject)
// async, await
//Task Queue
function run() {
    console.log('Excute at 3 second after');
}
console.log('process start');
setTimeout(run, 3000);
console.log('process end');