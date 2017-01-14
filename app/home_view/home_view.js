'use strict';

angular.module('homeView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home_view/home_view.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function() {

}]);