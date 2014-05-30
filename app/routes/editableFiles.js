'use strict';

module.exports = function(socket){
	var editableFile = require('../controllers/editableFiles');
	editableFile.loadFile(socket);	
};