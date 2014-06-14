'use strict';

angular.module('mean.editableFiles').factory('socket', function(socketFactory){
  return socketFactory();
});

angular.module('mean.editableFiles').controller('EditableFilesCtrl', ['$scope', 'Global', 'socket', 'EditableFiles', function($scope, Global, socket, EditableFiles){
	$scope.global = Global;

    var currentFile;
    var fileOpened = false;
    var editorInstance;

	$scope.codeMirrorLoaded = function(editor){
        editor.setOption('lineNumbers', true);
        editor.setOption('theme', 'monokai');
        editor.setOption('lineWrapping', true);
        editor.setOption('mode', 'application/xml');

        editor.on('change', function(){
            if(fileOpened){
                console.log('DEBUG: Editor Content Changed');
                var fileInfo = [currentFile.title, $scope.content];
                socket.emit('saveFile', {message: fileInfo});
            }
        });

        editorInstance = editor;
    };

    socket.on('hello', function(){
      console.log('DEBUG: Socket.io Is Functional.');
    });

    var connection = new sharejs.Connection();

    socket.on('fileContent', function(data){
        currentFile = data.message;

        //disconnects the previous sharejs session in order to prevent any text mismatches and allow different people to edit different files if necessary 
        console.info('DEBUG: Connection Disconnected');
        connection.disconnect();

        // opens a new sharejs connection with the current file name as the document name
        // This allows people to concurrently edit files when they are on the same file, but will allow them 
        // to edit different files if necessary
        connection = new sharejs.Connection();
        connection.open(currentFile.title, 'text', function(error, doc) {
            doc.attach_cm(editorInstance);
            console.info('DEBUG: Document opened');
            editorInstance.setValue(currentFile.content);
        });
        console.info('DEBUG: Connection Opened');

        fileOpened = true;
        console.log('DEBUG: ' + currentFile.title + ' Is Now Open');
    });

    $scope.create = function() {
        var editableFile = new EditableFiles({
            title: this.title,
            content: this.content
        });

        editableFile.$save();

        this.title = '';
        this.content = '';

        socket.emit('refreshFileList');
    };

}]);