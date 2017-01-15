'use strict';

angular.module('tumblrAPI').filter('slugFilter', function() {
    return function(slug) {
        if (!slug) {
            return '\<No title\>';
        }
        slug = slug.charAt(0).toUpperCase() + slug.slice(1);
        return slug.replace(new RegExp('-', 'g'), ' ');
    }
});