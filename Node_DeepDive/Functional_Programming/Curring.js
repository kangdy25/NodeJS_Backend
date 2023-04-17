// node Functional_Programming/Curring.js
// 화살표 함수를 두 번 이상 사용하는 것을 커링(curring)이라고 한다.
const returnFunction = () => (a, b) => a + b;
const sum = returnFunction();

console.log(sum(10, 20));

// 클로저 closer 
// => 외부함수가 리턴된 이우에도 내부함수가 참조하는 외부함수의 지역변수가 유효성이 유지될 때, 내부함수를 클로저라 한다.
function grandParent(g1, g2) {
    const g3 = 3;
    return function parent(p1, p2) {
        const p3 = 33;
        return function child(c1, c2) {
            const c3 = 333;
            return g1 + g2 + g3 + p1 + p2 + p3 + c1 + c2 + c3;
        };
    };
}
const parentFunction = grandParent(1, 2);
const childFunction = parentFunction(11, 22);
console.log(childFunction(111, 222));

// 합성함수
// => 함수 여러 개를 합쳐서 사용하는 방법이다.
const multiples5 = x => x * 5;
const add10 = x => x + 10;
const plus = (a, b) => a + b;
const minus = (a, b) => a - b;

console.log(multiples5(add10(20)));
console.log(plus(minus(20, 10), 40));

// 커링 연습 01
const coffeeMachine = liquid => espresso => `${espresso} + ${liquid}`;

const americanoMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');

const americano = americanoMachine('coffee bean');
const latte = latteMachine('coffee bean');

console.log(americano);
console.log(latte);

// 커링 연습 02
// const fs = require('fs');

// const openFileAndPrint = path => fileName => {
//     fs.readFile(path + fileName, (err, data) => {
//         if (err) throw err;
//         console.log(data.toString());
//     });
// }
// const thisDirOpenFileAndPrint = openFileAndPrint('./');
// const otherDirOpenFileAndPrint = openFileAndPrint('../');

// thisDirOpenFileAndPrint('curring.js');
// otherDirOpenFileAndPrint('package.json');

// 프리디케이트 predicate
// true인지 false인지를 예측을 해준다는 의미이다.
const isApple = (fruit) => {
    if (fruit === 'apple') return true;
    return false;
}
console.log('apple');

// 프리디케이트 정렬 .sort(predicate)
const numbers = [1, 2, 19, 38, 4, 98, 25];

const isFirstBiggerThenSecond = (first, second) => {
    if (first > second) return true;
    return false;
}
const sortedNumbers = numbers.sort(isFirstBiggerThenSecond);
console.log(sortedNumbers);