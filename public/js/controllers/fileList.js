'use strict';

angular.module('mean.system').controller('FileListCtrl', ['$scope', 'Global', 'socket', '$upload',function($scope, Global, socket, $upload){
	$scope.global = Global;

  var fileNames = new Array();

  //creates the array of file names that gets published to the page
  var publishList = function(data){
    for(var i = 0; i<data.message.length; i++){
      fileNames[i] = data.message[i].title;
    }
  };

  //tells file list to re-publish every time the server sends the fileList event
  socket.on('fileList', function(data){
    publishList(data);
  });

  //allows angular to put the tree on the page
  $scope.fileMenu = fileNames;

  //sends the selected file name to the server to load the file
  $scope.sendFileName = function(fileName){
    socket.emit('fileName', {message: fileName});
    console.log('DEBUG: File Name Sent: ' + fileName);
  };

  //sends uploaded file to the backend
  $scope.fileUpload = function($files){
    var file = $files[0];
    $scope.upload = $upload.upload({url: '/fileUpload', method: 'POST', file: file});
  };
}]);