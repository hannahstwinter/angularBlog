'use strict';

angular.module('myApp.tech', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tech', {
    templateUrl: 'views/tech/tech.html',
    controller: 'TechCtrl'
  });
}])

.controller('TechCtrl', [function() {

}]);
