'use strict';

angular.module('myApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    templateUrl: 'views/welcome/welcome.html',
    controller: 'WelcomeCtrl'
  });
}])

.controller('WelcomeCtrl', [function() {

}]);
