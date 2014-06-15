'use strict';

var editableFile = require('../controllers/editableFiles');
var chat = require('../controllers/chat');

module.exports = function(socket){
	editableFile.loadFile(socket);	
	editableFile.all(socket);
	chat.chat(socket);

	socket.on('refreshFileList', function(){
		editableFile.all(socket);
		console.log('DEBUG: Refresh File List Event Received On Backend');
	});

	socket.on('saveFile', function(data){
		editableFile.saveFile(data.message);
	});
};