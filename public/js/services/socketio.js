'use strict';

//service to let angular use socket
angular.module('mean').factory('socket', function(socketFactory){
  return socketFactory();
});