'use strict';

angular.module('mean.editableFiles').factory('socket', function(socketFactory){
  return socketFactory();
});

angular.module('mean.editableFiles').controller('EditableFilesCtrl', ['$scope', 'Global', 'socket', 'EditableFiles', function($scope, Global, socket, EditableFiles){
	$scope.global = Global;

    var currentFile;
    var fileOpened = false;

	$scope.codeMirrorLoaded = function(editor){
        editor.setOption('lineNumbers', true);
        editor.setOption('theme', 'monokai');
        editor.setOption('lineWrapping', true);
        editor.setOption('mode', 'application/xml');

        editor.on('change', function(){
            if(fileOpened){
                console.log('DEBUG: Editor Content Changed');
                socket.emit('saveFile', {message: currentFile});
            }
        });
    };

    socket.on('hello', function(){
      console.log('DEBUG: Socket.io Is Functional.');
    });

    socket.on('fileContent', function(data){
        fileOpened = true;
        currentFile = data.message;
        $scope.content = currentFile.content;
        console.log('DEBUG: ' + currentFile.title + ' Is Now Open');
    });

    $scope.create = function() {
        var editableFile = new EditableFiles({
            title: this.title,
            content: this.content
        });

        editableFile.$save(function(response) {});

        this.title = '';
        this.content = '';

        socket.emit('refreshFileList');
    };

}]);