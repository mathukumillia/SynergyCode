'use strict';

var editableFiles = require('../controllers/editableFiles'),
	authorization = require('./middlewares/authorization');

module.exports = function(app){
	app.post('/createEditableFiles', authorization.requiresLogin, editableFiles.create);
	console.log('DEBUG: Editable File Route Works');
};