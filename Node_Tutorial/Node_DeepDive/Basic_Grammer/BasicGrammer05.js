// 매개변수(parameter) vs 인수(argument)
function printMessage(Parameter) {
    console.log(Parameter);
}
printMessage('argument');

// 함수 선언 방법

// 01 함수 선언식
function a(message1) {
    console.log(message1);
};
// 02 함수 표현식
const b =  function (message2) {
    console.log(message2);
};
// New!! 화살표 함수 (function 키워드와 return 키워드를 생략한다.)
const c = (message3) => {
    console.log(message3);
};

// 자바스크립트의 함수는 일급 객체로, 변수에 할당 가능하다.

// 콜백함수: 특정 함수에 파라미터로 전달된 함수
const sum = (a, b) => a + b;

const printResult = (result) => {
    console.log(`결과는 ${result}이다.`);
};
const calculationAndPrint = (calculationResult, callback) => {
    callback(calculationResult);
};

calculationAndPrint(sum(10, 20), printResult);