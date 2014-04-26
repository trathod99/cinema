angular.module('Movies.controllers', []).
controller('movieCtrl', function($scope, tomatoAPIservice) {
        tomatoAPIservice.getMovie().success(function (data) {
                $scope.movie = data.movies[2].title;
        });
});
