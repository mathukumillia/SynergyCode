'use strict';

var editableFile = require('../controllers/editableFiles');

module.exports = function(socket){
	editableFile.loadFile(socket);	
	editableFile.all(socket);
};