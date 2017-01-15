'use strict';

angular.module('tumblrAPI').factory('API', function ($http) {
    return {
        'newSearch': function (username, postsNumber) {
            return $http.jsonp('http://' + username + '.tumblr.com/api/read/json', {
                params: {
                    'callback': 'JSON_CALLBACK',
                    'num': postsNumber
                }
            });
        }
    };
});
