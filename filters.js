angular.module('Movies.filters', []).filter('truncate', function() {
    return function(input, length) {
        if (isNaN(length))
            length = 30;
        if (typeof input === "undefined")
            return "";
        if (input.length <= length) {
            return input;
        } else {
            return String(input).substring(0,length) + "...";
        }
    }
})