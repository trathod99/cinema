angular.module('Movies.controllers', []).
controller('movieCtrl', function($scope, $filter, tomatoAPIservice) {
        $scope.search = "";
        $scope.go = function() {
                var searchTerm = encodeURIComponent($scope.search);
                tomatoAPI.getMovie(searchTerm).success(function (data) {
                        console.log(data);
                        if (typeof $scope.movie === 'undefined') {        
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
                        }
                });
                $scope.search = "";
        };

});
