import test from 'node:test';
import assert from 'node:assert/strict';
import { add, subtract } from '../math.js';

// test('add(2, 3) => 5', () => {
//   assert.strictEqual(add(2, 3), 5);
// });

// test('add(3, -3) => 0', () => {
//   assert.strictEqual(add(3, -3), 0);
// });

// test('subtract(7, 4) => 3', () => {
//   assert.strictEqual(subtract(7, 4), 3);
// });

// test('subtract(-2, 4) => -6', () => {
//   assert.strictEqual(subtract(-2, 4), -6);
// });

// 그룹으로 묶어 테스트 진행하기
// test('grouped tests for add()', async (t) => {
//   await t.test('add(1, 2) => 3', async () => {
//     assert.strictEqual(add(1, 2), 3);
//   });

//   await t.test('add(10, -5) => 5', async () => {
//     assert.strictEqual(add(10, -5), 5);
//   });
// });

// test('grouped tests for subtract()', async (t) => {
//   await t.test('subtract(1, 2) => -1', async () => {
//     assert.strictEqual(subtract(1, 2), -1);
//   });

//   await t.test('subtract(10, -5) => 15', async () => {
//     assert.strictEqual(subtract(10, -5), 15);
//   });
// });

// 테스트 훅
// import test from 'node:test';
// import assert from 'node:assert/strict';
// import { add, subtract } from '../math.js';

// let callCount = 0;

// test.beforeEach(() => { console.log('---'); });

// test.afterEach((t) => {
//   console.log(`✓ ${t.name} (calls: ${++callCount})`);
// });

// test('add(2, 3) => 5', () => {
//   assert.strictEqual(add(2, 3), 5);
// });

// test('add(3, -3) => 0', () => {
//   assert.strictEqual(add(3, -3), 0);
// });

// test('subtract(7, 4) => 3', () => {
//   assert.strictEqual(subtract(7, 4), 3);
// });

// import test from 'node:test';
// import assert from 'node:assert/strict';
// import { add, subtract } from '../math.js';

// test.skip('add(100, 200) => 300', () => {
//   assert.strictEqual(add(100, 200), 300);
// });

// test('add(2, 3) => 5', () => {
//   assert.strictEqual(add(2, 3), 5);
// });

// test.todo('subtract with decimal numbers');

// test.only('subtract(10, 4) => 6', () => {
//   assert.strictEqual(subtract(10, 4), 6);
// });

// vitest 사용
import { describe, test, beforeEach, afterEach, expect }
 from 'vitest';
import { add, riskyDivide, asyncAdd  } from './math.js';

// let count = 0;

// describe('add()', () => {
//   beforeEach(() => {
//     console.log('---');
//   });

//   afterEach(() => {
//     console.log(`calls: ${++count}`);
//   });

//   test('add(1, 2) => 3', () => {
//     expect(add(1, 2)).toBe(3);
//   });

//   test('add(0, 0) => 0', () => {
//     expect(add(0, 0)).toBe(0);
//   });
// });


test('divide by zero throws error', () => {
  expect(() => riskyDivide(4, 0)).toThrow('Divide by zero');
});

test('asyncAdd(3, 4) => 7', async () => {
  const result = await asyncAdd(3, 4);
  expect(result).toBe(7);
});