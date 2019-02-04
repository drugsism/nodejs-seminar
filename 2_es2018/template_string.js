// `(백틱)을 사용한 템플릿 문자열
// 기존
var a = 'Hello';
var b = 'world';
var template_old = a + ' Nodejs ' + b;
console.log(template_old);

// template string
const c = 'Hello';
const d = 'world';
const template = `${c} Nodejs ${d}`;
console.log(template);