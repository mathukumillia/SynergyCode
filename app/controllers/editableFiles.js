'use strict';

exports.loadFile = function(socket){
	socket.emit('hello', function(){
		console.print('hello emitted');
	});
};

