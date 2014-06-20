'use strict';

//service to allow angular to interact with editable files
angular.module('mean.editableFiles').factory('EditableFiles', ['$resource', function($resource) {
    return $resource('createEditableFiles', {
        
    }, {
        
    });
}]);