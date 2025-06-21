// Promisify (콜백 형태의 비동기 함수를 호출하는 함수를 프로미스화한다)
import { promisify } from 'node:util';

const sleep = promisify(setTimeout);

console.log('Start');

await sleep(2000);

console.log('After 2 seconds');

// Inspect (객체를 사람이 읽기 쉬운 문자열로 변환해준다)
import { inspect } from 'node:util';

const myReq = {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: {
    user: { id: 1, name: 'Grok', details: { active: true } }
  },
  socket: { remoteAddress: '127.0.0.1' },
  items: [1, 2, 3, 4]
};

console.log('\n1', inspect(myReq), '\n');
console.log('\n2', inspect(myReq, { colors: true }));
console.log('\n3', inspect(myReq, { depth: null }));
console.log('\n4', inspect(myReq, { maxArrayLength: 1 }));
console.log('\n5', inspect(myReq, { compact: false }));
console.log('\n6', inspect(myReq, {
  depth: null,
  colors: true,
  maxArrayLength: 2,
  compact: false
}));

// types (구분하기 어려운 특정 타입들을 정확히 판별힌디)
import { types } from 'node:util';

console.log('Date:', types.isDate(new Date()));

console.log('RegExp:', types.isRegExp(/test/));

console.log('Map:', types.isMap(new Map([[1, 'one']])));
console.log('Set:', types.isSet(new Set([1, 2, 3])));
console.log('WeakMap:', types.isWeakMap(new WeakMap()));
console.log('WeakSet:', types.isWeakSet(new WeakSet()));

console.log('Promise:', types.isPromise(Promise.resolve('done')));

console.log('AsyncFunction:', types.isAsyncFunction(async () => {}));
console.log('GeneratorFunction:', types.isGeneratorFunction(function* () { yield 1; }));

console.log('NativeError:', types.isNativeError(new Error('error')));

// Deprecate (앞으로 사용하지 않을, 즉 Deprecated될 것들에 대한 경고 메세지를 출력함)
import { deprecate } from 'node:util';

const oldFunction = () => console.log('Old way');

const deprecatedFunction = deprecate(
  oldFunction, 'Use newFunction instead.');

deprecatedFunction();

export { deprecatedFunction as oldFunction }; 