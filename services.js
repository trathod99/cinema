angular.module('Movies.services', []).
        factory('tomatoAPIservice', function ($http) {
                tomatoAPI = []; 
                apiKey = "skj9u6s5we4cdfcnshebqvvy"
                tomatoAPI.getMovie  = function () {
                        return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=' + apiKey + '&q=Toy+Story&callback=JSON_CALLBACK');
                };
                return tomatoAPI;
        });
