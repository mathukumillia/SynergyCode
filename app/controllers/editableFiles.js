'use strict';

exports.loadFile = function(app){
	var server = require('http').createServer(app), 
    	io = require('socket.io').listen(server); 
	io.sockets.on('connection', function(){
		console.log('DEBUG: You Have Connected To SynergyCode.');
	});
	io.sockets.emit('hello', function(socket){
		console.print('hello emitted');
	});
};

