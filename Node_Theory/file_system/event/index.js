// 기본 사용자 입력 받기
// import readline from 'readline/promises';
// import { stdin as input, stdout as output } from 'process';
// import { appendFile } from 'fs/promises';

// const rl = readline.createInterface({ input, output });

// try {
//   const name = await rl.question('What is your name? ');
//   console.log(`Hello, ${name}!`);

//   const age = await rl.question('How old are you? ');
//   console.log(`You are ${age} years old.`);
// } catch (err) {
//   console.error('Error:', err);
// } finally {
//   rl.close();
// }

// try {
//   while (true) {
//     const text = await rl.question(
//       'Enter text (type "exit" to quit): '
//     );
//     if (text.toLowerCase() === 'exit') break;
//     await appendFile('./key-input.txt', text + '\n');
//   }
// } finally {
//   rl.close();
// }

// 파일 시스템 이벤트
// import { watch } from 'fs';

// const filePath = './key-input.txt';
// watch(filePath, (eventType, filename) => {
//   console.log(
//     `${filename}: ${eventType}`
//   );
// });

// console.log(`Watching file: ${filePath}`);

// 재귀적 파일 시스템 이벤트 감지
// import { watch } from 'fs';

// const dirPath = './src';

// watch(dirPath, (eventType, filename) => {
//   if (filename) {
//     console.log(
//       `${filename}: ${eventType}`);
//   }
// });

// console.log(`Watching directory: ${dirPath}`);

// 사용자 입력을 통한 프로그램 종료 (watch)
// import { watch } from 'fs';
// import readline from 'readline/promises';
// import { stdin as input, stdout as output } from 'process';

// const filePath = './src';
// const watcher = watch(filePath);

// watcher.on('change', (eventType, filename) => {
//   console.log(`${filename}: ${eventType}`);
// });
// watcher.on('error', (err) => {
//   console.error(`Error: ${err.message}`);
// });

// const rl = readline.createInterface({ input, output });

// for await (const input of rl) {
//   if (input.trim().toLowerCase() === 'exit') {
//     watcher.close();
//     rl.close();
//     console.log('Watcher stopped.');
//     process.exit(0);
//   }
// }

// watchFile
// import { watchFile } from 'fs';

// const filePath = './key-input.txt';

// watchFile(filePath, { interval: 1000 }, (curr, prev) => {
//   console.log(
//     `Prev-mtime: ${prev.mtime.toTimeString().split(' ')[0]}`
//   );
//   console.log(
//     `Curr-mtime: ${curr.mtime.toTimeString().split(' ')[0]}`
//   );
// });

// console.log(`Watching: ${filePath}`);

// 파일이 변경될 때마다 백업 파일 작성하는 프로그램
import { watchFile, unwatchFile } from 'fs';
import { readFile, appendFile } from 'fs/promises';

const filePath = './key-input.txt';
const logFilePath = './logs.txt';

watchFile(filePath, { interval: 500 }, async (c, _) => {
  const content = await readFile(filePath, 'utf-8');

  if (!content.trim()) {
    unwatchFile(filePath);
    console.log('Stopped watching.');
    return;
  }

  let logEntry = `[${c.mtime.toTimeString().split(' ')[0]}]\n`;
  logEntry += `${content}\n\n`;

  await appendFile(logFilePath, logEntry);
});

console.log(`Watching: ${filePath}`);