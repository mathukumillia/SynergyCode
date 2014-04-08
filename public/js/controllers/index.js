'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.codeMirrorLoaded = function(editor){
        editor.setOption('lineNumbers', true);
        editor.setOption('theme', 'monokai');
        editor.setOption('lineWrapping', true);
        editor.setOption('mode', 'application/xml');
    };
}]);