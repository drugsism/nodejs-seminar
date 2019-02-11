const path = require('path');

console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.basename(__filename));

console.log(path.parse(__filename));
console.log(path.format(
        { root: 'D:\\',
        dir: 'D:\\dev\\nodejs\\3_Node_Modules',
        base: 'path.js',
        ext: '.js',
        name: 'path' 
        }
    )
);

console.log(path.normalize('C://dev\\\\nodejs\\/path.js'));
console.log(path.isAbsolute('C:\\'));
console.log(path.relative('C:\\dev', 'C:\\'));
console.log(path.join(__dirname, '..', '..', '/dev', '.', '/nodejs'));
console.log(path.resolve(__dirname, '..', '..', '/dev', '.', '/nodejs'));
