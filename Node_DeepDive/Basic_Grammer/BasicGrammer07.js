// node Basic_Grammer/BasicGrammer07.js

// 로그함수 log()   
const log_1 = Math.log(10); // 이때 밑은 자연상수 e
const log_2 = Math.log(1);
const log10_1 = Math.log10(10000); // 이때 밑은 10
const log10_2 = Math.log10(10); 
const log2_1 = Math.log2(1024); // 이때 밑은 2
const log2_2 = Math.log2(2); 
const log1p_1 = Math.log1p(1); // 이때 밑은 e이고, 진수에 1을 더해 값을 구한다.
const log1p_2 = Math.log1p(0); 

console.log('log_1:', log_1);
console.log('log_2:', log_2);
console.log('log10_1:', log10_1);
console.log('log10_2:', log10_2);
console.log('log2_1:', log2_1);
console.log('log2_2:', log2_2);
console.log('log1p_1:', log1p_1);
console.log('log1p_2:', log1p_2);

// 바닥함수 floor(), 천장함수 ceil()  {버림, 올림}
const floor1 = Math.floor(45.95);
const floor2 = Math.floor(4);
const floor3 = Math.floor(NaN);
const floor4 = Math.floor(-45.05);

const ceil1 = Math.ceil(7.004);
const ceil2 = Math.ceil(-4);
const ceil3 = Math.ceil(-0.95);
const ceil4 = Math.ceil(-7.004);

console.log('floor1:', floor1);
console.log('floor2:', floor2);
console.log('floor3:', floor3);
console.log('floor4:', floor4);
console.log('ceil1:', ceil1);
console.log('ceil2:', ceil2);
console.log('ceil3:', ceil3);
console.log('ceil4:', ceil4);

// 버림함수 trunc() {소수점 절삭 함수}
const trunc1 = Math.trunc(24.2);
const trunc2 = Math.trunc(42.4234235);
const trunc3 = Math.trunc(0.88);
const trunc4 = Math.trunc(-0.88);
const trunc5 = Math.trunc('-1.123');
const trunc6 = Math.trunc(NaN);
const trunc7 = Math.trunc('foo');
const trunc8 = Math.trunc();

console.log('trunc1:', trunc1);
console.log('trunc2:', trunc2);
console.log('trunc3:', trunc3);
console.log('trunc4:', trunc4);
console.log('trunc5:', trunc5);
console.log('trunc6:', trunc6);
console.log('trunc7:', trunc7);
console.log('trunc8:', trunc8);

// 밑이 자연상수(e)인 지수함수
const exp1 = Math.exp(-1);
const exp2 = Math.exp(0);
const exp3 = Math.exp(1);
//  expm1 = exp(x)-1
const expm1_1 = Math.expm1(-1);
const expm1_2 = Math.expm1(0);
const expm1_3 = Math.expm1(1);

console.log('exp1:', exp1);
console.log('exp2:', exp2);
console.log('exp3:', exp3);
console.log('expm1_1:', expm1_1);
console.log('expm1_2:', expm1_2);
console.log('expm1_3:', expm1_3);

// 삼각함수 sin(), cos(), tan()
const sin1 = Math.sin(0);
const sin2 = Math.sin(1);
const sin3 = Math.sin(Math.PI / 2);

const cos1 = Math.cos(0);
const cos2 = Math.cos(1);
const cos3 = Math.cos(Math.PI / 4);

const tan1 = Math.tan(Math.PI / 4);

console.log('sin1:', sin1);
console.log('sin2:', sin2);
console.log('sin3:', sin3);
console.log('cos1:', cos1);
console.log('cos2:', cos2);
console.log('cos3:', cos3);
console.log('tan1:', tan1);

// 역삼각함수 asin(), acos(), atan()
const asin1 = Math.asin(0);
const asin2 = Math.asin(1);
const asin3 = Math.asin(Math.PI / 2);

const acos1 = Math.acos(0);
const acos2 = Math.acos(1);
const acos3 = Math.acos(-1.2);

const atan1 = Math.atan(Math.PI / 2);

console.log('asin1:', asin1);
console.log('asin2:', asin2);
console.log('asin3:', asin3);
console.log('acos1:', acos1);
console.log('acos2:', acos2);
console.log('acos3:', acos3);
console.log('atan1:', atan1);

// 쌍곡함수 sinh(), cosh(), tanh()
const sinh1 = Math.sinh(0);
const sinh2 = Math.sinh(1);
const sinh3 = Math.sinh(-1);

const cosh1 = Math.cosh(0);
const cosh2 = Math.cosh(1);
const cosh3 = Math.cosh(-1);

const tanh1 = Math.tanh(0);
const tanh2 = Math.tanh(Infinity);

console.log('sinh1:', sinh1);
console.log('sinh2:', sinh2);
console.log('sinh3:', sinh3);
console.log('cosh1:', cosh1);
console.log('cosh2:', cosh2);
console.log('cosh3:', cosh3);
console.log('tanh1:', tanh1);
console.log('tanh2:', tanh2);

// 역쌍곡함수 asinh(), acosh(), atanh()
const asinh1 = Math.asinh(0);
const asinh2 = Math.asinh(1);
const asinh3 = Math.asinh(-1);

const acosh1 = Math.acosh(0);
const acosh2 = Math.acosh(1);
const acosh3 = Math.acosh(-1);

const atanh1 = Math.atanh(0);
const atanh2 = Math.atanh(-1);
const atanh3 = Math.atanh(2);

console.log('asinh1:', asinh1);
console.log('asinh2:', asinh2);
console.log('asinh3:', asinh3);
console.log('acosh1:', acosh1);
console.log('acosh2:', acosh2);
console.log('acosh3:', acosh3);
console.log('atanh1:', atanh1);
console.log('atanh2:', atanh2);
console.log('atanh3:', atanh3);