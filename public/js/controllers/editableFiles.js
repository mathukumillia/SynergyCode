'use strict';

var app = angular.module('mean.editableFiles', []);

app.factory('socket', function(){
	var socket = io.connect('http://localhost:3000'); //connection address needs to change when hosting a live server
	return socket;
});

app.controller('editableFilesCtrl', ['$scope', 'socket', 'Global', function($scope, socket, Global){
	$scope.global = Global;

	$scope.codeMirrorLoaded = function(editor){
        editor.setOption('lineNumbers', true);
        editor.setOption('theme', 'default');
        editor.setOption('lineWrapping', true);
        editor.setOption('mode', 'application/xml');
    };

}]);