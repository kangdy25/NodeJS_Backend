// 기본 UDP 방식 서버

// import dgram from 'node:dgram';

// const PORT = 3000;
// const server = dgram.createSocket('udp4');

// server.on('message', 
//   (msg, {address, port}) => {
//     console.log(
//       `👱: ${msg} from ${address}:${port}`
//     );
//     server.send(
//       `👉 ${msg}`, port, address, (err) => {
//         if (err) console.error(err);
//     });
// });

// server.bind(PORT, () => {
//   console.log(`🤖 on port ${PORT}`);
// });

// 지속적으로 클라이언트에게 데이터를 받는 서버 구현
import dgram from 'node:dgram';

const PORT = 3000;
const server = dgram.createSocket('udp4');

server.on('message', 
  (msg) => {
    const data = msg.toString();
    console.log(`📍 ${data}`);
  }
);

server.bind(PORT, 
  () => {
    console.log(`🤖 on port ${PORT}`);
  }
);