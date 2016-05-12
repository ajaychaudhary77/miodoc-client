angular.module('starter')
  .factory('signaling', function (socketFactory) {
    var socket = io.connect('http://95.236.217.196:4000/');
    
    var socketFactory = socketFactory({
      ioSocket: socket
    });

    return socketFactory;
  });