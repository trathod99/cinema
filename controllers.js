angular.module('Movies.controllers', []).
controller('movieCtrl', function($scope, $filter, tomatoAPIservice) {
        $scope.search = "";
        $scope.go = function() {
                var searchTerm = encodeURIComponent($scope.search);
                console.log(searchTerm);
                tomatoAPI.getMovie(searchTerm).success(function (data) {
                        $scope.movie = data.movies[2].title;
                });
        };

});
