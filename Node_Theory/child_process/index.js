// // exec 함수
// import { exec } from 'child_process';

// exec('node -v', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`Stderr: ${stderr}`);
//     return;
//   }
//   console.log(`Output: ${stdout}`);
// });

// // 현 운영체제에 따라 파일 목록을 나열하는 명령어 실행
// import { exec } from 'child_process';
// import { promisify } from 'util';

// const execPromise = promisify(exec);

// const command = process.platform === 'win32' ? 'dir' : 'ls -l';

// async function runCommand() {
//   try {
//     const { stdout, stderr } = await execPromise(command);
//     if (stderr) {
//       console.error(`Stderr: ${stderr}`);
//       return;
//     }
//     console.log(`Output:\n${stdout}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//   }
// }

// runCommand();

// // execFile 함수
// import { execFile } from 'child_process';

// // exec('node -v', (error, stdout, stderr) => { ...

// execFile('node', ['-v'], (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`Stderr: ${stderr}`);
//     return;
//   }
//   console.log(`Output: ${stdout}`);
// });

// // 운영체제에 따라 기본으로 설치된 에디터 프로그램 열기import { execFile } from 'child_process';
// import { execFile } from 'child_process';
// import { platform } from 'process';

// if (platform === 'win32') {
//   execFile('notepad.exe', (error) => {
//     if (error) {
//       console.error(`Error: ${error.message}`);
//     } else {
//       console.log('Notepad opened successfully.');
//     }
//   });
// } else if (platform === 'darwin') {
//   execFile('open', ['-a', 'TextEdit'], (error) => {
//     if (error) {
//       console.error(`Error: ${error.message}`);
//     } else {
//       console.log('TextEdit opened successfully.');
//     }
//   });
// } else {
//   console.log('Unsupported OS');
// }

// spawn 함수 (스트림 방식 실시간 데이터 처리)
// import { spawn } from 'child_process';

// const process = spawn('node', ['-v']); 

// process.stdout.on('data', (data) => {
//   console.log(`Output:\n${data}`);
// });

// process.stderr.on('data', (data) => {
//   console.error(`Stderr: ${data}`);
// });

// process.on('close', (code) => {
//   console.log(`Process exited with code ${code}`);
// });

// 파이썬 코드 실행 함수
// import { spawn } from 'child_process';

// const process = spawn('python3', ['script.py']);

// process.stdout.on('data', (data) => {
//   console.log(`Received: ${data}`);
// });

// process.stderr.on('data', (data) => {
//   console.error(`Error: ${data}`);
// });

// process.on('close', (code) => {
//   console.log(`Exited with code ${code}`);
// });

// fork 함수
// import { fork } from 'child_process';

// const child = fork('./child.js');

// child.on('message', (message) => {
//   console.log(`From child: ${message}`);
// });

// child.send('Hello, child process!');

// 프로세스 종료가 포함된 코드
// import { fork } from 'child_process';

// const numChildren = 3;
// let completed = 0;

// for (let i = 0; i < numChildren; i++) {
//   const child = fork('child.js');

//   child.send({ number: 10000000 * (i + 1) });

//   child.on('message', (result) => {
//     console.log(`Result from ${i}: ${result}`);
//     completed++;

//     if (completed === numChildren) {
//       console.log('All completed. Exiting...');
//       process.exit(0);
//     }
//   });
// }

// console.log('Main process is done!');

import { fork } from 'child_process';

const child = fork('child.js');

for (let i = 1; i <= 5; i++) {
  child.send(i);
}

setTimeout(() => {
//   child.send('exit');
  child.kill();
}, 6000);

child.on('message', (msg) => {
  console.log(`Received: ${msg}`);
});

child.on('close', (code) => {
  console.log(`Child exited (${code})`);
});