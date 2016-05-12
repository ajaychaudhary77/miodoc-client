angular.module('starter')

  .controller('ContactsCtrl', function ($scope, ContactsService) {
    $scope.contacts = ContactsService.onlineUsers;
  });