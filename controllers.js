angular.module('Movies.controllers', []).
controller('movieCtrl', function($scope, $filter, tomatoAPIservice) {
        $scope.search = "";
        $scope.go = function() {
                tomatoAPI.getMovie().success(function (data) {
                        $scope.movie = data.movies[2].title;
                });
                var searchTerm = encodeURIComponent($scope.search);
                console.log(searchTerm);
        };

});
