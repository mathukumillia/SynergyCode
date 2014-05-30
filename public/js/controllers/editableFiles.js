'use strict';

angular.module('mean.system').factory('socket', function(socketFactory){
  return socketFactory();
});

angular.module('mean.system').controller('FileListCtrl', ['$scope', 'Global', function($scope, Global){
	$scope.global = Global;

	 $scope.roleList1 = [
        { 'roleName' : 'User', 'roleId' : 'role1', 'children' : [
          { 'roleName' : 'subUser1', 'roleId' : 'role11', 'children' : [] },
          { 'roleName' : 'subUser2', 'roleId' : 'role12', 'children' : [
            { 'roleName' : 'subUser2-1', 'roleId' : 'role121', 'children' : [
              { 'roleName' : 'subUser2-1-1', 'roleId' : 'role1211', 'children' : [] },
              { 'roleName' : 'subUser2-1-2', 'roleId' : 'role1212', 'children' : [] }
            ]}
          ]}
        ]},

        { 'roleName' : 'Admin', 'roleId' : 'role2', 'children' : [] },

        { 'roleName' : 'Guest', 'roleId' : 'role3', 'children' : [] }
      ];
    $scope.roleList = $scope.roleList1;
}]);

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