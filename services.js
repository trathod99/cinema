angular.module('Movies.services', []).
    factory('tomatoAPIservice', function ($http) {
        tomatoAPI = []; 
        apiKey = "skj9u6s5we4cdfcnshebqvvy"
        tomatoAPI.getMovie  = function (searchTerm) {
            return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=' + apiKey + '&q=' + searchTerm + '&page_limit=7&page=1&callback=JSON_CALLBACK');
        };
        return tomatoAPI;
    });
