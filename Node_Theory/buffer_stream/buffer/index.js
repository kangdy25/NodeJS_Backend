// 기본 Buffer 사용법
// const buffer = Buffer.from('Hello, Node.js');

// console.log(buffer);

// console.log(buffer.toString());

// Buffer 할당 및 쓰기
// const buffer = Buffer.alloc(10);

// console.log(buffer);

// buffer.write('ABCD');

// console.log(buffer);

// Buffer 복사
// const bufA = Buffer.from('abcd');
// const bufB = Buffer.alloc(4);

// console.log(bufB);
// console.log(bufB.toString());

// bufA.copy(bufB);

// console.log(bufB);
// console.log(bufB.toString());

// Buffer 이어붙이기
// const bufX = Buffer.from('Hello ');
// const bufY = Buffer.from('World');

// const bufZ = Buffer.concat([bufX, bufY]);

// console.log(bufZ.toString());

// 버퍼의 성능
// console.time('String');
// let str = '';
// for (let i = 0; i < 1000000; i++) {
//   str += 'a';
// }
// console.timeEnd('String');

// console.time('Buffer');
// const buf5 = Buffer.alloc(1000000);
// for (let i = 0; i < 1000000; i++) {
//   buf5[i] = 97;
// }
// console.timeEnd('Buffer');

// 버퍼를 통한 성능 최적화
// import http from 'http';

// const server = http.createServer((req, res) => {
//   let body = [];
  
//   req.on('data', (chunk) => body.push(chunk));
//   req.on('end', () => {
//     const data = Buffer.concat(body).toString();
//     console.log('Received:', JSON.parse(data));
//     res.end('Data received')
//   });
// });

// server.listen(3000, () => console.log('🤖 on port 3000'));

// 버퍼를 통한 이미지 처리
import { readFile } from 'fs/promises';

const filePath = './original.webp';

const buffer = await readFile(filePath);
const base64 = buffer.toString('base64');

console.log(base64);

import { writeFile } from 'fs/promises';

const decodedBuffer = Buffer.from(base64, 'base64');
await writeFile('decoded.png', decodedBuffer);

console.log('Image decoded successfully.');