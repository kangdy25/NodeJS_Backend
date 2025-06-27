// import cluster from 'cluster';
// import { cpus } from 'os';
// import http from 'http';

// if (cluster.isPrimary) {
//   console.log(`Master process ${process.pid} is running`);

//   for (let i = 0; i < cpus().length; i++) {
//     cluster.fork();
//   }
// } else {
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('Hello from worker ' + process.pid);
//   }).listen(8000);

//   console.log(`Worker ${process.pid} started`);
// }

// 프로세스 간 메세지 전송
// import cluster from 'cluster';
// import os from 'os';

// const numCPUs = os.availableParallelism();

// if (cluster.isPrimary) {
//   console.log(`Primary ${process.pid} is running`);

//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   for (const id in cluster.workers) {
//     cluster.workers[id].on('message', (message) => {
//       console.log(`Message from worker ${id}: ${message}`);
//     });
//   }
// } else {
//   process.send(`Hello from worker ${process.pid}`);
// }

// 에러로 인해 워커 프로세스 중단 시, 재실행 프로그램
import cluster from 'cluster';
import { cpus } from 'os';
import http from 'http';

if (cluster.isPrimary) {
  console.log(`Master process ${process.pid} is running`);

  for (let i = 0; i < cpus().length; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log('Worker ' + worker.process.pid + ' died');
    cluster.fork();
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello from ' + process.pid);
  }).listen(8000);
  setTimeout(() => process.exit(1), Math.random() * 10000);

  console.log(`Worker ${process.pid} started`);
}