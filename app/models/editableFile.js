'use strict';

/**
* Module Dependencies
**/
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * EditableFile Schema
 */
var EditableFileSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    content: {
        type: String,
        default: ''
    },
    permission: {
    	type: String,
    	default: 'baseUser'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
EditableFileSchema.path('title').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');

EditableFileSchema.path('permission').validate(function(permission) {
    return permission.length;
}, 'Permission level must be specified');

/**
 * Statics
**/
EditableFileSchema.statics.load = function(title, cb) {
    this.findOne({
        title: title
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('EditableFile', EditableFileSchema);