'use strict';

/**
*	Handles socket requests from the chat on the frontend
**/
exports.chat = function(socket){
	//sends welcome message on connection
	socket.emit('message', {message: 'Welcome to the chat!'});
	
	//handles messages when they get sent 
	socket.on('send', function(data){
    	console.log('message received ' + data.username + " " + data.message);
    	socket.emit('message', { message: data.message, username: data.username });
    	socket.broadcast.emit('message', { message: data.message, username: data.username });
	});
};
