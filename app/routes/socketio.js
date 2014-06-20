'use strict';

//controllers that this route needs to use
var editableFile = require('../controllers/editableFiles');
var chat = require('../controllers/chat');

module.exports = function(socket){
	
	//sets up the socket connection for the load file function
	editableFile.loadFile(socket);	
	
	//sets up the socket connection to load a file list for the file tree 
	editableFile.all(socket);
	chat.chat(socket);

	//catches refresh event whenever the page is reloaded
	socket.on('refreshFileList', function(){
		editableFile.all(socket);
		console.log('DEBUG: Refresh File List Event Received On Backend');
	});

	//sends signal to save the file with the passed in data
	socket.on('saveFile', function(data){
		editableFile.saveFile(data.message);
	});
};