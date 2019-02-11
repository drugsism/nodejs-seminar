const url = require('url');

//url 방식을 알아야한다

//WHATWG 방식
const URL = url.URL;;
const myURL = new URL('http://drugsism:testpw@drugsism.guhub.io/category/development/js/nodejs?secrate1=001001000#ancor');

console.log('new URL(): ', myURL);
console.log('url.format: ', url.format(myURL));

console.log('----------------------------------');
//기존방식
const parseUrl = url.parse('http://drugsism:testpw@drugsism.guhub.io/category/development/js/nodejs?secrate1=001001000#ancor');
console.log('url.parse(): ', url.parse(parseUrl) );

// console.log(url);