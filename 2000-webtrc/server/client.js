var btnConnect;
var outputArea;
var inputArea;
var btnSend;
var userName;
//need import sockio in client

btnConnect.onclick = () => {
  //connect
  socket = io.connect();

  //reveive message
  socket.on("joined", (room, id) => {
    btnConnect.disabled = true;
  });

  socket.on("leaved", (room, id) => {});
  socket.on("message", (room, id, data) => {
    outputArea.value = outputArea.value + data + "\r";
  });

  //send message
  room = inputRoom.value;
  socket.emit("join", room);
};

btnSend.onclick = function () {
  var data = inputArea.value;
  data = userName.value + ":" + data;

  socket.emit("message", room, data);
};
