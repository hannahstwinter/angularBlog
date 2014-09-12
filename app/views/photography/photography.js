'use strict';

angular.module('myApp.photography', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photography', {
    templateUrl: 'views/photography/photography.html',
    controller: 'PhotographyCtrl'
  });
}])

.controller('PhotographyCtrl', [function() {

}]);
