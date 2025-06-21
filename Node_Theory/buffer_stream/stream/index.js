// import { Readable } from 'stream'

// const readableStream = new Readable({
//   read() {
//     this.push('Hello, ');
//     this.push('Node.js Stream!');
//     this.push('Nice to meet you!');
//     this.push(null);
//   }
// });

// readableStream.on('data', chunk => {
//   console.log('Received:', chunk.toString());
// });

// readableStream.on('end', () => {
//   console.log('Stream ended');
// });

// Custom Class를 사용하여 스트림 모듈 사용하기
// import { Readable } from 'stream';

// class CustomReadable extends Readable {
//   constructor(options) {
//     super(options);
//     this.data = [
//       'Hello, ',
//       'Node.js Stream!',
//       'Nice to meet you!'
//     ];

//     this.index = 0;
//   }

//   _read() {
//     if (this.index < this.data.length) {
//       this.push(this.data[this.index]);
//       this.index++;
//     } else {
//       this.push(null);
//     }
//   }
// }

// 읽기 스트림
// const readableStream = new CustomReadable();

// readableStream.on('data', chunk => {
//   console.log('Received:', chunk.toString());
// });

// readableStream.on('end', () => {
//   console.log('Stream ended');
// });

// 파일 읽기 스트림
// import { createReadStream } from 'fs';

// const readStream = createReadStream('example.txt', {
//   encoding: 'utf8',
//   highWaterMark: 16
// });

// readStream.on('data', chunk => {
//   console.log('Received:', chunk);
// });

// readStream.on('end', () => {
//   console.log('Finished reading');
// });

// 쓰기 스트림
// import { Writable } from 'stream';

// const writableStream = new Writable({
//   write(chunk, encoding, callback) {
//     console.log('Writing:', chunk.toString());
//     callback();
//   }
// });

// writableStream.write('Hello, ');
// writableStream.write('Node.js Stream!');
// writableStream.write('Nice to meet you!');
// writableStream.end();

// 파일 쓰기 스트림
// import { 
//   createReadStream, createWriteStream 
// } from 'fs';

// const readStream
//  = createReadStream('example.txt',
//   { highWaterMark: 16 }
// );
// const writeStream
//  = createWriteStream('clone.txt');

// readStream.on('data', chunk => {
//   console.log('Received chunk:', chunk.toString());
//   writeStream.write(chunk);
// });

// readStream.on('end', () => {
//   writeStream.end();
//   console.log('File copied successfully.');
// });

// 더 간결한 파일 쓰기 스트림
// import { 
//   createReadStream, createWriteStream 
// } from 'fs';

// const readStream
//  = createReadStream('example.txt',
//   { highWaterMark: 16 }
// );
// const writeStream
//  = createWriteStream('clone2.txt');

// readStream.pipe(writeStream);

// writeStream.on('finish', () => {
//   console.log('File copied successfully')
// });

// 듀플렉스 양방향 스트림
// import { Duplex } from 'stream'

// const duplexStream = new Duplex({
//   read(size) {
//     this.push('Hello, ');
//     this.push('Node.js Stream!');
//     this.push('Nice to meet you!');
//     this.push(null);
//   },
//   write(chunk, encoding, callback) {
//     console.log('Received:', chunk.toString());
//     callback();
//   }
// })

// duplexStream.on('data', chunk => {
//   console.log('Emitted:', chunk.toString());
// });

// duplexStream.write('Node.js Stream');
// duplexStream.end();

// 트랜스폼 데이터 변형 스트림
// import { Transform } from 'stream'

// const upperCaseTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     callback(null, chunk.toString().toUpperCase());
//   }
// });

// upperCaseTransform.write('hello, ')
// upperCaseTransform.write('node.js stream!')
// upperCaseTransform.write('Nice to meet you!')
// upperCaseTransform.end();

// upperCaseTransform.on('data', chunk => {
//   console.log('Transformed:', chunk.toString())
// });

// Readable & Transform
// import { Readable } from 'stream';
// import { Transform } from 'stream';

// const upperCaseTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     callback(null, chunk.toString().toUpperCase());
//   }
// });

// const data = [
//   'hello, ',
//   'node.js stream!',
//   'Nice to meet you!'
// ];

// const readableStream = Readable.from(data);

// readableStream.pipe(upperCaseTransform);

// upperCaseTransform.on('data', chunk => {
//   console.log('Transformed:', chunk.toString());
// });

// Readable & Writable & Transform
// import { createReadStream, createWriteStream } from 'fs';
// import { Transform } from 'stream';

// const readStream = createReadStream('example.txt', { highWaterMark: 16 });

// const upperCaseTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     callback(null, chunk.toString().toUpperCase());
//   }
// });

// const writeStream = createWriteStream('uppercase.txt');

// readStream.pipe(upperCaseTransform).pipe(writeStream);

// writeStream.on('finish', () => {
//   console.log('File copied successfully');
// });

// 실무 활용 스트림
import fs from 'fs';
import zlib from 'zlib';
import crypto from 'crypto';

const password = 'secret-password';
const key = crypto.scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 0);
const algorithm = 'aes-192-cbc';

const readStream = fs.createReadStream('example.txt');
const gzip = zlib.createGzip();
const cipher = crypto.createCipheriv(algorithm, key, iv);
const writeStream = fs.createWriteStream('output.enc.gz');

readStream
  .pipe(gzip)
  .pipe(cipher)
  .pipe(writeStream);

writeStream.on('finish', () => {
  console.log('Compression and encryption completed');
});