// 기본 UDP 방식 클라이언트

// import dgram from 'node:dgram';

// const PORT = 3000;
// const client = dgram.createSocket('udp4');

// const message = 'Hello UDP Server!';

// client.send(message, PORT, 'localhost', 
//   (err) => {
//     if (err) console.error(err);
//     console.log('Message sent to server');
// });

// client.on('message', (msg) => {
//     console.log(`🤖: ${msg}`);
//     client.close();
// });

// 지속적으로 서버에게 위치 정보를 전송하는 클라이언트 구현
import dgram from 'node:dgram';

const PORT = 3000;
const client = dgram.createSocket('udp4');

let x = 0, y = 0;

setInterval(
  () => {
    x += Math.floor(Math.random() * 10);
    y += Math.floor(Math.random() * 10);
    const message = `x: ${x}, y: ${y}`;

    client.send(
      message, PORT, 'localhost', 
      (err) => {
        if (err) console.error(err);
        console.log(`🧭 ${message}`);
    });
}, 300);