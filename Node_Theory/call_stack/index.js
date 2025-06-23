// Call Stack Example 1

// function f1() {
//   console.log("Entering f1"); // 🔴
//   f2();
//   console.log("Exiting f1"); // 🔴
// }

// function f2() {
//   console.log("Entering f2"); // 🔴
//   f3();
//   console.log("Exiting f2"); // 🔴
// }

// function f3() {
//   console.log("Entering f3");
//   console.log("Exiting f3"); // 🔴
// }

// f1(); // 🔴

// Call Stack Example 2

let a = 1;

function f1(b) {
  let c = 3;
  console.log(`${a} ${b} ${c}`);
  f2(4)
}

function f2(d) {
  let e = 5;
  console.log(`${a} ${d} ${e}`);
  f3(6)
}

function f3(f) {
  let g = 7;
  console.log(`${a} ${f} ${g}`);  // 🔴
}

f1(2);

// Call Stack - Recursion
function recursiveFunc(n) {
  console.log(`Entering: n = ${n}`); // 🔴
  if (n > 0) {
      recursiveFunc(n - 1);
  }
  console.log(`Exiting: n = ${n}`); // 🔴
}

recursiveFunc(5);

// Call Stack - Stack Trace

// function f1() {
//   f2();
// }

// function f2() {
//   f3();
// }

// function f3() {
//   f4();
// }

// function f4() {
//   throw new Error("Error in f4");
// }

// f1();