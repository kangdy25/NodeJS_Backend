const greeting = 'Hello';
function sayHello(name) {
  const message = greeting + ' ' + name;
  console.log(message);
}

sayHello('World');

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num);
});
const obj = { name: 'John', age: 20 };
console.log(obj.name);

function add(a, b) {
  return a + b;
}
console.log(add(5, 2) === '5');
