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
		'description' : 'a small project to raise chickens in a bathtub'
	}, {
		'name' : 'project2',
		'description' : 'a tiny virus to destroy the world'
	}, {
		'name' : 'project3',
		'description' : 'Matthew Price attempt to recreate the big bang' 
	}, {
		'name' : 'project4',
		'description' : 'peter cleverdon waznt here'
	}, {
		'name' : 'project5',
		'description' : 'its late-ish and Im out of creative project ideas'
	}, {
		'name' : 'project6',
		'description' : 'Eat more chikin'
	}, {
		'name' : 'project7',
		'description' : 'LOLOLOLOLOLOYOLO'
	}];
}]);