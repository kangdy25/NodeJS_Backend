const fs = require('fs');
const path = require('path');

// 파일 읽기 - 비동기식
fs.readFile('./hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// 파일 읽기 - 동기식
const data = fs.readFileSync('./hello.txt', 'utf-8');
console.log(data)

console.log("--- The last line ---");

// 파일 쓰기 - 동기식
fs.writeFileSync('./out-sync.txt', 'Hello, JavaScript!');
console.log('File written synchronously.');

// 파일 쓰기 - 비동기식
fs.writeFile('./out-async.txt', 'Hello, Node.JS!', (err) => {
  if (err) throw err;
  console.log('File written asynchronously.');
});

console.log("--- The last line ---");

// 파일에 데이터 추가 - 동기식
fs.appendFileSync('./out-sync.txt', '\nAdditional text.');
console.log('Text appended synchronously.');

// 파일에 데이터 추가 - 비동기식
fs.appendFile('./out-async.txt', '\nAdditional text.', (err) => {
  if (err) throw err;
  console.log('Text appended asynchronously.');
});

console.log("--- The last line ---");

// 파일 유무 확인 - 동기식
if (fs.existsSync('out-sync.txt')) {
  console.log('Sync', 'File exists.');
} else {
  console.log('Sync', 'File does not exist.');
}

// 파일 유무 확인 - 비동기식
fs.access('out-async.txt', fs.constants.F_OK, (err) => {
  console.log('Async', err ? 'File does not exist.' : 'File exists.');
});

// ⚠️ Deprecated
fs.exists('out-async.txt', (exists) => {
  console.log(exists ? 'File exists.' : 'File does not exist.');
});

// 파일 삭제 - 동기식
fs.unlinkSync('out-sync.txt');
console.log('File deleted synchronously.');

// 파일 삭제 - 비동기식
fs.unlink('out-async.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted asynchronously.');
});

// CommonJS에서 사용 가능한 파일 경로 전역변수
console.log(__dirname);
console.log(__filename);

// join 함수: 인자로 주어진 경로 조각을 이어붙여 하나로 합침
console.log(path.join('files', 'hello.txt'));
console.log(path.join('./files', 'utils', '../hello.txt'));

console.log(path.join(__dirname, 'files', 'hello.txt'));

// resolve 함수: 작업 중인 디렉토리에 인자로 주어진 경로를 이어붙여서 절대 경로를 생성함
console.log(path.resolve('files/hello.txt'));

// 실제 파일 또는 폴더의 유무와는 관계없이 문자열을 경로로 해석해서 다룸
const filePath = path.join(__dirname, 'files', 'hello.txt');
console.log(filePath);

// basename: 해당 경로의 마지막에 있는 파일이나 폴더의 이름을 추출하여 반환한다
console.log('File Name:', path.basename(filePath));
// dirname: 디렉토리의 경로를 반환한다
console.log('Directory:', path.dirname(filePath));
// extname: 파일의 확장자를 추출하여 반환한다.
console.log('Extension:', path.extname(filePath));

// parse 함수: 경로 문자열을 토대로 해당 경로의 정보를 담은 객체를 반환한다.
const parsed = path.parse(filePath);
console.log(parsed);

// format 함수: parse 함수를 기반으로 만들어진 객체를 해당 경로의 문자열로 조합하여 반환한다.
const formatted = path.format(parsed);
console.log('Formatted Path:', formatted);

const from = '/Users/yalco/nodejs/htllo.txt';
const to = '/Users/yalco/javascript/es6';

// relative 함수: 두 경로 문자열 사이의 관계를 나타냄 (이동 방법)
const relativePath = path.relative(from, to);
console.log('Relative Path:', relativePath);