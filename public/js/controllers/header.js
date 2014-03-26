'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'File',
        'link': 'articles'
    }, {
        'title': 'Edit',
        'link': 'articles/create'
    }];
    
    $scope.isCollapsed = false;
}]);