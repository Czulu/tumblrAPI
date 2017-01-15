'use strict';

angular.module('tumblrAPI').
controller('homeCtrl', function($scope, API) {
    $scope.username = '';
    $scope.postsNumber = '';
    $scope.requestError = false;
    $scope.noPosts = false;
    $scope.posts = [];

    $scope.getPosts = function() {
        $scope.requestError = false;
        $scope.noPosts = false;
        $scope.posts = [];
        //reverting to legacy methods because then() does not handle 404 errors for some reason
        API.newSearch($scope.username, $scope.postsNumber).success(function(response){
            $scope.posts = response.posts;
            if(response.posts.length === 0) {
                $scope.noPosts = true;
            }
        }).error(function() {
            $scope.requestError = true;
        });
    };
});