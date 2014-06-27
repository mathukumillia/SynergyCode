'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', '$upload',function ($scope, Global, $upload) {
    $scope.global = Global;

    //profile pic uploader
    $scope.picUpload = function($files){
    	var file = $files[0];
    	$scope.upload = $upload.upload({url: '/picUpload', method: 'POST', file: file});

    };

    //list of the projects; will eventually dynamically update with projects found in the database
    $scope.projects = [{
		'name' : 'project1',
		'description' : 'MVHSTSA website'
	}, {
		'name' : 'project2',
		'description' : 'GlalaxyProgramming'
	}, {
		'name' : 'project3',
		'description' : 'Crypto-bot' 
	}, {
		'name' : 'project4',
		'description' : 'NCAA Tournament'
	}, {
		'name' : 'project5',
		'description' : 'Flag'
	}, {
		'name' : 'project6',
		'description' : 'Sorts'
	}, {
		'name' : 'project7',
		'description' : 'Arrays'
	}];
}]);