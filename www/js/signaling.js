angular.module('starter')
  .factory('signaling', function (socketFactory) {
    var socket = io.connect('http://127.0.0.1:3000/');
    
    var socketFactory = socketFactory({
      ioSocket: socket
    });

    return socketFactory;
  });