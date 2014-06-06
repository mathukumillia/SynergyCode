'use strict';

angular.module('mean.system').controller('FileListCtrl', ['$scope', 'Global', 'socket', function($scope, Global, socket){
	$scope.global = Global;

  var fileNames = new Array();

  var publishList = function(data){
    for(var i = 0; i<data.message.length; i++){
      fileNames[i] = data.message[i].title;
    }
  };

  socket.on('fileList', function(data){
    publishList(data);
  });

  $scope.fileMenu = fileNames;

    $scope.sendFileName = function(fileName){
      socket.emit('fileName', {message: fileName});
      console.log('DEBUG: File Name Sent: ' + fileName);
    };
}]);