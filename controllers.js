angular.module('Movies.controllers', []).
controller('movieCtrl', function($scope, $filter, tomatoAPIservice) {
    $scope.search = "";
    $scope.search2 = "";
    $scope.go = function(which_search, which_box) {
            var searchTerm = encodeURIComponent(which_search);
            tomatoAPI.getMovie(searchTerm).success(function (data) {
                if (which_box === 1) {
                    $scope.results = data;
                } else {
                    $scope.results2 = data;
                }
            });
    }

    $scope.compare = function() {
        if ($scope.movie > $scope.movie2) {
            $scope.firstGreater = true;
            $scope.secGreater = false;
        } else {
            $scope.secGreater = true;
            $scope.firstGreater = false;
        };
    };

    $scope.select = function(number) {
        $scope.movie = $scope.results.movies[number].ratings.audience_score;
        /* this code makes it so that a user can change the first movie after the second movie and have the results still compare correctly */
        if (typeof $scope.movie2 === 'undefined') {
        } else {
            $scope.compare();
        }
    };

    $scope.select2 = function(number2) {
        $scope.movie2 = $scope.results2.movies[number2].ratings.audience_score;
        $scope.compare();
    }

});
