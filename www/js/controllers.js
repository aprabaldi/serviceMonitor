angular.module('starter.controllers', [])

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

.controller('ServersCtrl', function($scope) {
  //GET FROM API
  $scope.servers = [
    { title: 'ws1', id: 1, status: 'error' },
    { title: 'ws2', id: 2, status: 'warning' },
    { title: 'mq-sms01', id: 3, status: 'ok' },
    { title: 'mq-sms-nevada', id: 4, status: 'ok' },
    { title: 'mq-sms', id: 5, status: 'ok' },
    { title: 'ws-sms', id: 6, status: 'warning' },
    { title: 'marketing-api', id: 7, status: 'error' }
  ];
})

.controller('ServerCtrl', function($scope, $stateParams) {
  //GET INFO FROM API
  $scope.services = [
    { title: 'smsop', id: 1, status: 'error'},
    { title: 'smsconsulta', id: 2 , status: 'warning'},
    { title: 'clasificador', id: 3 , status: 'ok' }
  ];
})

.controller('ServiceCtrl', function($scope, $stateParams) {
  //GET INFO FROM API
  $scope.subServices = [
    { status: 'error', message: 'Failed', id: 1, title: 'Claro'},
    { status: 'warning', message: 'Something went wrong... Running anyway', id: 2, title: 'Personal'},
    { status: 'ok', message: 'Service is running.', id: 3, title: 'Movistar'}
  ];
});
