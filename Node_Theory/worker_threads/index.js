// import { Worker } from 'worker_threads';

// const worker = new Worker(
//   './worker.js',
//   { workerData: 1000000000 }
// );

// worker.on('message', (message) => {
//   console.log(`Received: ${message}`);
// });

// worker.on('error', (error) => {
//   console.error(`Worker error: ${error}`);
// });

// worker.on('exit', (code) => {
//   if (code !== 0) {
//     console.error(`Worker stopped (${code})`);
//   }
// });

// console.log("worker.js started");

// import { Worker } from 'worker_threads';
// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   const worker = new Worker('./worker.js');
//   worker.postMessage(num * 100000000);

//   worker.on('message', (message) => {
//     console.log(`Received: ${message}`);
//     // worker.terminate();
//   });

//   worker.on('error', (error) => {
//     console.error(`Worker error: ${error}`);
//   });

//   worker.on('exit', (code) => {
//     if (code !== 0) {
//       console.error(`Worker stopped (${code})`);
//     }
//   });
// }

// console.log("worker.js started");

// 메인 스레드와 워커 스레드 간 메모리 공유 및 동기화
// import { Worker } from 'worker_threads';

// const sharedBuff = new SharedArrayBuffer(16);
// const intArry
//  = new Int32Array(sharedBuff, 0, 2);
// const fltArry
//  = new Float64Array(sharedBuff, 8, 1);

// intArry[0] = 5;
// intArry[1] = 0;
// fltArry[0] = 0.0;

// const worker = new Worker(
//   new URL('./worker.js', import.meta.url),
//   { workerData: { sharedBuff } }
// );

// worker.on('message', () => {
//   console.log(
//     'Updated:',
//     intArry[0], intArry[1], fltArry[0]);
// });

// 스레드 풀
// import { Worker } from 'worker_threads';

// const poolSize = 4;
// const workers = [];
// const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let taskIndex = 0;
// let completed = 0;

// for (let i = 0; i < poolSize; i++) {
//   workers.push(new Worker('./worker.js'));
// }

// function assignTask(worker) {
//   if (taskIndex < tasks.length) {
//     worker.postMessage(
//       tasks[taskIndex] * 100000000
//     );
//     taskIndex++;
//   }
// }

// workers.forEach((worker, i) => {
//   worker.on('message', (result) => {
//     console.log(`Worker ${i} result: ${result}`);
//     completed++;
//     if (completed < tasks.length) {
//       assignTask(worker);
//     } else if (completed === tasks.length) {
//       console.log('All tasks done');
//     }
//   });
//   assignTask(worker);
// });

// console.log('Main thread running');

// Piscina를 통한 스레드 풀 구현
import Piscina from 'piscina';

const pool = new Piscina({
  filename: 'worker.js',
  minThreads: 4,
  maxThreads: 4
});

const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Main thread running');
const results = await Promise.all(
  tasks.map(task => pool.run(task * 100000000))
);

console.log('Results:', results);
console.log('All tasks done');