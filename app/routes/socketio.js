'use strict';

var editableFile = require('../controllers/editableFiles');

module.exports = function(socket){
	editableFile.loadFile(socket);	
	editableFile.all(socket);

	socket.on('refreshFileList', function(){
		editableFile.all(socket);
	});

	socket.on('saveFile', function(data){
		editableFile.saveFile(data.message);
	});
};