// es5 스타일
function printHelloEs5() {
    console.log('hello es5');
}

// es6 스타일
function printHelloEs6() {
    console.log('hello es6');
}

printHelloEs5();
printHelloEs6();

// ############################################

console.log('hello %s', '동윤');
console.log('age: %d', 23);

const greeting = '안뇽';
const name = '동불이';
console.log(`${greeting}, ${name}`);

// ############################################

// .length() : 문자열의 길이(배열의 길이)를 구할 때 사용한다
// .indexOf() : 특정 문자열의 길이를 반환한다. 특정 문자열이 가장 먼저 등장하는 위치를 반환한다.
// .push() : 배열에 값을 추가한다.
let arTexts = [];
arTexts.push('Hello', 'Welcome', 'Bye');
console.log(arTexts);

// ############################################

const user = {name: '정불', age: 23};
console.log(user);
console.log(user.name);

// ############################################

const isTrue = true;
const isFalse = false;

console.log('typeof (true):', typeof (true));
console.log('typeof (false):', typeof (false));

// ############################################

// <조건1> &&(AND) <조건2> => 둘 다 참이어야 참
// <조건1> ||(OR) <조건2> => 둘 중 하나만 참이면 참 
// <표현식> ? <값1> : <값2> => 표현식 결과가 참이면 값1 출력, 표현식 결과가 거짓이면 값2 출력 
