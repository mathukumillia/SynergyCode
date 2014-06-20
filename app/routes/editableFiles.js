'use strict';

// these are the controllers that this route uses
var editableFiles = require('../controllers/editableFiles'),
	authorization = require('./middlewares/authorization');

module.exports = function(app){
	// route to create a new file
	app.post('/createEditableFiles', authorization.requiresLogin, editableFiles.create);

	// redirects user to edit page
	app.post('/edit', authorization.requiresLogin);    
	
	// route to upload files when front end submits a file
	app.post('/fileUpload', authorization.requiresLogin, editableFiles.upload);    
	console.log('DEBUG: Editable File Route Works');
};