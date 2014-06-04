'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'File',
        'link': 'articles'
    }, {
        'title': 'Create',
        'link': 'createEditableFiles'
    }];
    
    $scope.isCollapsed = false;
}]);