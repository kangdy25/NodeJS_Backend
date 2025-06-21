import net from 'net';
import { createWriteStream } from 'fs';

const client = net.createConnection({ port: 3000 }, () => {
  console.log('Connected to server');
  const writeStream = createWriteStream('received.mp4');
  client.pipe(writeStream);
});

client.on('close', () => console.log('File received successfully'));