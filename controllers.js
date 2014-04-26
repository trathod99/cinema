angular.module('Movies.controllers', []).
controller('movieCtrl', function($scope, $filter, tomatoAPIservice) {
        $scope.search = "";
        $scope.go = function() {
                var searchTerm = encodeURIComponent($scope.search);
                tomatoAPI.getMovie(searchTerm).success(function (data) {
                        if (typeof $scope.movie === 'undefined') {        
                                $scope.movie = data.movies[2].title;
                                console.log("1");
                        } else {
                                $scope.movie2 = data.movies[2].title;
                                console.log("2");
                        }
                });
                var searchTerm = "";
                $scope.search = "";
        };

});
