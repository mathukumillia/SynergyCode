'use strict';

angular.module('mean.editableFiles').factory('socket', function(socketFactory){
  return socketFactory();
});

angular.module('mean.editableFiles').controller('EditableFilesCtrl', ['$scope', 'Global', 'socket', 'EditableFiles', function($scope, Global, socket, EditableFiles){
	$scope.global = Global;

	$scope.codeMirrorLoaded = function(editor){
        editor.setOption('lineNumbers', true);
        editor.setOption('theme', 'monokai');
        editor.setOption('lineWrapping', true);
        editor.setOption('mode', 'application/xml');
    };

    socket.on('hello', function(){
      console.log('DEBUG: Socket.io Is Functional.');
    });

    socket.on('fileContent', function(data){
      console.log(data.message);
    });

    $scope.create = function() {
        var editableFile = new EditableFiles({
            title: this.title,
            content: this.content
        });

        editableFile.$save(function(response) {});

        this.title = '';
        this.content = '';

        console.log('DEBUG: Create Called On FrontEnd');
    };

}]);