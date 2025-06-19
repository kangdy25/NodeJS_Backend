// node: => Node.js의 내장 모듈을 사용자 모듈과 구분하기 위한 프리픽스
import net from 'node:net';

const PORT = 3000;

const server = net.createServer(
  (socket) => {
    console.log('👱 connected');

    socket.on('data', (data) => {
      console.log(`👱: ${data}`);
      socket.write(`👉 ${data}`);
    });

    socket.on('end', () => {
      console.log('👱 disconnected');
    });
  }
);

server.listen(PORT, () => {
  console.log(`🤖 on port ${PORT}`);
});