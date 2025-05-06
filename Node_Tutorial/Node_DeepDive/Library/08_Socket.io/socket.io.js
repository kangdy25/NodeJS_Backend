const app = require('express')();
const server = require('http').createServer(app);

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/socket.html`);
});

const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});

io.on('connection', (client) => {
    console.log('Client connection');

  // 이벤트 연결 및 전달
    client.on('clientmsg', (data) => {
        console.log('This is client Data:', data);
        client.emit('msg', data);
    });

    // 이벤트 연결 및 전달
    client.on('status', () => {
        console.log('Status event(Server)');
        setInterval(() => {
        client.emit('msg2', 'Hello socket.io');
        }, 3000);
    });

    client.on('disconnect', ()=>{
        console.log('Client disconnection');
    })
});

server.listen(3000, () => {
    console.log('Server is running port 3000!');
});

