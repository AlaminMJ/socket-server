import express from 'express';
import http from 'http';
import { Socket } from 'socket.io';
const app = express();
const server = http.createServer(app);
server.listen(3000, () => console.log('Server is ok'));
const io = new Socket(server);
3;
io.on('connection', (socket) => {
  console.log(socket.id);
});
