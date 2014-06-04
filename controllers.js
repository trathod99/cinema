angular.module('Movies.controllers', []).
controller('movieCtrl', function($scope, $filter, tomatoAPIservice) {
    $scope.search = "";
    $scope.search2 = "";
    $scope.go = function() {
        var searchTerm = encodeURIComponent($scope.search);
        tomatoAPI.getMovie(searchTerm).success(function (data) {
            $scope.results = data;
        });
        var searchTerm = encodeURIComponent($scope.search2);
        tomatoAPI.getMovie(searchTerm).success(function (data) {
            $scope.results2 = data;
        });
        /** if ($scope.movie === firstGreater || $scope.movie === secGreater || $scope.movie2 === firstGreater || $scope.movie2 === secGreater) {
            $scope.movie = "";
            $scope.movie2 = "";
        }; **/
    };

    $scope.select = function(number, results) {
        $scope.movie = results.movies[number].ratings.audience_score;
    };

    $scope.select2 = function(number2, results2) {
        $scope.movie2 = results2.movies[number2].ratings.audience_score;
        if ($scope.movie > $scope.movie2) {
            $scope.firstGreater = true;
            $scope.secGreater = false;
        } else {
            $scope.secGreater = true;
            $scope.firstGreater = false;
        };
    }

    $scope.compare = function() {
        
    };

});
