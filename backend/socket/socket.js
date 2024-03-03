import { Server } from "socket.io";
import http from "http";
import express from 'express';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}

const userSocketMap = {};

io.on('connection', (socket) => {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId;

    if(userId != "undefined") userSocketMap[userId] = socket.id;

    //io.commit用于发送事件给所有已连接的用户
    //所有用户连接时都会收到当前在线用户
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    //socket.on 用于监听事件，可以用于客户端或者服务端
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        //用户断开连接时，删除用户集合内对应ID，并重新发送用户信息给在线用户
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

export { app, io, server };