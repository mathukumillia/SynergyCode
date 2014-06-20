'use strict';

var editableFiles = require('../controllers/editableFiles'),
	authorization = require('./middlewares/authorization');

module.exports = function(app){
	app.post('/createEditableFiles', authorization.requiresLogin, editableFiles.create);
	app.post('/edit', authorization.requiresLogin);
	app.post('/fileUpload', authorization.requiresLogin, editableFiles.upload);
	console.log('DEBUG: Editable File Route Works');
};