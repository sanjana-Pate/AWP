app.controller('EventDetailController', function($scope, $location, EventService) {
    $scope.event = EventService.getSelectedEvent();

    if (!$scope.event) {
        // If no event selected, redirect back to home
        $location.path('/admin-home');
    }

    $scope.backToHome = function() {
        $location.path('/admin-home');
    };
});
