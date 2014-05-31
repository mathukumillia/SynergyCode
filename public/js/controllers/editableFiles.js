'use strict';

angular.module('mean.system').factory('socket', function(socketFactory){
  return socketFactory();
});

angular.module('mean.system').controller('EditableFilesCtrl', ['$scope', 'Global', 'socket' ,function($scope, Global, socket){
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

}]);