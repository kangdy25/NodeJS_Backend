// node Basic_Grammer/BasicGrammer06.js

// 난수 생성 (Random)
const randomNumber = Math.random(); // Math.random()을 사용하면 0~1 범위 수를 반환한다.
const zeroToNine = Math.floor(Math.random() * 10, 10); // 0 to 9
const oneToTen = Math.floor(Math.random() * 10, 10); // 1 to 10
const makeRandom = (min, max)  => Math.floor(Math.random() * ((max - min) + 1), 10) + min;

for (let value = 1; value < 10; value += 1) {
    console.log('10 to 20:', makeRandom(10, 20));
}

// 반올림 .round(number)
const number = 88.7;
const divide = 1 / 2;

console.log('type: %s %d', typeof number, number);
console.log('round', typeof number, Math.round(number));
console.log('divide: %d, %d', divide, Math.round(divide));

// 최대값 max(), 최소값 min()
const maxResult = Math.max(-10, 10, 20, 30, 40);
const minResult = Math.min(-10, 10, 20, 30, 40);

console.log('max : ', maxResult);
console.log('min : ', minResult);

// 절대값 abs()
const abs1 = Math.abs('-1');
const abs2 = Math.abs('-3.141592');
const abs3 = Math.abs([2]);
const abs4 = Math.abs([1, 2]);
const abs5 = Math.abs({});
const abs6 = Math.abs(null);

console.log('abs1:', abs1);
console.log('abs2:', abs2);
console.log('abs3:', abs3);
console.log('abs4:', abs4);
console.log('abs5:', abs5);
console.log('abs6:', abs6);

// 거듭제곱 pow()
const pow1 = Math.pow(7, 2);
const pow2 = Math.pow(2, 10);
const pow3 = Math.pow(2, 0.5);
const pow4 = Math.pow(8, 1 / 3);
const pow5 = Math.pow(-7, 2);
const pow6 = Math.pow(8, -2);

console.log('pow1:', pow1);
console.log('pow2:', pow2);
console.log('pow3:', pow3);
console.log('pow4:', pow4);
console.log('pow5:', pow5);
console.log('pow6:', pow6);

// 제곱근 함수 sqrt(), 세제곱근 함수 cbrt()
const sqrt1 = Math.sqrt(9);
const sqrt2 = Math.sqrt(1);
const sqrt3 = Math.sqrt(0);
const sqrt4 = Math.sqrt(-1);

const cbrt1 = Math.cbrt(-8);
const cbrt2 = Math.cbrt(0);
const cbrt3 = Math.cbrt(1);
const cbrt4 = Math.cbrt(Infinity);

console.log('sqrt1:', sqrt1);
console.log('sqrt2:', sqrt2);
console.log('sqrt3:', sqrt3);
console.log('sqrt4:', sqrt4);
console.log('cbrt1:', cbrt1);
console.log('cbrt2:', cbrt2);
console.log('cbrt3:', cbrt3);
console.log('cbrt4:', cbrt4);

// 부호 함수 sign()
// 값의 부호를 확인하여 양수이면 1, 음수이면 -1, 0이면 0을 반환한다 
// 문자열이라도 숫자값이라면 숫자로 판별하여 계산한다. 
// 다만, 숫자가 아니여서 부호를 판별할 수 없는 경우 NaN을 반환한다.
const sign1 = Math.sign(3);
const sign2 = Math.sign(-3);
const sign3 = Math.sign('-3');
const sign4 = Math.sign(0);
const sign5 = Math.sign(NaN);
const sign6 = Math.sign('foo');
const sign7 = Math.sign();

console.log('sign1:', sign1);
console.log('sign2:', sign2);
console.log('sign3:', sign3);
console.log('sign4:', sign4);
console.log('sign5:', sign5);
console.log('sign6:', sign6);
console.log('sign7:', sign7);