'use strict';

exports.chat = function(socket){
	socket.emit('message', {message: 'Welcome to the chat!'});

	socket.on('send', function(data){
		socket.emit('message', data);
	});
};