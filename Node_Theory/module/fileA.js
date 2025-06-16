const counter = require('./counter');

console.log('1.', counter.getCount());
counter.increment();
console.log('2.', counter.getCount());