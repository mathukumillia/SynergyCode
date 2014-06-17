'use strict';

exports.chat = function(socket){
	socket.emit('message', {message: 'Welcome to the chat!'});
	socket.on('send', function(data){
    	console.log('message received ' + data.username + " " + data.message);
    	socket.emit('message', { message: data.message, username: data.username });
    	socket.broadcast.emit('message', { message: data.message, username: data.username });
	});
};
