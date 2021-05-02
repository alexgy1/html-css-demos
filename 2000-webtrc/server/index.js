var http = require("http");
var https = require("https");
var fs = require("fs");

var express = require("express");

var app = express();

var http_server = http.createServer(app);
http_server.listen(2021, () => {
  console.log("server is listening on port 2021");
});

var socketIo = require("socket.io");

//https server
var options = {
  key: fs.readFileSync("./cert/xxx.alex.cn.key"),
  cert: fs.readFileSync("./cert/xxx.alex.cn.pem"),
};
var https_server = https.createServer(options, app);

//bind socket io with https server
var io = socketIo.listen(https_server);
//socket io https 公用一个443 端口

io.sockets.on("connection", (socket) => {
  //socket代表每一个客户 有房间的概念
  //join自己定义的事件
  socket.on("join", (room) => {
    socket.join(room);
    var myRoom = io.sockets.adapter.rooms[room];
    var users = Object.keys(myRoom.sockets).length;
    // socket.emit('joined', room , socket.id)
    // socket.to(room).emit('joined', room, socket.id ) //除自己之外的所有人
    // io.in(room).emit("joined", room, socket.id); // 房间内的所有人
    socket.broadcast.emit("joined", room, socket.id); //除了自己 全部站点
  });

  socket.on("leave", (room) => {
    var myRoom = io.sockets.adapter.rooms[room];
    var users = Object.keys(myRoom.sockets).length;

    //users-1
    socket.leave(room);

    // socket.emit('joined', room , socket.id)
    // socket.to(room).emit('joined', room, socket.id ) //除自己之外的所有人
    // io.in(room).emit("joined", room, socket.id); // 房间内的所有人
    socket.broadcast.emit("joined", room, socket.id); //除了自己 全部站点
  });
});
https_server.listen(443, "0.0.0.0");

// npm install socket.io log4js
