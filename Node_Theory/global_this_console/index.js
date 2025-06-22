// 브라우저에서 this, global
console.log(this === window); // true
console.log(globalThis === window); // true

var x = 10;
console.log(window.x); // 10
console.log(this.x); // 10

// CommonJS
console.log(this === global); // false
console.log(globalThis === global); // true

console.log(this === module.exports); // true

var x = 10;
console.log(global.x); // undefined
console.log(this.x); // undefined

global.y = 20;
console.log(global.y); // 20
console.log(globalThis.y); // 20

function regularFunc() {
  console.log("regularFunc:", this === global);
}
regularFunc(); // true

const arrowFunc1 = () => {
  console.log("arrowFunc1:", this === module.exports);
};
arrowFunc1(); // true

// ESModule
console.log(this === undefined); // true
console.log(globalThis === global); // true

var x = 10;
console.log(globalThis.x); // undefined

globalThis.y = 20;
console.log(globalThis.y); // 20

function regularFunc() {
  console.log("regularFunc:", this === undefined);
}
regularFunc(); // true

const arrowFunc2 = () => {
  console.log("arrowFunc2:", this === undefined);
};
arrowFunc2(); // true

const obj1 = {
  method() { console.log("method:", this === obj1); }
};
obj1.method(); // true

// Console
console.log('Hello, Node.js!');
console.log('User:', 'John', 'Age:', 25);

console.log('\n');

console.log(
  "Str: %s, Int: %i, %d, Flt: %f",
  "Hello!", 1234, 567, 3.14159,
);

console.log('\n');

const obj2 = {
  key: "value",
  nested: { num: 42, arr: [1, 2, 3, 4, 5, 6, 7] } 
};

console.log("Compact: %o", obj2);
console.log("Detailed: %O", obj2);
console.log("JSON (%%j): %j", obj2);

console.error("An error occurred!");

console.warn("This is a warning message!");

console.info("Server is running on port 3000.");

console.debug("Debugging information...");

console.time("Loop Time");

let sum = 0;
for (let i = 0; i < 1e9; i++) {
    sum += i;
}

console.timeEnd("Loop Time");

function myFunction() {
  console.count("myFunction called");
}

myFunction();
myFunction();
myFunction();

console.countReset("myFunction called");

myFunction();

function firstFunction() {
  secondFunction();
}

function secondFunction() {
  thirdFunction();
}

function thirdFunction() {
  console.trace('Trace at thirdFunction');
}

firstFunction();

function add(a, b) {
  return a + b;
}

console.assert(add(2, 3) === 5, "1. Expected 5, but got %d", add(1, 1));
console.assert(add(1, 1) === 3, "2. Expected 3, but got %d", add(1, 1));

const colors = {
  reset:    '\x1b[0m',
  bright:   '\x1b[1m',
  red:      '\x1b[31m',
  green:    '\x1b[32m',
  yellow:   '\x1b[33m',
  blue:     '\x1b[34m',
  magenta:  '\x1b[35m',
  cyan:     '\x1b[36m'
};

console.log(colors.green + 'Success!' + colors.reset);
console.log(colors.red + 'Error: ' + colors.reset + 'Something went wrong');
console.log(colors.bright + colors.blue + 'Info: ' + colors.reset + 'Server started');

function coloredLog(color, message) {
  console.log(colors[color] + message + colors.reset);
}

coloredLog('green', 'This is a green message');
coloredLog('yellow', 'Warning: This is a yellow message');