app.controller('PastParticipationController', function($scope, $location, UserService) {
    $scope.registeredEvents = UserService.getRegisteredEvents();

    $scope.logout = function() {
        $location.path('/');
    };
});
