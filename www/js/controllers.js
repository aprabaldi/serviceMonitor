angular.module('starter.controllers', [])

.constant('extServer', {
  'url': 'http://192.168.10.108:3535'
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ServersCtrl', function($scope, $http, extServer) {
  //GET FROM API
  $scope.servers = [];
  $http.get(extServer.url + '/servers').then(function(resp) {
    if(resp.data.ok)
        $scope.servers = resp.data.servers;
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
})

.controller('ServerCtrl', function($scope, $stateParams, $http, extServer) {
  $scope.services = [];
  $http.get(extServer.url + '/services', {params: { serverId: $stateParams.serverId }}).then(function(resp) {
    if(resp.data.ok)
        $scope.services = resp.data.services;
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
})

.controller('ServiceCtrl', function($scope, $stateParams, $http, extServer) {
  $scope.subServices = [];
  $http.get(extServer.url + '/service', {params: { serviceId: $stateParams.serviceId }}).then(function(resp) {
    if(resp.data.ok)
        $scope.subServices = resp.data.service;
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
});
