import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

//event handler
wss.on("connection", function (socket) {
  console.log("user connected");

  //receive msg from client
  socket.on("message", (e) => {
    if (e.toString() === "ping") {
      socket.send("pong");
    } else {
      socket.send("Meow");
    }
  });
});
