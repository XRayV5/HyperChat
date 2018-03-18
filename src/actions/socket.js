import sio from "socket.io-client";

const baseURL = "http://localhost:3090/";

const connect = () => (state, actions) => {
  const socket = sio.connect(baseURL, {
    query: `token=${sessionStorage.getItem("token")}`
  });
  /**
    Observes all incoming server-side events,
    and update store accordingly
  */
  socket
    .on("connect", () => {
      console.log("Socket Connected.");
      actions.setSocket(socket);
    })
    .on("disconnect", () => {
      console.log("Socket Disconnected.");
    });
};

const setSocket = socket => ({ socket });

export default { connect, setSocket };
