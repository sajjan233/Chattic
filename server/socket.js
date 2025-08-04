import Chess from "./src/features/chess/socket.js";

// socket.js ✅ CORRECTED VERSION
export const initializeSocket = (io) => {
  io.on('connection', (socket) => {
    console.log(`🟢 New client connected: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`🔴 Client disconnected: ${socket.id}`);
    });



    let baord = Chess.getVisualBoard()
    socket.emit('board', baord)






    socket.on('chessPlayerConnect', async (reqData) => {
      const res = await Chess.chessPlayerConnect(reqData, socket, io);
      console.log("Socket chess connect result:", res);
    });


    // Example event
    socket.on('joinRoom', ({ roomId, username }) => {
      socket.join(roomId);
      console.log(`👤 ${username} joined room ${roomId}`);
    });
  });
};
