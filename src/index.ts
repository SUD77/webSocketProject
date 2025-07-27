import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

//event handler
// wss.on("connection", function connection(ws) {
//   ws.on("error", console.error);

//   ws.on("message", function message(data) {
//     console.log("received: %s", data);
//   });

//   ws.send("something");
// });

//event handler
wss.on("connection", function(socket){
  console.log("user connected");
  setInterval(()=>{
    socket.send("Meow Meow : "+ Math.random()*10);
  },1000)
  // socket.send("hello");
})