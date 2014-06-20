'use strict';

angular.module('mean.chat').controller('ChatCtrl', ['$scope', 'Global', 'socket', function($scope, Global, socket){
	$scope.global = Global;

	var messages = [];

  //a test message to ensure chat connection
	socket.on('hello', function(){
		console.log('DEBUG: Chat Connected');
	});

  //updates the chat with new messages as they are received from the server
	socket.on('message', function (data) {
    console.log('message recieved');
        if(data.message) {
          console.log('message received');
            messages.push(data);
            var html = '';
            for(var i=0; i<messages.length; i++) {
                html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';

                html += messages[i].message.replace(/(<([^>]+)>)/ig,'') + '<br />';
            }
            $scope.chatContent = html;
        } else {
            console.log('There is a problem: ', data);
        }
    });

  //sends the message to the server after checking to make sure a message was entered
	var sendMessage = function(){
		if($scope.message === ''){
            alert('Please type a message!');
        }else{
            var text = $scope.message;
            socket.emit('send', { message: text, username: window.user.name });
            $scope.message= '';
        }
	};

    //signals chat to send a message when the enter key is pressed
    $scope.checkToSend = function($event){
    	if($event.charCode === 13){
    		sendMessage();
    	}
    };

}]);

//directive the make the chat a draggable element
angular.module('mean.chat').directive('draggable', ['$document', function($document) {
    return function(scope, element, attr) {
    	var startX = 0, startY = 0, x = 0, y = 0;

      	element.css({
	       	position: 'relative',
	    	border: '1px solid black',
      		backgroundColor: 'lightgrey',
       		cursor: 'pointer'
     	});

      	element.on('mousedown', function(event) {
        	startX = event.pageX - x;
        	startY = event.pageY - y;
        	$document.on('mousemove', mousemove);
        	$document.on('mouseup', mouseup);
      	});

      	function mousemove(event) {
	        y = event.pageY - startY;
        	x = event.pageX - startX;
        	element.css({
      	    	top: y + 'px',
        	  	left:  x + 'px'
        	});
	    }

      	function mouseup() {
	        $document.off('mousemove', mousemove);
        	$document.off('mouseup', mouseup);
      	}
    };
}]);