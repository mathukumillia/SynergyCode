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
        	console.log('DEBUG: Error Encountered When Trying To Load File ' + fileName);
        	return (new Error('Failed to load file ' + fileName));
        }
        socket.emit('fileContent', {message: editableFile});
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

/**
* Create an editableFile
**/
exports.create = function(req, res) {
    var editableFile = new EditableFile(req.body);
    editableFile.user = req.user;

    editableFile.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                editableFile: editableFile
            });
        } else {
            res.jsonp(editableFile);
        }
    });

    console.log('DEBUG: File Created');
};

/**
* saves files to the database
**/
exports.saveFile = function(fileInfo){
    console.log('This is the file content being saved ' + fileInfo[1]);
    EditableFile.load(fileInfo[0], function(err, file){
        file.content = fileInfo[1];
        file.save(function(err) {
            if (err) {
                console.log('DEBUG: Error Occurred When Trying To Save File');
                return err;
            } 
        });
        console.log('DEBUG: File Saved');
    });
};

/**
*  List of all editableFiles
**/
exports.all = function(socket){
    EditableFile.find().sort('created').populate('user', 'name username').exec(function(err, files) {
        socket.emit('fileList', {message: files});
    });
};
