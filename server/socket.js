// socket.js ✅ CORRECTED VERSION
export const initializeSocket = (io) => {
  io.on('connection', (socket) => {
    console.log(`🟢 New client connected: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`🔴 Client disconnected: ${socket.id}`);
    });

    // Example event
    socket.on('joinRoom', ({ roomId, username }) => {
      socket.join(roomId);
      console.log(`👤 ${username} joined room ${roomId}`);
    });
  });
};
