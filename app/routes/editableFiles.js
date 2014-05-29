'use strict';

module.exports = function(app){
	var editableFile = require('../controllers/editableFiles');
	editableFile.loadFile(app);	
};