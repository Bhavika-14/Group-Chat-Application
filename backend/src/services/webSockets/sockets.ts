import { Server } from "socket.io";
import { pub, sub } from "../redis/redisServer";

export interface SocketMessage {
  content: string,
  groupId: string,
  senderId: string
}

class SocketServer {
  private _io: Server;

  constructor(server: any) {
    console.log("Init Socket Service...");
    this._io = new Server(server,{
      
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
    sub.subscribe('group');
  }

  public initListeners() {
    const io = this.io;
    console.log("Init Socket Listeners...");

    io.on("connect", (socket) => {
      const groupId = socket.handshake.query.groupId
      console.log("Group Id: ", groupId)
      console.log(`New Socket Connected`, socket.id);
      socket.join(`group#${groupId}`)

      socket.on("event:message", async (message: SocketMessage) => {
        console.log("New Message Received on socket server: ", message);
        
        // publish this message to redis
        pub.publish('group', JSON.stringify(message))
      });

      socket.on('error', () => console.log(socket._error))
    });



    sub.on("message", async (channel, message) => {
      console.log("channel", channel, "new message from redis", message);
      if (channel === "group") {
        const messageResponse = JSON.parse(message) as SocketMessage;
        console.log("message response", messageResponse)
        let group = `group#${messageResponse.groupId}`
        io.to(group).emit("message", messageResponse);
      }
    });
  }

  get io() {
    return this._io;
  }
}

export default SocketServer;