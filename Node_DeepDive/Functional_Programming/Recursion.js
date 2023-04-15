// node Functional_Programming/Recursion.js

// 함수형 프로그래밍 내에서는 변수와 for문 사용을 가급적 최소화한다.
// for문 대신 재귀함수를 사용하도록 한다.

// 재귀함수 - countdown
const countdown = (value) => {
    console.log('value:', value);
    if (value === 0 ) return value;
    return countdown(value - 1);
}
console.log('countdown result:', countdown(20));

// 재귀함수 - 1~n까지의 합 구하기
const sum = (value) => {
    if (value === 0) return 0;
    return value + sum(value - 1);
}
console.log('sum result:', sum(10));

// 재귀함수 - 팩토리얼 함수
const factorial = (value) => {
    if (value === 1) return 1;
    return value * factorial(value - 1);
}
console.log('factorial result:', factorial(5));

// 재귀함수 - 피보나치 수열
const fibonacci = (value) => {
    if (value <= 1) return 1;
    return fibonacci(value - 1) + fibonacci(value - 2);
}
console.log('fibonacci result:', fibonacci(10));

// 재귀함수 - 배열 내 요소들의 합 구하기
const array = [85, 95, 76]
const sumArray = (list, total, arrayLength) => {
    if (arrayLength == array.length) return total;
    return sumArray(list, total + list[arrayLength], arrayLength + 1)
;}
console.log('sum:', sumArray(array, 0, 0))

// 재귀함수 - 평균 구하기
const array2 = [85, 95, 76]
const averageArray = (list, total, arrayLength) => {
    if (arrayLength == array.length) return total / arrayLength;
    return averageArray(list, total + list[arrayLength], arrayLength + 1)
;}
console.log('average:', averageArray(array, 0, 0))