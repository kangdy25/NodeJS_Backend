// import { parentPort, workerData } from 'worker_threads';

// function heavyCalc(num) {
//   let sum = 0;
//   for (let i = 0; i < num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// const result
//  = heavyCalc(workerData);

// parentPort.postMessage(result);

// import { parentPort }
//  from 'worker_threads';

// function heavyCalc(num) {
//   let sum = 0;
//   for (let i = 0; i < num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// parentPort.on('message', (num) => {
//   const result = heavyCalc(num);
//   parentPort.postMessage(result);
// //   process.exit(0);
//   parentPort.close();
// });

// 메인 스레드와 워커 스레드 간 메모리 공유 및 동기화
// import { parentPort, workerData }
//  from 'worker_threads';

// const { sharedBuff } = workerData;

// const intArry
//  = new Int32Array(sharedBuff, 0, 2);

// const fltArry
//  = new Float64Array(sharedBuff, 8, 1);

// Atomics.add(intArry, 0, 10);
// Atomics.store(intArry, 1, 42);
// fltArry[0] = 3.14;

// parentPort.postMessage(
//   'Updated shared memory'
// );

// import { parentPort }
//  from 'worker_threads';

// function heavyCalc(num) {
//   let sum = 0;
//   for (let i = 0; i < num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// parentPort.on('message', (num) => {
//   const result = heavyCalc(num);
//   parentPort.postMessage(result);
// });

// Piscina를 통한 스레드 풀 구현
export default (task) => {
  let sum = 0;
  for (let i = 0; i < task; i++) {
    sum += i;
  }
  return sum;
};