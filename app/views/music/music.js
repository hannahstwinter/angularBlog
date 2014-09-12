'use strict';

angular.module('myApp.music', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/music', {
    templateUrl: 'views/music/music.html',
    controller: 'MusicCtrl'
  });
}])

.controller('MusicCtrl', [function() {

}]);
