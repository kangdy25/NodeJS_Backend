import net from 'net';
import { createReadStream } from 'fs';

const server = net.createServer(socket => {
  console.log('Client connected');
  const readStream = createReadStream('video.mp4');
  readStream.pipe(socket);

  socket.on('close', () => console.log('Client disconnected'));
});

server.listen(3000, () => console.log('Server listening on port 3000'));