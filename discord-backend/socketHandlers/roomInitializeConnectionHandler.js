const roomInitializeConnectionHandler = (socket, data) => {
  const { connUserSocketId } = data;
  
  const initData = { connUserSocketId: socket.id };
  console.log("roomInitializeConnectionHandler", {connUserSocketId, initData});
  socket.to(connUserSocketId).emit("conn-init", initData);
};

module.exports = roomInitializeConnectionHandler;
