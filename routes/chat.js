module.exports = io => {
    io.on('connection', (socket) => {

        // User join chat
        socket.on('join', (data) => {
            socket.broadcast.emit('userjoinedthechat', `${data.userNickname} : has joined the chat `);
        });

        // User send message
        socket.on('sendmessage', (senderNickname, messageContent) => {
            const message = {
                "message": messageContent,
                "senderNickname": senderNickname
            };
            socket.broadcast.emit('message', message);
            socket.emit('message', message);
        });

        // User disconnected
        socket.on('disconnect', () => {
            socket.broadcast.emit("userdisconnect", ' user has left');
        });
    });
};