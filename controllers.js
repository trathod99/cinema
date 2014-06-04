angular.module('Movies.controllers', []).
controller('movieCtrl', function($scope, $filter, $timeout, tomatoAPIservice) {
    $scope.search = "";
    $scope.go = function() {
        var searchTerm = encodeURIComponent($scope.search);
        console.log(searchTerm);
        tomatoAPI.getMovie(searchTerm).success(function (data) {
            $scope.results = data;
            /** if (typeof $scope.movie === 'undefined') {        
                $scope.movie = data.movies[0].ratings.audience_score;
            } else {
                $scope.movie2 = data.movies[0].ratings.audience_score;
                if ($scope.movie > $scope.movie2) {
                    $scope.firstGreater = true;
                    $scope.secGreater = false;
                } else {
                    $scope.secGreater = true;
                    $scope.firstGreater = false;
                }
            } **/
        });
    };
    $scope.select = function(number, results) {
        $scope.movie = results.movies[number].ratings.audience_score;
    };
});
