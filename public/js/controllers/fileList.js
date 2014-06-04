'use strict';

angular.module('mean.system').controller('FileListCtrl', ['$scope', 'Global', 'socket', function($scope, Global, socket){
	$scope.global = Global;

  var publishList = function(data){
    for(var i = 0; i<data.message.length; i++){
      console.log(data.message[i].title);
    }
  };

  socket.on('fileList', function(data){
    publishList(data);
  });

	 $scope.roleList1 = [
        { 'roleName' : 'User', 'roleId' : 'role1', 'children' : [
          { 'roleName' : 'subUser1', 'roleId' : 'role11', 'children' : [] },
          { 'roleName' : 'subUser2', 'roleId' : 'role12', 'children' : [
            { 'roleName' : 'subUser2-1', 'roleId' : 'role121', 'children' : [
              { 'roleName' : 'file1', 'roleId' : 'role1211', 'children' : [] },
              { 'roleName' : 'subUser2-1-2', 'roleId' : 'role1212', 'children' : [] }
            ]}
          ]}
        ]},

        { 'roleName' : 'Admin', 'roleId' : 'role2', 'children' : [] },

        { 'roleName' : 'Guest', 'roleId' : 'role3', 'children' : [] }
      ];
    $scope.roleList = $scope.roleList1;

    $scope.sendFileName = function(){
      socket.emit('fileName', {message: $scope.tree.currentNode.roleName});
      console.log('DEBUG: File Name Sent: ' + $scope.tree.currentNode.roleName);
    };
}]);