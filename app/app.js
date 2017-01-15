'use strict';

angular.module('tumblrAPI', ['ngRoute']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'views/home_view/home_view.html',
      controller: 'homeCtrl'
    }).otherwise({redirectTo: '/home'});
}]);
