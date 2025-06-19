// 기본 클라이언트 코드

// import net from 'node:net';

// const PORT = 3000;

// const client = net.createConnection(
//   { port: PORT }, 
//   () => {
//     console.log('Connected to 🤖');
//     client.write('Hello Server!');
//   }
// );

// client.on('data', (data) => {
//   console.log(`🤖: ${data}`);
//   client.end();
// });

// client.on('end', () => {
//   console.log('Disconnected');
// });

// 채팅 프로그램
import net from 'node:net';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'process';

const PORT = 3000;
const HOST = '127.0.0.1';
const rl = readline.createInterface({ input, output });

const client = net.createConnection(
  { port: PORT, host: HOST }, () => console.log('Connected to 🤖'));

client.on('data', (data) => console.log(`🤖: ${data}`));
client.on('end', () => {
  console.log('Disconnected');
  rl.close();
});

while (true) {
  const msg = await rl.question('');
  if (msg === 'exit') {
    client.end();
    break;
  }
  client.write(msg);
}