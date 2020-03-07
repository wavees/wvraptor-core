module.exports = (socket) => {
  socket.on('connection', (socket) => {
    console.log("a user connected");
  });
};