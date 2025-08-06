import Chess from "./src/features/chess/socket.js";

// socket.js ✅ CORRECTED VERSION
export const initializeSocket = (io) => {
  io.on('connection', async (socket) => {
    console.log(`🟢 New client connected: ${socket.id}`);
    socket.on('chessPlayerConnect', async (reqData) => {
      const res = await Chess.chessPlayerConnect(reqData, socket, io);
      console.log("Socket chess connect result:", res);
      socket.emit('roomInfo', res)
    });



    let board = await Chess.getVisualBoard();
    let data = { board: board, nextPlay: 'white' }

    socket.emit('board', data)






    socket.on('disconnect', () => {
      console.log(`🔴 Client disconnected: ${socket.id}`);
    });


  });
};
