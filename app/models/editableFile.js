'use strict';

/**
* Module dependencies
**/
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
* editableFile Schema
**/
var editableFileSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	project: {
		type: String,
		default: 'unclassified',
		trim: true
	},
	title: {
		type: String,
		default: 'File',
		trim: true
	},
	content: {
		type: String,
		default: ''
	}
});

/**
* Read a file from the db
**/
editableFileSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('editableFile', editableFileSchema);