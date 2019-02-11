const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초 마다 실행');
}, 1000);

// 취소
// clearTimeout(timeout);
// clearInterval(interval);

const timeout2 = setTimeout(() => {
    console.log('실행 되지 않습니다.');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

// Event Loop로 이벤트를 바로 옮긴후 실행
const imm = setImmediate(() => {
    console.log('즉시 실행.');
});

// clearImmediate(imm);