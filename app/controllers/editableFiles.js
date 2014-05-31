'use strict';

var mongoose = require('mongoose'),
	EditableFile = mongoose.model('EditableFile');

/**
* Retrieve a file from the database and send it to the frontend using socket
**/
var loadFileFromDb = function(fileName, socket){
	console.log('DEBUG: Loading File From Database');
	EditableFile.load(fileName, function(err, editableFile) {
        if (err) return err;
        if (!editableFile){
        	console.log("DEBUG: Error Encountered When Trying To Load File " + fileName);
        	return (new Error('Failed to load file ' + fileName));
        }
        socket.emit('fileContent', {message: editableFile.content});
        console.log('DEBUG: Emitted File Content');
    });
};

/**
* Load a file from the database using the title
**/
exports.loadFile = function(socket){

	//test event to ensure socket communication
	socket.emit('hello', function(){
		console.log('DEBUG: Hello Emitted');
	});

	var fileName;
	socket.on('fileName', function(data){
		fileName = data.message;
		console.log('DEBUG: File Name Received: ' + fileName);
		loadFileFromDb(fileName, socket);
	});

};
